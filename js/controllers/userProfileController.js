
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