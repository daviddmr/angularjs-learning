/**
 * Created by davidmelo on 8/12/16.
 */
//Usando método Factory
angular.module("listaTelefonica").factory("contatosAPI", function ($http, constants) {
  var _getContatos = function () {
    return $http.get(constants.baseUrl + "/contatos")
  };

  var _saveContatos = function (contato) {
    return $http.post(constants.baseUrl +  "/contatos", contato);
  };

  return{
    getContatos: _getContatos,
    saveContatos: _saveContatos
  };
});