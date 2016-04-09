app.filter('moveDecimal', function () {
  return function (input) {
    console.log(input);
    return input / 100;
  };
});