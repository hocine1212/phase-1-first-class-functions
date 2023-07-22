function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function returnedFunction() {};
}

function returnsAnAnonymousFunction() {
  return () => {};
}
