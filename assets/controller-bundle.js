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
    }
);

app.controller('userProfileController',
    function ($scope, UsuarioService, sharedProperties) {

        $scope.profileOwner = (sharedProperties.getSearchedUser() == sharedProperties.getActualUser()) || (sharedProperties.getSearchedUser() == '');

        $scope.buscarUsuario = function () {
            UsuarioService.buscarUsuario(((profileOwner) ? sharedProperties.getActualUser() : sharedProperties.getSearchedUser()), function (response) {
                $scope.user = response;
            });
        }
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