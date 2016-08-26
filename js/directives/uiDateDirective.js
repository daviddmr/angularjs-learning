/**
 * Created by davidmelo on 8/26/16.
 */
angular.module("listaTelefonica").directive("uiDate", function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      var _formatDate = function (date) {
        date = date.replace(/[^0-9]+/g, "");
        if(date.length > 2) {
          date = date.substring(0,2) + "/" + date.substring(2);
        }
        if(date.length > 5) {
          date  = date.substring(0,5) + "/" + date.substring(5,9);
        }
        return date;
      };

      element.bind("keyup", function () {
        //Setando o valor do viewValue com uma concatenação
        ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
        //Atualizando a cada pressionada de tecla com o render
        ctrl.$render();
      });
    }
  };
});