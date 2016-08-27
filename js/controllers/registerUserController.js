
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