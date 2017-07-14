function setAlign(n, k) {
  var ar = Array.apply(null, Array(n)).map(function() {
    return Number.call(Number, arguments[1] + 1);
  });
  console.log(ar);
  console.log(sets(ar, 3));
  var answer = [];
  return answer;
}

function sets(input, size) {
  var results = [],
    result,
    mask,
    i,
    total = Math.pow(2, input.length);
  for (mask = size; mask < total; mask++) {
    result = [];
    i = input.length - 1;

    do {
      if ((mask & (1 << i)) !== 0) {
        result.push(input[i]);
      }
    } while (i--);

    if (result.length >= size) {
      results.push(result);
    }
  }

  return results;
}

setAlign(3, 5);
