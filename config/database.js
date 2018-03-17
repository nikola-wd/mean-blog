// Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: 'mongodb://localhost:27017/mean-blog-full-app',
  // secret: crypto,
  secret: 'secret-for-auth',
  db: 'mean-blog-full-app'
}