
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
        $http.post(URLS.backendURL + URLS.usuario.registrar, data)
            .then(function (response) {
                if (response.data && response.data.valido) {
                    return callback(response.data);
                }
            });
    }
});