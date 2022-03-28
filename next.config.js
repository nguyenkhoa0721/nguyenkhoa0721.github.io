const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  assetPrefix: isProd ? '/nguyenkhoa0721.github.io/' : ''
}