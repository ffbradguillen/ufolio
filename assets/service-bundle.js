
app.service('UsuarioService', function ($http, URLS) {

    this.listarUsuarios = function (callback) {
        $http.get(URLS.backendURL + URLS.usuario.listarUsuarios)
            .then(function (response) {
                if (response.data && response.data.valido) {
                    return callback(response.data);}
            });
    }

    this.buscarUsuario = function (id, callback) {
        $http.get(URLS.backendURL + URLS.usuario.buscar + id)
            .then(function (response) {
                if (response.data && response.data.valido) {
                    return callback(response.data);
                }
            });
    }

    this.registrarUsuario = function (data, callback) {
        $http({
            method: 'POST',
            url: URLS.backendURL + URLS.usuario.registrar,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then(function(response){
            if (response.data && response.data.valido) {
                return callback(response.data);
            }
        });
    }

    this.logearUsuario = function (data, callback) {
        $http({
            method: 'POST',
            url: URLS.backendURL + URLS.usuario.logear,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then(function(response){
            if (response.data && response.data.valido) {
                return callback(response.data);
            }
        });
    }

    this.actualizar = function (data, callback) {
        $http({
            method: 'POST',
            url: URLS.backendURL + URLS.usuario.actualizar,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then(function(response){
            if (response.data && response.data.valido) {
                return callback(response.data);
            }
        });
    }

    this.subirProyecto = function (data, callback) {
        $http({
            method: 'POST',
            url: URLS.backendURL + URLS.usuario.proyecto.subir,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then(function(response){
            if (response.data && response.data.valido) {
                return callback(response.data);
            }
        });
    }
});

app.service('sharedProperties', function () {

    var actualUser = '';
    var searchedUser = '';
    var isUserLogged = false;

    this.getSearchedUser = function () {
        return searchedUser;
    }

    this.setSearchedUser = function (userId) {
        searchedUser = userId;
    }

    this.getActualUser = function () {
        return actualUser;
    }

    this.setActualUser = function (userId) {
        actualUser = userId;
    }

    this.getIsUserLogged = function () {
        return isUserLogged;
    }

    this.setIsUserLogged = function (userLoggedFlag) {
        isUserLogged = userLoggedFlag;
    }
});