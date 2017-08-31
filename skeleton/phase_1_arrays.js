Array.prototype.uniq = function() {

  const result = [];

  this.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

[1, 2,3 ,3, 4].uniq();

Array.prototype.twoSum = function() {
  const result = [];

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function () {
    const result = [];
      for (let i = 0; i < this.length; i++) {
        const row = [];
        for (let j = 0; j< this.length; j++) {
          row.push( this[j][i] );
        }
        result.push( row);
      }
      return result;
};
