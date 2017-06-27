'use strict';
angular.module('wbPhotoGallery', [
    'ngAnimate',
    'ngTouch',
    'wbPhotoGallery.gallery',
    'wbPhotoGallery.galleryServices'
])
    .directive('ngPhotoGallery', function (){
        return {
            restrict: "E",
            templateUrl: 'gallery.html'
        }
    });