var smm1030 = {
  chunk: function (array, size = 1) {
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
  },

  compact: function (array) {
    var len = array.length
    var result = []
    for (var i = 0; i < len; i++) {
      var a = array[i]
      if (a !== false && a !== null && a !== 0 && a !== '' && a !== undefined && typeof (a) !== 'NaN') {
        result.push(a)
      }
    }
    return result
  },

  

}
