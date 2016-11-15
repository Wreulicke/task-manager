export default (keyName) => function(e) {
  if (e.key === keyName) return this(e)
};