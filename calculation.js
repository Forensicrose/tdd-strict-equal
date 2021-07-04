function total(num1, num2) {
  let num1Type = typeof num1
  let num2Type = typeof num2

  // eslint-disable-next-line eqeqeq
  if (num1 == num2 && num1Type == num2Type) {
    return true
  }

  return false
}

module.exports = total
