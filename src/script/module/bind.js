module.exports = function(...args) {
  return this.bind(null, ...args)
}