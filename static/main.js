// Event listener below is used instead of onload
document.addEventListener("DOMContentLoaded", function(event) {
    determineOperation()
})

// DEBUG: time measurement
let encryptStartTime, encryptEndTime
let decryptStartTime, decryptEndTime

function determineOperation() {
    if (!document.location.hash) {
        // show message creation form
        document.getElementById('show-message').style.display = 'none'
        document.getElementById('create-message').style.display = 'inline'
    } else {
        // try to decode the message in URL fragment
        document.getElementById('show-message').style.display = 'inherit'
        document.getElementById('create-message').style.display = 'none'
    }
}

function createHash() {
    try {
        let passphrase = document.getElementById('passphrase').value
        if (passphrase.length < 8) throw new Error('Minimum length of passphrase is 8')
        let rawMessage = document.getElementById('message').value
        //let rawMessage = converter.makeHtml(document.getElementById('message').value)
        if (rawMessage.length < 1) throw new Error('Please enter a message')
        console.log('length of raw message: ' + rawMessage.length)

        let algo = '' // possible string value: aes, des, rab, rc4
        let algoList = document.getElementsByName('algorithm')
        for (i = 0; i < algoList.length; i++) {
            if (algoList[i].checked) algo = algoList[i].value
        }
        console.log('using ' + algo + ' encryption')
        // set the cipher algorithm
        let cipher = getCipher(algo)
        // compress and encrypt
        encryptStartTime = new Date()
        let ciphertext = cipher.encrypt(compress(rawMessage), passphrase)
        encryptEndTime = new Date()
        let timeDiff = encryptEndTime - encryptStartTime
        alert('encrypted in ' + timeDiff + ' ms')
        console.log('encrypted in ' + timeDiff + ' ms')
        // Set query string parameter containing crypto algo
        window.history.replaceState(null, '', '?' + algo)
        // Append message to URL fragment
        window.location.hash = ciphertext.toString()
        console.log('length of final ciphertext: ' + ciphertext.toString().length)
        //console.log(ciphertext.toString()) // TODO: delete this when possible
    } catch(e) {
        alert(e.message)
    }
}

function decodeHash() {
    try {
        let ciphertext = window.location.hash.substring(1)
        let algo = window.location.search.substring(1)
        let passphrase = document.getElementById('passphrase-check').value
        if (passphrase.length < 8) throw new Error('Minimum length of passphrase is 8')
        let cipher = getCipher(algo)
        decryptStartTime = new Date()
        let compressedplaintext = cipher.decrypt(ciphertext, passphrase).toString(CryptoJS.enc.Utf8)
        let plaintext = decompress(base64ToByteArray(compressedplaintext))
        decryptEndTime = new Date()
        let timeDiff = decryptEndTime - decryptStartTime
        alert('decrypted in '+ timeDiff +' ms')
        
        let converter = new showdown.Converter() // initialize markdown converter
        document.getElementById('message-content').innerHTML = converter.makeHtml(plaintext)
    } catch(e) {
        alert('Error: invalid cipher or key - ' + e.message)
        console.error(e.message)
    }
}

function compress(data) {
    /// To compress:
    /// NOTE: mode can be 1-9 (1 is fast and pretty good; 9 is slower and probably much better).
    /// NOTE: compress() can take a string or an array of bytes.
    /// (A Node.js Buffer or a Uint8Array instance counts as an array of bytes.)
    // return return base64 string
    let base64string = btoa(String.fromCharCode.apply(null, new Uint8Array(LZMA.compress(data, 9))))
    console.log('length of compressed message: ' + base64string.length)
    return base64string
}

function decompress(data) {
    /// To compress:
    /// NOTE: mode can be 1-9 (1 is fast and pretty good; 9 is slower and probably much better).
    /// NOTE: compress() can take a string or an array of bytes.
    /// (A Node.js Buffer or a Uint8Array instance counts as an array of bytes.)
    // return byte array
    return LZMA.decompress(data)
}

function base64ToByteArray(base64) {
    let raw = window.atob(base64)
    let rawLength = raw.length
    let array = new Uint8Array(new ArrayBuffer(rawLength))
    for(i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i)
    }
    return array
}

function getCipher(algo) {
    switch (algo) {
        case 'aes':
            return CryptoJS.AES
        case 'des':
            return CryptoJS.TripleDES
        case 'rab':
            return CryptoJS.Rabbit
        case 'rc4':
            return CryptoJS.RC4
        default:
            throw new Error('Unable to set cipher: ' + algo + ' is not valid')
    }
}