module.exports = function check(str, bracketsConfig) {
  let arr = str.split('')
    if ((arr[arr.length - 1] == ')' && arr[arr.length - 3] == '(') || (arr[arr.length - 1] == ')' && arr[arr.length - 2] == '|')){
      return false
    }

    if (arr[1] == '[' && arr[arr.length - 2] == '('){
      return false
    }

    if (arr[arr.length - 1] == ')' || arr[arr.length - 1] == '|' || arr[arr.length - 1] == '2'){
      return true
    }
    return false
}
