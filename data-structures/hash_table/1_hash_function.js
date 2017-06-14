var hash = module.exports = function(obj) {
  var str = JSON.stringify(obj);
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    var ch = str.charCodeAt(i);
    result = ((result << 5) - result) + ch;
    result |= 0;
  }
  return result;
};
