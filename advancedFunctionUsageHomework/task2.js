function reverseCounter(num) {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new Error('First argument must be a valid number!');
  }
  console.log(num);

  if (num <= 0) {
    return;
  }
  reverseCounter(num - 1);
}

reverseCounter(18);
