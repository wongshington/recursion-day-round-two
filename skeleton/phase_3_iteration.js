Array.prototype.bubbleSort = function () {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < this.length - 1; i ++ ) {
      let j = i + 1;
      if (this[i] > this[j]) {
          let temp = this[j];
          this[j] = this[i];
          this[i] = temp;
          unsorted = true;
      }

    }
}
  return this;
};

String.prototype.substrings = function () {
  const result = [];
  for (let i = 0; i < this.length; i ++) {
    for (let j = i+1; j<= this.length+1; j ++) {
      result.push( this.slice(i,j) );
    }
  }
return result;
};
