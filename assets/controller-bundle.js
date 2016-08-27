'use strict';

app.controller('homeController',
    function ($scope, $location, UsuarioService, sharedProperties) {

        $scope.listarUsuarios = function () {
            UsuarioService.listarUsuarios(function (response) {
                $scope.userList = response;
            });
        }

        $scope.changeSearchedUser = function (userId){
            sharedProperties.setSearchedUser(userId);
        }

         $scope.randomClassSize = function () {
            var randomNumber = Math.random();
            if(randomNumber < 0.3){
                return 'card';
            } else if (randomNumber < 0.6){
                return 'card card-medium';
            } else if (randomNumber < 1){
                return 'card card-large';
            }else return '';
        }


        $scope.goToProfile = function(id)
        {
            if(!id) alert("UPS! Usuario invalido");
            sharedProperties.setSearchedUser(id);
            $location.path('userProfile');

        }

    }
);

app.controller('userProfileController',
    function ($scope, UsuarioService, sharedProperties, URLS) {

        $scope.profileOwner = (sharedProperties.getSearchedUser() == sharedProperties.getActualUser()) || (sharedProperties.getSearchedUser() == '');

        $scope.buscarUsuario = function () {
            UsuarioService.buscarUsuario(sharedProperties.getSearchedUser(), function (response) {
                $scope.user = response;
            });
        }

       


        $scope.range = function(min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        };
    }
);

app.controller('registerController',
    function ($scope, $location, UsuarioService, sharedProperties) {

        $scope.iniRegister = function () {
            if (sharedProperties.getIsUserLogged()) {
                $location.path("#/");
            }
        }

        $scope.registrarUsuario = function (name, lastName, faculty, career, email, password) {
            var body = {
                "nombre": name,
                "apellidos": lastName,
                "facultad": faculty,
                "carrera": career,
                "correo": email,
                "contrasena": password
            };

             UsuarioService.registrarUsuario(body, function (response) {
                if(response.valido){
                    alert('Se ha registrado exitosamente');
                    $location.path("#/");
                } else {
                    alert('Ha habido un error');
                }
            });
        }
    });

app.controller('loginController',
    function ($scope, $location, UsuarioService, sharedProperties) {

        $scope.initLogin = function () {
            if (sharedProperties.getIsUserLogged()) {
                $location.path("#/");
            }
        }

        $scope.logearUsuario = function (email, password) {
            var body = {
                "correo": email,
                "contrasena": password
            };

            /*UsuarioService.logearUsuario(body, function (response) {
                if(response.valido){*/
                    sharedProperties.setActualUser(/*response.user.id*/'1');
                    sharedProperties.setSearchedUser(/*response.user.id*/'1');
                    sharedProperties.setIsUserLogged(true);
                    $location.path("#/");
                /*} else {
                    alert("Email or password incorrect");
                }
            });*/
        }
});