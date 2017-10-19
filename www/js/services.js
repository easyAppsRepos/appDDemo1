'use strict';

/* Services */

var servicesModule = angular.module('animatedGrid.services', []);

servicesModule.factory('ArticlesService', ['$q', '$http',
    function ($q, $http) {
var tags = [];
                var posts = [];

        var getTagId = function(id) {

        /// var promise = ArticlesService.get();
        var tt='';

        //var lookup = {};
        for (var i = 0, len = tags.length; i < len; i++) {
        if( tags[i].id == id ) {

        tt = tags[i].name;
        console.log(tags[i]);
        break;
        } 
        }


        return tt;
        };

        


       var getTagsT = function () {

                     console.log('getpostds');

                    var deferred = $q.defer(),
                        url = 'https://delfino.cr/wp-json/wp/v2/tags';
                      
                    $http.get(url).success(function(data, status) {
                        console.log(data);
                      deferred.resolve(data);

                    }).error(function(data, status) {
                        console.log('There has been an error')
                        deferred.reject(data);
                    });

                    return deferred.promise;
                }

                

                var promise = getTagsT();
                promise.then(
                function(details){
                console.log(details);
                tags = details;
                },
                function(reason){
                alert('Failed: ' + reason);
                }
                );

                




        return {
            getPosts : function(){

                             console.log('3w');

                var deferred = $q.defer(),
                    url = 'https://delfino.cr/wp-json/wp/v2/posts';
                  
                $http.get(url).success(function(data, status) {
                 //   console.log(data);
                  deferred.resolve(data);

                }).error(function(data, status) {
                    console.log('There has been an error')
                    deferred.reject(data);
                });

                return deferred.promise;


        },


      getTags: function (id) {

                 return getTagId(id);
            },

            getCategory: function () {

                 console.log('getpostds');

                var deferred = $q.defer(),
                    url = 'https://delfino.cr/wp-json/wp/v2/categories';
                  
                $http.get(url).success(function(data, status) {
                 //   console.log(data);
                  deferred.resolve(data);

                }).error(function(data, status) {
                    console.log('There has been an error')
                    deferred.reject(data);
                });

                return deferred.promise;
            },

            //wp-json/wp/v2/categories

            get: function () {

                var deferred = $q.defer(),
                    url = 'data/articles.json';
                  
                $http.get(url).success(function(data, status) {
  
                  deferred.resolve(data);

                }).error(function(data, status) {
                    console.log('There has been an error')
                    deferred.reject(data);
                });

                return deferred.promise;
            },

             getSPost: function (id) {

                var deferred = $q.defer(),
                    url = 'https://delfino.cr/wp-json/wp/v2/posts/'+id;
                  
                $http.get(url).success(function(data, status) {
  
                  deferred.resolve(data);

                }).error(function(data, status) {
                    console.log('There has been an error')
                    deferred.reject(data);
                });

                return deferred.promise;
            }




            //https://delfino.cr/wp-json/wp/v2/posts/
        };
    }
]);