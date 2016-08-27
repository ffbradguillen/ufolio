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