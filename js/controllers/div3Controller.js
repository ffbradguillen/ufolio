
var div3Controller = angular.module('app').controller('div3Controller', function ($scope, UsuarioService) {
    $scope.variableDiv3 = 'this is a div3 variable';

    $scope.registrarUsuario = function () {
            var body = {
                "nombre *": "Brad",
                "apellidos *": "Guillen",
                "facultad": "ingenieria",
                "carrera": "informatica",
                "correo*": "bradguillen@gmail.com",
                "contrasena*": "asd"
            };

            UsuarioService.registrarUsuario(body, function (response) {
                return response;
            });
        }

});