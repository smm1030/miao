var smm1030 = function() {
  chunk: function chunk(array, size = 1) {
    var len = array.length
    var result = []
    var count = 0
    var arr = []
    for (var i = 0; i < len; i++) {
      count++
      if (count <= size) {
        arr.push(array[i])
      }
      if (count == size) {
        result.push(arr)
        count = 0
        arr = []
      }
    }
    if (count > 0) {
      result.push(arr)
    }
    return result
  }

  compact: function compact(array) {
    var len = array.length
    var result = []
    for (var i = 0; i < len; i++) {
      var a = array[i]
      if (a !== false && a !== null && a !== 0 && a !== '' && a !== undefined && a == a) {
        result.push(a)
      }
    }
    return result
  }

  fill: function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  drop: function drop(array, n = 1) {
    var len = array.length
    var arr = []
    if (n >= len) {
      return arr
    }
    for (var i = n; i < len; i++) {
      arr.push(array[i])
    }
    return arr
  }

  head: function head(array) {
    return array[0]
  }

  indexOf: function indexOf(array, value, fromIndex = 0) {
    var len = array.length
    if (fromIndex < 0) {
      var abs = Math.abs(fromIndex)
      if (abs >= len) {
        var i = 0
        for (; i < len; i++) {
          if (value == array[i]) {
            return i
          }
        }
        return -1
      } else {
        var i = len - abs
        for (; i >= 0; i--) {
          if (value == array[i]) {
            return i
          }
        }
        return -1
      }
    }
    for (var i = fromIndex; i <len; i++) {
      if (value == array[i]) {
        return i
      }
    }
    return -1
  }

  lastIndexOf: function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (value == array[i]) {
        return i
      }
    }
    return -1
  }

  initial: function initial(array) {
    array.pop()
    return array
  }

  join: function join(array, separator = ',') {
    var len = array.length
    var result = ''
    result = result + array[0]
    for (var i = 1; i < len; i++) {
      result = result + separator + array[i]
    }
    return result
  }

  last: function last(array) {
    return array[array.length - 1]
  }

  pull: function pull(array,...value) {
    for (var j = 0; j < arguments.length; j++) {
      value = arguments[j]
      for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
          array.splice(i,1)
        }
      }
    }
    return array
  }

  reverse: function reverse(array) {
    var len = array.length
    var i = 0
    var j = len - 1
    while (i < j) {
      var left = array[i]
      array[i] = array[j]
      array[j] = left
      i++
      j--
    }
    return array
  }

  difference: function difference(array, ...value) {
    var arr = []
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < arguments.length; j++) {
        value = arguments[j]
        var flag = true
        if (array[i] == value) {
          flag = false
          break
        }
      }
      if (flag) {
        arr.push(array[i])
      }
    }
    return arr
  }

  dropRight: function dropRight(array, n = 1) {
    if (n >= array.length) {
      return []
    }
    for (var i = 0; i < n; i++) {
      array.pop()
    }
    return array
  }

  intersection: function intersection(...array) {
    var arr = arguments[0]
    var len = arr.length
    var result = []
    var arrlen = arguments.length
    for (var i = 0; i < len; i++) {
      var a = arr[i]
      var flag = true
      for (var j = 1; j < arrlen; j++) {
        var arrAfter = arguments[j]
        if (!(a in arrAfter)) {
          flag = false
          break
        }
      }
      if (flag) {
        result.push(a)
      }
    }
    return result
  }

  sortedIndex: function sortedIndex(array, value) {
    var len = array.length
    if (array[0] <= array[len - 1]) {
      for (var i = 0; i < len; i++) {
        if (value <= array[i]) {
          return i
        }
      }
      return len
    } else {
      for (var i = 0; i < len; i++) {
        if (value >= array[i]) {
          return i
        }
      }
      return len
    }
  }

  uniq: function uniq(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (!result.includes(array[i])) {
        result.push(array[i])
      }
    }
    return result
  }

  nth: function nth(array, n = 0) {
    var len = array.length
    if (n < 0) {
      return array[len + n]
    }
    return array[n]
  }
  every: function every(){}
  return {
    chunk,
    compact,
    fill,
    drop,
    head,
    indexOf,
    lastIndexOf,
    initial,
    join,
    last,
    pull,
    reverse,
    every,
    difference,
    dropRight,
    intersection,
    sortedIndex,
    uniq,
    nth,

  }
}()
