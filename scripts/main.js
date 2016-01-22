// script.js

    // create the module and name it orangegleam
        // also include ngRoute for all our routing needs
    var orangegleam = angular.module('orangegleam', ['ngRoute', 'ngAnimate']);

    // configure our routes
    orangegleam.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutController'
            })

            // route for the portfolio page
            .when('/portfolio', {
                templateUrl : 'views/portfolio.html',
                controller  : 'portfolioController'
            })

            // route for the services page
            .when('/services', {
                templateUrl : 'views/services.html',
                controller  : 'servicesController'
            })

            // route for the faqs page
            .when('/faqs', {
                templateUrl : 'views/faqs.html',
                controller  : 'faqsController'
            })

            // route for the blog page
            .when('/blog', {
                templateUrl : 'views/blog.html',
                controller  : 'blogController'
            })

            // route for the blog1 page
            .when('/blog1', {
                templateUrl : 'views/blog/2015/aug//blog1.html',
                controller  : 'blog1Controller'
            })

            // route for the blog2 page
            .when('/blog2', {
                templateUrl : 'views/blog/2015/aug//blog2.html',
                controller  : 'blog2Controller'
            })

            // route for the blog3 page
            .when('/blog3', {
                templateUrl : 'views/blog/2015/aug//blog3.html',
                controller  : 'blog3Controller'
            })

            // route for the blog4 page
            .when('/blog4', {
                templateUrl : 'views/blog/2016/jan//blog4.html',
                controller  : 'blog4Controller'
            })

            // route for the greatdeal page
            .when('/deal', {
                templateUrl : 'views/greatdeal.html',
                controller  : 'greatdealController'
            })

            // route for the gettingstarted page
            .when('/gettingstarted', {
                templateUrl : 'views/gettingstarted.html',
                controller  : 'gettingstartedController'
            })

            // route for the partners page
            .when('/partners', {
                templateUrl : 'views/partners.html',
                controller  : 'partnersController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'contactus.html',
                controller  : 'contactController'
            });


            // use the HTML5 History API
           $locationProvider.html5Mode(true);
    });

    // create the controller and inject Angular's $scope
    orangegleam.controller('mainController', function($scope) {
        $scope.pageClass = 'home';
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.title = 'test';


        (function() {     // function expression closure to contain variables
                var i = 0;
                var pics = [ "images/indeximg1.png", "images/indeximg2.png","images/indeximg3.png","images/indeximg4.png" ];
                var el = document.getElementById('img_to_flip');  // el doesn't change
                function toggle() {
                    el.src = pics[i];           // set the image
                    i = (i + 1) % pics.length;  // update the counter
                }
                setInterval(toggle, 4000);
            })();  


        
    });

    orangegleam.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
        $scope.title = 'About Us';
        $scope.pageClass = 'about';
    });

    orangegleam.controller('portfolioController', function($scope) {
        $scope.message = 'Look! I am an portfolio page.';
        $scope.title = 'Portfolio';
        $scope.pageClass = 'portfolio';
    });

    orangegleam.controller('servicesController', function($scope) {


        $scope.message = 'Look! I am an services page.';
        $scope.title = 'Services';
        $scope.pageClass = 'services';



    });

    orangegleam.controller('faqsController', function($scope) {
        $scope.message = 'Look! I am an faqs page.';
        $scope.title = 'FAQs';
        $scope.pageClass = 'faqs';
    });

    orangegleam.controller('blogController', function($scope) {
        $scope.message = 'Look! I am an the blog page';
        $scope.title = 'Blog';
        $scope.pageClass = 'blog';
    });

    orangegleam.controller('blog1Controller', function($scope) {
        $scope.message = 'Look! I am an the blog1 page';
        $scope.title = 'Blog1';
        $scope.pageClass = 'blog/2015/aug/blog1';
    });

    orangegleam.controller('blog2Controller', function($scope) {
        $scope.message = 'Look! I am an the blog2 page';
        $scope.title = 'Blog2';
        $scope.pageClass = 'blog/2015/aug/blog2';
    });

    orangegleam.controller('blog3Controller', function($scope) {
        $scope.message = 'Look! I am an the blog3 page';
        $scope.title = 'Blog3';
        $scope.pageClass = 'blog/2015/aug/blog3';
    });

    orangegleam.controller('blog3Controller', function($scope) {
        $scope.message = 'Look! I am an the blog4 page';
        $scope.title = 'Blog4';
        $scope.pageClass = 'blog/2016/jan/blog4';
    });

    orangegleam.controller('greatdealController', function($scope) {
        $scope.message = 'Look! I am an the greatdeal page';
        $scope.title = '$7 Website Management Plan';
        $scope.pageClass = 'greatdeal';
    });

    orangegleam.controller('gettingstartedController', function($scope) {
        $scope.message = 'getting started page';
        $scope.title = 'Free Consultation';
        $scope.pageClass = 'gettingstarted';
    });

    orangegleam.controller('partnersController', function($scope) {
        $scope.message = 'Partners Page';
        $scope.title = 'Our Partners';
        $scope.pageClass = 'partners';
    });

    orangegleam.controller('contactController', function($scope) {
        $scope.message = 'Contact us';
        $scope.pageClass = 'contactus';
    });



  // create angular controller and pass in $scope and $http
  orangegleam.controller('FormController',function($scope, $http) {
  // creating a blank object to hold our form information.
  //$scope will allow this to pass between controller and view
  $scope.formData = {};
  // submission message doesn't show when page loads
  $scope.submission = false;
  // Updated code thanks to Yotam
  var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
               returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
  };
  $scope.submitForm = function() {
    $http({
    method : 'POST',
    url : 'process.php',
    data : param($scope.formData), // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       $scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
      } else {
      // if successful, bind success message to message
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the success message
      }
     });
   };
});