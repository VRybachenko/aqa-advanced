function handleEven() {
  console.log('number is even');
}

function handleOdd() {
  console.log('number is odd');
}

function handleNum(number, onEven, onOdd) {
  if (typeof number !== 'number' || Number.isNaN(number)) {
    throw new Error('First argument must be a valid number!');
  }

  if (typeof onEven !== 'function' || typeof onOdd !== 'function') {
    throw new Error('Callbacks must be functions!');
  }

  if (number % 2 === 0) {
    onEven();
  } else {
    onOdd();
  }
}

handleNum(123, handleEven, handleOdd);
handleNum(56, handleEven, handleOdd);
