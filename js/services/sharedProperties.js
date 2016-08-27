
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