/**
 * Created by davidmelo on 8/26/16.
 */
angular.module("listaTelefonica").directive("uiDate", function ($filter) {
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

      //Garante que só jogará no scope externo quando o valor date estiver completo, ou seja, com tamanho 10(incluindo as duas barras)
      ctrl.$parsers.push(function (value) {
        if(value.length === 10){
          var dateArray = value.split("/");
          //Retorna um valor em milissegundos para o scope
          return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
        }
      });

      //Usa um filtro já nativo do angular, o date e converte o valor de milissegundos em formato padrão de data
      ctrl.$formatters.push(function (value) {
        return $filter("date")(value, "dd/MM/yyyy");
      });
    }
  };
});