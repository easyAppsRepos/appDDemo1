angular.module('animatedGrid.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $ionicSlideBoxDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $ionicLoading.hide();

$scope.atras= function(){

  $ionicHistory.goBack();


}


 $scope.slidePrevious = function() {

        $ionicSlideBoxDelegate.previous();
    }

    $scope.slideNext = function() {

        $ionicSlideBoxDelegate.next();
    }



  


    

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', ['$scope', '$ionicModal', '$ionicLoading', 'ArticlesService',
  function($scope, $ionicModal, $ionicLoading, ArticlesService) {



    
$scope.disableTouch = function() {
  console.log('d');
  $ionicLoading.show();

}

    $scope.getArticleList = function() {

      var promise = ArticlesService.get();
      promise.then(
          function(details){
            $scope.articles = details;
          },
          function(reason){
            alert('Failed: ' + reason);
          }
      );
    };

    $scope.getArticleList();

    $scope.abrirInfo = function() {
$scope.modal.show();

    }



  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };



   



}]);
