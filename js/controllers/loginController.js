
app.controller('loginController',
    function ($scope, $location, UsuarioService, sharedProperties) {

        $scope.initLogin = function () {
            if (sharedProperties.getUserIsloged()) {
                $location.path("#/");
            } else {
                $location.path("#/login");
            }
        }

        $scope.logearUsuario = function (email, password) {
            var body = {
                "correo*": email,
                "contrasena*": password
            };

            /*UsuarioService.logearUsuario(body, function (response) {
                if(response.valido){*/
                    sharedProperties.setactualUser(/*response.user.id*/'1');
                    sharedProperties.setSearchedUser(/*response.user.id*/'1');
                    sharedProperties.setUserIsloged(true);
                    $location.path("#/");
                /*} else {
                    alert("Email or password incorrect");
                }
            });*/
        }
});