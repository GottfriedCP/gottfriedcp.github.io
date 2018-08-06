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

For example, use passphrase 'heresypr' to open [this document](https://skunkworks.hopto.org/?aes#U2FsdGVkX18WwzljC/l6ufSCdNahuK+x1/862vtqvgOD38TPf9tkn0I2IbCA/QRkO9j6IJDslMVdAtQINaGyqrQYaHx9Huu9MlFQgJdz9VXcUkGFJbGzITSrVIHZ19b7j0Kz6QoYkgMMTxCS9dg3IjLnpAIiRPB+OYMAHRjgPmYakos5oAfSfdOBt6eiVRCFe62is7ZBSsRj3OP3+RiNQ7BosAZlYlBMnMcYpSDl7xJwhWSsgVvZHRvndjhFctiLeWNHzfMFd2CFIk4SK9Ruclqt6AxcBSLp47MsFAboIF/yx2/fJbbYTxCG2gWA7HyO+jRIjzzX3PYPmxqq6Sb97nr3whE+IPBz8QS6c8mZdJae4VmCNOaVtNJ4wdY50TsGTCwFZdPKIRXBOScs2jCml8+8gg9CO2AoqlUIHXBjv1lWjqtz/e6IXWk1hN0nbOwqAfp88d7u7KFPtZzN3fX4Ns7PsAit+dHkXKm/w6XjuUrZBOq4BF5Id2LczVFURapQ0lU4uI5N5e8j75611Wv72Gz2VAjiS0Sy/HeUKwNTjrAaUN8Be6Db3NOtIVT63v+00+bCaxVih31J8aa1929512tgDjwJ6x0NvLsNmpOwCxHjP2/6MulDJmJfr+FESkWYNlhNjZSWe9TBTXyHNPwxd0U8DF2lY/sfvu5rXnLdaDaqg572eXuOJATul++Z4U+P+WeMKYBbV8pCQL0xvcS8UZ8vL3EZnVPmsMtk9lUG49tLOuK8FFybQ/zfV7tWMivKx81X2PiELaiUy87cOrptId5SNSHeAdVG5UUQGnDwXLe2R9q8ufqrIxlGbuurnvJUn6LBp0lNUBLkctr2b+YfxZN9X/9armPyPByoE6KMenoX1NRc4PntJ5iYQ9SSxV7aQNpyxbpLj+Sp/PtBi7C6HafMLJth1EorXOyPxTzsVPIKtEVXtKuUAdji+g2gSiqk1muzXAJcaQte6pjB9LalrXWBS/XaqnZfU6e/QyUFGJ79v3Oo2NwQflNz1xnAPFGRchM+dm5aF8xfva0/xxp7XQ==)

## License

MIT License