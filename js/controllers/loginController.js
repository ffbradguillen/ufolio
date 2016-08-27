
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