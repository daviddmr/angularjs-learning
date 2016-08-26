/**
 * Created by davidmelo on 8/25/16.
 */
angular.module("listaTelefonica").directive("uiAlert", function () {
  return {
    templateUrl: 'js/directives/alert.html',
    restrict: "AE",
    scope: {
      title: "@"
      // ,message: "="
    },
    transclude: true
  };
});