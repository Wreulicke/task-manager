module.exports = function(resolve, reject) {
  if (this != null && resolve != null) {
    return resolve(this)
  } else {
    reject()
  }
}