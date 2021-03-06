/**
 * Created by davidmelo on 8/25/16.
 */
angular.module("listaTelefonica").provider("serialGenerator", function () {
  var _length = 20;

  this.setLenght = function (length) {
    _length = length;
  };

  this.getLenght = function () {
    return _length;
  };

  this.$get = function () {
    return {
      generate: function () {
        var serial = "";
        while (serial.length < _length) {
          serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
        }
        return serial;
      }
    };
  };
});