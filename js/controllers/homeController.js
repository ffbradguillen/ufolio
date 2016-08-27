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