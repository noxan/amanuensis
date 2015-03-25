/**
 * Controller for the login page
 */
angular.module('ama')
.controller('AuthCtrl', ['AuthService', '$state', '$stateParams','$rootScope', function (AuthService, $state, $stateParams, $rootScope) {

        console.log($stateParams);

        this.message = $state.current.data.message;

        var self = this;
        /**
         * Gets the current user
         */
        this.getUser = function () {
            AuthService.currentUser().then(function(result){
                return result;
            });
        };

        this.email = '';
        /*AuthService.currentUser(true).then(function(user){
            self.email = user.email;
        });*/


        /**
         * Tries to login the user with the submitted data
         * @param email - the user's mail address
         * @param password - the user's password
         */
        this.submit = function (email, password) {
            AuthService.login(email, password).then(function (result) {
                var to = $stateParams.referrer || 'app.dashboard';
                var toParams = $stateParams.referrerParams;
                $rootScope.loggedIn = true;
                $state.go(to,toParams);
            });
        };
        /**
         * Logs the user out
         */
        this.logout = function () {
            AuthService.logout().then(function(result){
                $rootScope.loggedIn = false;
                console.log(result);
            });
        };

    }]);