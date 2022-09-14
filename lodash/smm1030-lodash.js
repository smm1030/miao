var smm1030 = {
  chunk: function (array, size = 1) {
    var len = array.length
    var result = []
    var count = 0
    for (var i = 0; i < len; i++) {
      var arr = []
      count++
      if (count <= 3) {
        arr.push(array[i])
      }
      if (count = 3) {
        result.push(result)
        count = 0
      }
    }
    if (count < 3) {
      result.push(arr)
    }
    return result
  }


}
