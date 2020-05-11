var app=angular.module("myApp",["ngRoute"])
app.config(function ($routeProvider) {
    $routeProvider
        .when("/",{
            templateUrl:"templates/home.html",
            controller:"homeCtrl"
        })
        .when("/Store",{
            templateUrl:"templates/Store.html",
            controller:"StoreCtrl"
        })
        .when("/ContactUs",{
            templateUrl:"templates/ContactUs.html",
            controller:"ContactUsCtrl"
        })
        .when("/About",{
            templateUrl:"templates/About.html",
            controller:"AboutCtrl"
        })
        .otherwise({
            template:"<h1>404 Page Not Found"
        })
})
app.controller("homeCtrl",function ($scope,$rootScope) {
    console.log("hello i am home controller")
    $scope.name="Abdiwali mohammed "
})
app.controller("StoreCtrl",function ($scope,$rootScope) {
    console.log("I am store controller")
    $scope.mobiles=[
        {name:"Samsung Note 10",price:75000,quan:12,img:"images/mobiles/6.jpeg"},
        {name:"Apple I Phone 11",price:8000,quan:5,img:"images/mobiles/20.jpeg"},
        {name:"Huawei P10",price:35000,quan:6,img:"images/mobiles/14.jpg"},
        {name:"Apple I phone 7s",price:18000,quan:2,img:"images/mobiles/1.jpeg"},
        {name:"Samsung J7",price:12000,quan:2,img:"images/mobiles/10.jpeg"},
        {name:"Lg prime",price:5000,quan:3,img:"images/mobiles/13.jpg"},
        {name:"Samsung Note 4",price:6000,quan:10,img:"images/mobiles/4.jpg"},
        {name:"Samsung Grand Prime +",price:3000,quan:9,img:"images/mobiles/8.jpeg"},
        {name:"HTC Desire",price:11000,quan:5,img:"images/mobiles/5.jpeg"},
        {name:"Huawei P7",price:10000,quan:6,img:"images/mobiles/14.jpg"},
        {name:"Apple I phone 6s",price:9000,quan:8,img:"images/mobiles/9.jpeg"},
        {name:"Apple I phone 7",price:18000,quan:2,img:"images/mobiles/16.jpg"},
        {name:"Apple I phone 9s",price:9000,quan:8,img:"images/mobiles/12.jpg"},
        {name:"Huawei P8",price:14000,quan:9,img:"images/mobiles/14.jpg"},
        {name:"Samsung S6",price:9500,quan:15,img:"images/mobiles/17.jpg"},
        {name:"Samsung Note 5",price:7500,quan:12,img:"images/mobiles/12.jpg"},
        {name:"Huawei P9",price:24000,quan:9,img:"images/mobiles/11.jpeg"},
        {name:"Apple I phone 7",price:18000,quan:2,img:"images/mobiles/16.jpg"},
        {name:"Samsung S9",price:95000,quan:15,img:"images/mobiles/17.jpg"}
    ];
    $scope.Computers=[
        {name:"Hp noteBook",price:18000,quan:2,img:"images/computers/1.jpeg"},
        {name:"HP_Desktop",price:9000,quan:8,img:"images/computers/9.jpg"},
        {name:"Acer",price:3000,quan:9,img:"images/computers/3.jpeg"},
        {name:"Hp Spectre",price:3000,quan:9,img:"images/computers/8.jpg"},
        {name:"Hp general",price:3000,quan:9,img:"images/computers/8.jpg"},
        {name:"MacBook",price:75000,quan:12,img:"images/computers/22.jfif"},
        {name:"lenovo",price:8000,quan:5,img:"images/computers/37.jfif"},
        {name:"hp Probook",price:12000,quan:2,img:"images/computers/20.jfif"},
        {name:"samsung",price:35000,quan:6,img:"images/computers/33.jfif"},
        {name:"Samsung",price:5000,quan:3,img:"images/computers/36.jfif"},
        {name:"Apple pro",price:6000,quan:10,img:"images/computers/4.jpeg"},
        {name:"toshiba",price:11000,quan:5,img:"images/computers/5.jpeg"},
        {name:"Dell",price:10000,quan:6,img:"images/computers/37.jfif"},
        {name:"toshiba",price:9000,quan:8,img:"images/computers/9.jpg"},
        {name:"Apple mac_pro",price:18000,quan:2,img:"images/computers/24.jfif"},
        {name:"apple notebook",price:9000,quan:8,img:"images/computers/25.jfif"},
        {name:"Dell",price:10000,quan:6,img:"images/computers/20.jfif"},
        {name:"toshiba",price:9000,quan:8,img:"images/computers/9.jpg"},
        {name:"Apple mac_pro",price:18000,quan:2,img:"images/computers/22.jfif"},
        {name:"acer",price:3000,quan:9,img:"images/computers/3.jpeg"},
        {name:"toshiba",price:11000,quan:5,img:"images/computers/37.jfif"},
        {name:"Dell",price:10000,quan:6,img:"images/computers/35.jfif"}
    ];
    $scope.tablets=[
        {name:"Ipad tablet",price:18000,quan:2,img:"images/tablets/l.jfif"},
        {name:"samsung tablet",price:18000,quan:2,img:"images/tablets/A.jfif"},
        {name:"android tablet",price:18000,quan:2,img:"images/tablets/ipad.jfif"},
        {name:"sonny tablet",price:18000,quan:2,img:"images/tablets/ipad1.jfif"},
        {name:"Hp tablet",price:18000,quan:2,img:"images/tablets/A.jfif"},
        {name:"apple tablet",price:18000,quan:2,img:"images/tablets/g.jfif"},
        {name:"sonny tablet",price:18000,quan:2,img:"images/tablets/h.jfif"},
        {name:"samsung tablet",price:18000,quan:2,img:"images/tablets/l.jfif"},
        {name:"Hp tablet",price:18000,quan:2,img:"images/tablets/ipad.jfif"},
        {name:"noteBook tablet",price:18000,quan:2,img:"images/tablets/ipad1.jfif"},
        {name:"techno tablet",price:18000,quan:2,img:"images/tablets/ipad3.jfif"},
        {name:"Hp tablet",price:18000,quan:2,img:"images/tablets/ipad4.jfif"},
        {name:"ipad tablet",price:18000,quan:2,img:"images/tablets/ipad5.jfif"},
        {name:"ipad tablet",price:18000,quan:2,img:"images/tablets/l1.jfif"},
        {name:"samsung tablet",price:18000,quan:2,img:"images/tablets/s.jfif"},
        {name:"gl tablet",price:18000,quan:2,img:"images/tablets/g.jfif"},
        {name:"ipad tablet",price:18000,quan:2,img:"images/tablets/ipad5.jfif"}
    ]
    $scope.TVs=[
        {name:"samsung tv",price:18000,quan:2,img:"images/TVs/tv1.jfif"},
        {name:"ld tv",price:18000,quan:2,img:"images/TVs/tv4.jfif"},
        {name:"smart tv",price:18000,quan:2,img:"images/TVs/tv2.jfif"},
        {name:"pluto tv",price:18000,quan:2,img:"images/TVs/tv3.jfif"},
        {name:" smart tv",price:18000,quan:2,img:"images/TVs/tv4.jfif"},
        {name:"samsung tv",price:18000,quan:2,img:"images/TVs/tv5.jfif"},
        {name:" ld tv",price:18000,quan:2,img:"images/TVs/tv6.jfif"},
        {name:" plutotv",price:18000,quan:2,img:"images/TVs/tv7.jfif"},
        {name:" smart tv",price:18000,quan:2,img:"images/TVs/tv8.jfif"},
        {name:"samsung tv",price:18000,quan:2,img:"images/TVs/tv9.jfif"},
        {name:" pluto tv",price:18000,quan:2,img:"images/TVs/tv10.jfif"},
        {name:" ld tv",price:18000,quan:2,img:"images/TVs/tv11.jfif"},
        {name:" smart tv",price:18000,quan:2,img:"images/TVs/tv1.jfif"},
        {name:"samsung tv",price:18000,quan:2,img:"images/TVs/tv13.jfif"}

    ]
    $scope.cameras=[
        {name:"canon camera",price:18000,quan:2,img:"images/Camera/camera9.jfif"},
        {name:"sonny camera",price:18000,quan:2,img:"images/Camera/camera10.jfif"},
        {name:"HD camera",price:18000,quan:2,img:"images/Camera/camera1.jfif"},
        {name:"sonny camera",price:18000,quan:2,img:"images/Camera/camera2.jfif"},
        {name:"canon camera",price:18000,quan:2,img:"images/Camera/camera3.jfif"},
        {name:"canon camera",price:18000,quan:2,img:"images/Camera/camera4.jfif"},
        {name:"HD camera",price:18000,quan:2,img:"images/Camera/camera5.jfif"},
        {name:"HD camera",price:18000,quan:2,img:"images/Camera/camera6.jfif"},
        {name:"HD camera",price:18000,quan:2,img:"images/Camera/camera7.jfif"},
        {name:"canon camera",price:18000,quan:2,img:"images/Camera/camera8.jfif"},
        {name:"nikon camera",price:18000,quan:2,img:"images/Camera/camera11.jfif"},
        {name:"nikon camera",price:18000,quan:2,img:"images/Camera/camera11.jfif"},
        {name:"nikon camera",price:18000,quan:2,img:"images/Camera/camera12.jfif"},
        {name:"nikon camera",price:18000,quan:2,img:"images/Camera/camera13.jfif"}


    ]
    $scope.screens=[
        {name:"lg screen",price:18000,quan:2,img:"images/screens/1.jpg"},
        {name:"sonny screen",price:18000,quan:2,img:"images/screens/2.jpg"},
        {name:"lg screen",price:18000,quan:2,img:"images/screens/3.jpg"},
        {name:"smart screen",price:18000,quan:2,img:"images/screens/4.jpg"},
        {name:"sonny screen",price:18000,quan:2,img:"images/screens/5.jpg"},
        {name:"smart screen",price:18000,quan:2,img:"images/screens/6.jpeg"},
        {name:"lg screen",price:18000,quan:2,img:"images/screens/7.jpeg"},
        {name:"smart screen",price:18000,quan:2,img:"images/screens/8.jpeg"},
        {name:"smart screen",price:18000,quan:2,img:"images/screens/1.jpg"},
        {name:"smart screen",price:18000,quan:2,img:"images/screens/5.jpg"},
        {name:"smart screen",price:18000,quan:2,img:"images/screens/10.jfif"},
        {name:"smart screen",price:18000,quan:2,img:"images/screens/11.jfif"},
        {name:"sonny screen",price:18000,quan:2,img:"images/screens/2.jpg"},
        {name:"smart screen",price:18000,quan:2,img:"images/screens/7.jpeg"}
        ]

})
app.controller("ContactUsCtrl",function ($scope,$rootScope) {
    console.log("I am us controller")
})
app.controller("AboutCtrl",function ($scope,$rootScope) {
    console.log("I am about controller")
})
app.controller('homeCtrl', function ($scope, $location) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
    $scope.getClass = function (path) {
        if(path === '/') {
            if($location.path() === '/') {
                return "active";
            } else {
                return "";
            }
        }

        if ($location.path().substr(0, path.length) === path) {
            return "active";
        } else {
            return "";
        }
    }
});