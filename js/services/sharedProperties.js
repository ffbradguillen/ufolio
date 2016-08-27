
app.service('sharedProperties', function () {

    this.actualUser = '';
    this.searchedUser = '';

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
        }
    };
});