/**
 * Created by davidmelo on 8/25/16.
 */
angular.module("listaTelefonica").filter("ellipsis", function () {
  return function (input, size) {
    //Caso a palavra seja menor do que a limitação, simplesmente retorna a palavra
    if (input.length <= size) return input;
    //Caso não seja passado um parâmetro para o size, ele admite um tamanho 2 como default
    var output = input.substring(0, (size || 2)) + "...";
    return output;
  }
});