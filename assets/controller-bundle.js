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

        $scope.randomClassSize = function () {
            var randomNumber = Math.random();
            if(randomNumber < 0.3){
                return 'card';
            } else if (randomNumber < 0.6){
                return 'card card-medium';
            } else if (randomNumber < 1){
                return 'card card-large';
            }
        }
    }
);

app.controller('registerController',
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
    });

app.controller('loginController',
    function ($scope, $location, UsuarioService, sharedProperties) {
        $scope.logearUsuario = function (email, password) {
            var body = {
                "correo*": email,
                "contrasena*": password
            };

            /*UsuarioService.logearUsuario(body, function (response) {
                if(response.valido){*/
                    sharedProperties.setactualUser(/*response.user.id*/'1');
                    sharedProperties.setSearchedUser(/*response.user.id*/'1');
                    $location.path("#/userProfile");
                /*} else {
                    alert("Email or password incorrect");
                }
            });*/
        }
});