/**
 * Created by davidmelo on 8/12/16.
 */
angular.module("listaTelefonica").factory("contatosAPI", function ($http) {
  var _getContatos = function () {
    return $http.get("http://localhost:3412/contatos")
  };

  return{
    getContatos: _getContatos
  };
});