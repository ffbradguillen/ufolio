'use strict';

app.controller('homeController',
    function ($scope, UsuarioService, sharedProperties) {

        $scope.listarUsuarios = function () {
            UsuarioService.listarUsuarios(function (response) {
                $scope.userList = response;
            });
        }

        $scope.changeSearchedUser = function (userId){
            sharedProperties.setSearchedUser(userId);
        }
    }
);

app.controller('userProfileController',
    function ($scope, UsuarioService, sharedProperties) {

        $scope.buscarUsuario = function () {
            UsuarioService.buscarUsuario(sharedProperties.getSearchedUser(), function (response) {
                $scope.user = response;
            });
        }
    }
);

app.controller('registerUserController',
    function ($scope, UsuarioService, sharedProperties) {

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
    }
);

var div3Controller = angular.module('app').controller('div3Controller', function ($scope) {
    $scope.variableDiv3 = 'this is a div3 variable';
});