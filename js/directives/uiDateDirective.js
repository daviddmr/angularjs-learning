/**
 * Created by davidmelo on 8/26/16.
 */
angular.module("listaTelefonica").directive("uiDate", function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      element.bind("keyup", function () {
        console.log(ctrl.$viewValue);
      });
    }
  };
});