app.filter('moveDecimal', function () {
  return function (input) {
    return input / 100;
  };
});

app.filter('boolFilter', function () {
  return function (input) {
    switch (input) {
      case true:
        return "Yes";
      case false:
        return "No";
      default:
        return "No";
    }
  };
});