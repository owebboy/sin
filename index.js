module.exports = function(value, mode) {
  if (mode == 'deg' || mode == 'degs' || mode == 'degree' || mode == 'degrees') {
    return new Number(Math.round(Math.sin(Number(value)*(Math.PI/180))))
  } else {
    return new Number(Math.round(Math.sin(Number(value))))
  }
}
