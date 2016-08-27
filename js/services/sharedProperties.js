
app.service('sharedProperties', function () {

    this.actualUser = '';
    this.searchedUser = '';
    this.userIsloged = false;
    return {
        getSearchedUser: function () {
            return searchedUser;
        },
        setSearchedUser: function(userId) {
            searchedUser = userId;
        },
        getactualUser: function () {
            return actualUser;
        },
        setactualUser: function(userId) {
            actualUser = userId;
        },
        getUserIsloged: function () {
            return userIsloged;
        },
        setUserIsloged: function(userLogedFlag) {
            userIsloged = userLogedFlag;
        }
    };
});