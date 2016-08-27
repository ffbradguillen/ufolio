
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