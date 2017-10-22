angular.module('animatedGrid.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $stateParams, $state, ArticlesService, $ionicLoading, $timeout, $ionicSlideBoxDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
    // ui-sref="app.article({id: edition.id, fecha: edition.date})"
  //});

  $scope.fecha=$stateParams.fecha;
$scope.atras= function(){

  $ionicHistory.goBack();


}
  $scope.mostrar=false;
 $scope.updateSlider = function () {

            //or just return the function
            
             $ionicSlideBoxDelegate.update(); 
             $scope.mostrar=true;
        }


$scope.asignarPaginas= function(datahtml){

  //$ionicHistory.goBack();
  var paginas=[];

  //var ddt=datahtml.substring(datahtml.lastIndexOf("<h2>")+1,datahtml.lastIndexOf("\n"));

datahtml = datahtml.replace(/<h2>/gi, "**((&<h2>");
$scope.paginasArticulo =  datahtml.split("**((&");



  //$scope.paginasArticulo =  datahtml.split("<h2>");
  console.log(  $scope.paginasArticulo);


}
console.log($stateParams.id);
 $scope.getPostById = function() {

             var promise = ArticlesService.getSPost($stateParams.id);
      promise.then(
          function(datas){
            console.log('post');
            console.log(datas);
            $scope.datas = datas;
          $scope.asignarPaginas(datas.content.rendered);
         // $ionicSlideBoxDelegate.update();
         $scope.updateSlider();
         $ionicLoading.hide();

          },
          function(reason){
            alert('Failed: ' + reason);
          }
      );



    }
$scope.getPostById();


 $scope.slidePrevious = function() {

        $ionicSlideBoxDelegate.previous();
    }

    $scope.slideNext = function() {

        $ionicSlideBoxDelegate.next();
    }



  $scope.openPage = function(link){

  if(link == null || link == 'null' || link == 'undefinded'){console.log('nolink')}

  else{
      window.open(link, '_system', 'location=yes'); return false;

  }  
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
.controller('buscarCtrl', ['$scope', '$timeout', '$ionicModal', '$ionicLoading', '$state', '$stateParams','ArticlesService',
  function($scope, $timeout, $ionicModal, $ionicLoading, $state, $stateParams, ArticlesService) {



    $scope.goArticle = function(idd,date) {
   //    $scope.modal2.hide();
$ionicLoading.show();
//$scope.$apply();
$state.go('app.article', {id:idd, fecha:date});
console.log(idd + '-' + date);


  


    }

    $scope.getArticleFind = function() {

     /// var promise = ArticlesService.get();
     var promisse = ArticlesService.getSPostF();
      promisse.then(
          function(detailsd){
            console.log(detailsd);


            $scope.articlesF = detailsd;
           // $state.reload();
           
          },
          function(reason){
            alert('Failed: ' + reason);
          }
      );
    };



  $scope.getArticleFind();


    
}])
.controller('PlaylistsCtrl', ['$scope', '$timeout', '$ionicModal', '$ionicLoading', '$state', '$stateParams','ArticlesService',
  function($scope, $timeout, $ionicModal, $ionicLoading, $state, $stateParams, ArticlesService) {


//console.log(  ArticlesService.getPosts().then(function(data){return 'ds'}));

 $scope.getCategorias = function() {

     /// var promise = ArticlesService.get();
     var promise = ArticlesService.getCategory();
      promise.then(
          function(details){
            console.log(details);
            $scope.categorias = details;
          },
          function(reason){
            alert('Failed: ' + reason);
          }
      );
    };


 $scope.getStringCategoria = function(id) {

     /// var promise = ArticlesService.get();
     var categoria='';

     var lookup = {};
for (var i = 0, len = $scope.categorias.length; i < len; i++) {
   if( $scope.categorias[i].id == id ) {

    categoria = $scope.categorias[i].name;
    break;
   } 
}


     return categoria;
    };




$scope.openPage = function(link){

  if(link == null || link == 'null' || link == 'undefinded'){console.log('nolink')}

  else{
      window.open(link, '_system', 'location=yes'); return false;

  }  
}


    
$scope.disableTouch = function() {
  console.log('d');
  $ionicLoading.show();


}


    $scope.getArticleList = function() {

     /// var promise = ArticlesService.get();
     var promise = ArticlesService.getPosts();
      promise.then(
          function(details){
            console.log(details);
            $scope.articles = details;
          },
          function(reason){
            alert('Failed: ' + reason);
          }

      );
    };

      $scope.getArticleList();
$scope.getCategorias();



    $scope.abrirInfo = function() {
$scope.modal.show();

    }



  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    //console.log(modal)
    $scope.modal = modal;
  });


  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };




   



}]);
