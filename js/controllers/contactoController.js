'use strict';

app.controller('contactoController',
    function ($scope) {
        $scope.sent = false;


        $scope.enviar = function () {
            alert('Listo! Mensaje enviado correctamente');
        }
        
    }
);