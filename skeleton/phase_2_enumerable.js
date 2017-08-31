Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i ++) {
    cb(this[i]);
  }
};

[1,2,3].myEach(el => {
  console.log(el);
});

Array.prototype.myMap = function(cb) {
  let arr = [];

  this.myEach (el=> {arr.push(cb(el));
});
return arr;
};

[100,2333,43535,3454].myMap(Math.sqrt);


Array.prototype.myReduce = function (cb, acc) {
  if (typeof acc === 'undefined') {
    console.log(acc);

    acc = 0;
    for (let i = 0; i < this.length; i ++) {
      console.log(acc = cb(acc, this[i]));
    }
    return acc;
  } else {
    for (let i = 0; i < this.length; i ++) {
      console.log(acc = cb(acc, this[i]));
    }
    return acc;
  }
};
