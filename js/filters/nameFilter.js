/**
 * Created by davidmelo on 8/25/16.
 */
angular.module("listaTelefonica").filter("name", function () {
  return function (input) {
    //Separa os nomes em substrings usando o " " como parâmetro de separação
    var listaDeNomes = input.split(" ");
    var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
      //Verifica se o nome passa na verificação do regex, caso sim, retorna o próprio nome
      if(/(da|de)/.test(nome)) return nome;
      //Caso não passe na verificação do regex, pega o primeiro elemento da substring e passa pra maiúsculo e o segundo elemento em diante passa para minúsculo
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });
    //Junta os elementos separados por " " em um único elemento
    return listaDeNomesFormatada.join(" ");
  };
});