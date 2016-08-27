
app.controller('loginController',
    function ($scope, UsuarioService, sharedProperties) {
        $scope.logearUsuario = function () {
            var body = {
                "correo*": "bradguillen@gmail.com",
                "contrasena*": "asd"
            };

            UsuarioService.registrarUsuario(body, function (response) {
                return response;
            });
        }
});