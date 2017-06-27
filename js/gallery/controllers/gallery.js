'use strict';

angular.module('wbPhotoGallery.gallery', [])
.controller('GalleryCtrl', ['$scope', 'Photo', function($scope, Photo){
// Set of Photos
    $scope.photos = Photo.query();
// initial image index
    $scope._Index = 0;
// if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };
// show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
// show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };
// show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
}

]);