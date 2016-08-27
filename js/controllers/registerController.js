
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