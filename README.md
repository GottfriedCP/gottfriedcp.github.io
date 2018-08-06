# About Project Heresy

This app takes document written using Markdown markup language, compresses and encrypts it, then puts the generated ciphertext into a URL fragment. The URL can be shared, and the document can be decrypted back using the same secret passphrase (symmetric key). 

In this experiment, these crypto algorithms are used:
- AES,
- Rabbit,
- RC4,
- Triple DES.

This experiment is inspired by [itty.bitty](https://github.com/alcor/itty-bitty). The app can be accessed [here](https://skunkworks.hopto.org/).

## Usage

Write a document, choose encryption algorithm, enter a passphrase, then click 'Encrypt message'. The URL in the browser's url/search bar is ready to be saved (or shared).

To read a document, just access the generated URL. Enter the valid passphrase and click 'Decrypt message'. The document should now be rendered successfully.

## License

MIT License