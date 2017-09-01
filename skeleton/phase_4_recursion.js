const range = function range(start, end) {
  if (start === end) {
    return [start];
  }
  let result = [start];
  result = result.concat(range(start + 1, end));
  return result;
};

const sumRec = function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let sum = arr[arr.length-1];
  sum += sumRec(arr.slice(0,arr.length -1));
  return sum;
};

const exponent = function exponent(b, n) {
  if (n === 0) {
    return 1;
  }
  b *= exponent(b, n-1);
  return b;
};

const fibonacci = function fibonacci(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n ===2 ) {
    return [0,1];
  }
  let lastIndex = fibonacci(n-1).length-1;
  return fibonacci(n-1).concat([fibonacci(n-1)[lastIndex] +fibonacci(n-1)[lastIndex - 1]] );

};










//
