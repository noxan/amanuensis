/**
 * Authentication Service
 * Provides functions to log in, log out and get the login state and the current user
 */
angular.module('ama')
.factory('AuthService', ['$q','$http', 'sha256Filter', 'ApiAbstractionLayer',function($q, $http, sha256Filter, ApiAbstractionLayer){

        return {
            /**
             * Gets the currently logged in user
             * @returns {promise}
             */
            currentUser: function(noErrorModal){
                return ApiAbstractionLayer('GET','user_get', noErrorModal);
            },

            /**
             * Tries to login the user with the provided data
             * @param email - the user's mail address
             * @param password - the user's password
             * @returns {d.promise|promise|.Deferred.promise|promise.promise|jQuery.promise|n.ready.promise|*}
             */
            login: function(email, password) {
                var deferred = $q.defer();
                ApiAbstractionLayer('GET', {name: 'login', params: {action: 'login', email: email}})
                    .then(function (result) {
                        if(password && result.salt && result.token) {
                            var token = result.token;
                            var salt = result.salt;

                            var hashedPass = sha256Filter(password);
                            var passSalt = sha256Filter(hashedPass + salt);
                            var passToSend = sha256Filter(passSalt + token);
                        } else {
                            deferred.reject();
                        }
                        ApiAbstractionLayer('POST', {name: 'login', data: {action: 'login',email: email,password: passToSend}})
                            .then(function (data) {
                                deferred.resolve(data);
                            }, function (error) {
                                deferred.reject(error);
                            });

                    }, function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;

            },

            /**
             * Tries to log out the current user
             * @returns {promise}
             */
            logout: function(){
                return ApiAbstractionLayer('GET', 'logout');
            },

            /**
             * Gets the login state of the current user
             * @returns {boolean} - true if logged in, false if not
             */
            isLoggedIn: function(){
                return ApiAbstractionLayer('GET','login');
            }
        }
    }]);