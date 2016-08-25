/**
 * Created by davidmelo on 8/25/16.
 */
//Usando método Service
angular.module("listaTelefonica").service("operadorasAPI", function ($http, constants) {
  this.getOperadoras = function () {
    return $http.get(constants.baseUrl + "/operadoras");
  };
});