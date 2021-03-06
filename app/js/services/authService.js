/**
 * @class ama.services.AuthService
 * # Authentication Service
 * Provides functions to log in, log out and get the login state and the current user
 */
app
.factory('AuthService', [
        '$q',
        '$http',
        'sha256Filter',
        'ApiAbstractionLayer',
        '$rootScope',
        'LocalStorage',
        'ErrorDialog',
        function($q, $http, sha256Filter, ApiAbstractionLayer, $rootScope, LocalStorage, ErrorDialog){

        return {
            /**
             * Gets the currently logged in user
             * @param {bool} noErrorModal *Optional.* If true, no message will be shown in case of an error.
             * @returns {promise} A promise containing the current user or an error object.
             */
            currentUser: function(noErrorModal){
                return ApiAbstractionLayer('GET','userdata', noErrorModal);
            },

            /**
             * Tries to login the user with the provided data
             * @param email - the user's mail address
             * @param password - the user's password
             * @returns {Object}
             */
            login: function(email, password) {
                var deferred = $q.defer();
                if(!$rootScope.loggedIn) {
                    ApiAbstractionLayer('GET', {name: 'login', params: {action: 'login', email: email}})
                        .then(function (result) {
                            if (password && result.salt && result.token) {
                                var token = result.token;
                                var salt = result.salt;

                                var hashedPass = sha256Filter(password);
                                var passSalt = sha256Filter(hashedPass + salt);
                                var passToSend = sha256Filter(passSalt + token);
                            } else {
                                deferred.reject();
                            }
                            ApiAbstractionLayer('POST', {
                                name: 'login',
                                data: {action: 'login', email: email, password: passToSend}
                            })
                                .then(function (data) {
                                    $rootScope.loggedIn = true;
                                    LocalStorage.setKey(data.fe_key);
                                    deferred.resolve(data);
                                }, function (error) {
                                    deferred.reject(error);
                                });

                        }, function (error) {
                            deferred.reject(error);
                        });
                } else {
                    var error = {code:'Fehler', message: 'Already logged in'};
                    deferred.reject(error);
                    ErrorDialog(error).activate();
                }


                return deferred.promise;

            },

            /**
             * Tries to log out the current user
             * @returns {promise}
             */
            logout: function(){
                var defer = $q.defer();
                ApiAbstractionLayer('GET', 'logout').then(function (result) {
                    $rootScope.loggedIn = false;
                    LocalStorage.removeCache();
                    defer.resolve(result);
                }, function (error) {
                    defer.reject(error);
                });
                return defer.promise;
            },

            /**
             * Gets the login state of the current user
             * @returns {promise} - promise containing the login state as boolean: true if logged in, false if not
             */
            isLoggedIn: function(){
                return ApiAbstractionLayer('GET','login');
            }
        }
    }]);