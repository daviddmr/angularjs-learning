//Definindo o controller
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http, contatosAPI){
    $scope.app = "Lista Telefonica";
    /*$scope.contatos = [
        {nome: "Pedro", telefone: "9999-9999", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"} ,cor: "blue"},
        {nome: "Ana", telefone: "9999-9998", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}, cor: "yellow"},
        {nome: "Maria", telefone: "9999-9777", data: new Date(), operadora: {nome: "GVT", codigo: 41, categoria: "Fixo"}, cor: "red"}
    ];*/
    /*$scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
        {nome: "Tim", codigo: 16, categoria: "Celular", preco: 3},
        {nome: "GVT", codigo: 41, categoria: "Fixo", preco: 1},
        {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 0.5}
    ];*/
    $scope.contatos = [];
    $scope.operadoras = [];
    var carregarContatos = function () {
    	contatosAPI.getContatos().success(function (data, status) {
    		console.log(data);
    		$scope.contatos = data;
    	});
    };

    var carregarOperadoras = function () {
    	$http.get("http://localhost:3412/operadoras").success(function (data, status) {
    		console.log(data);
    		$scope.operadoras = data;
    	});
    };

    $scope.adicionarContato = function(contato) {
        // Maneira ruim de passar parâmetro, pois quebra um mantra:
        // Devemos evitar ao máximo ler o scope estando dentro do controller
        // $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});
        // Maneira razoável de passar parâmetro
        // Pois podemos passar todo o objeto de uma vez
        // $scope.contatos.push({nome: nome, telefone: telefone});
        // Maneira interessante de se passar o parâmetro
        // $scope.contatos.push(angular.copy(contato));
        contatosAPI.saveContatos(contato).success(function (data) {
			delete $scope.contato;
        	$scope.contatoForm.$setPristine(); //Seta o formulario para pristine depois de apagado
        	carregarContatos(); //chama o método de get para atualizar a tela
        	// $scope.contatos.push(contato); //adiciona o contato que foi incluso na chamada do post
        	// $scope.contatos.push(data); //adiciona o contato que é o retorno da operação de post
        });
    };
    $scope.apagarContatos = function(contatos) {
        //A lista de contatos original recebe os valores filtrados dos elementos que NÃO estão selecionados
        $scope.contatos = contatos.filter(function (contato){
            if(!contato.selecionado) return contato;
        });
    };
    $scope.ordenarPor = function (campo){
    	$scope.criterioDeOrdenacao = campo;
    	$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    $scope.isContatoSelecionado = function (contatos) {
        // Verifica se há algum elemento em contatos que possua o valor de selecionado igual a true
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    carregarContatos();
    carregarOperadoras();
});