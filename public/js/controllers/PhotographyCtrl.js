var PhotographyCtrl = angular.module('PhotographyCtrl', []);

PhotographyCtrl.controller('PhotographyController', ['$scope', '$http', function($scope, $http) {
	
	$scope.albums = [];

	// sizeNum 2 = thumbnail
	$scope.getPhoto = function(albums, photoId, sizeNum, key) {
		$http({
			method: 'GET',
			url: 'https://api.flickr.com/services/rest',
			params: {
				method: 'flickr.photos.getSizes',
				photo_id: photoId,
				api_key: 'aa97f39fc7ff944178ebd92711b9ab35',
				text: $scope.photo,
				format: 'json',
				nojsoncallback: 1
			}

		}).success(function(data) {
			albums[key]['thumbnail'] = data.sizes.size[sizeNum-1].source;

		}).error(function(error) {
			console.log('error');
		})
	}

	$scope.getAlbum = function(data, sizeNum, callback) {
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var AlbumCoverPhotoId = data[key].primary;

				callback(data, AlbumCoverPhotoId, sizeNum, key);

			}
		}
	}


	$scope.getAlbums = function(sizeNum, callback) {
		$http({
			method: 'GET',
			url: 'https://api.flickr.com/services/rest',
			params: {
				method: 'flickr.photosets.getList',
				user_id: '126052905@N03',
				api_key: 'aa97f39fc7ff944178ebd92711b9ab35',
				text: $scope.album,
				format: 'json',
				nojsoncallback: 1
			}

		}).success(function(data) {
			$scope.albums = data.photosets.photoset;
			callback($scope.albums, sizeNum, $scope.getPhoto);
			
		}).error(function(error) {
			console.log(error);
		})
	}


	$scope.$on('$routeChangeSuccess', function(event, current, previous) {
		$scope.getAlbums(5, $scope.getAlbum);
	});
}]);


PhotographyCtrl.controller('PhotographyAlbumController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	$scope.album = [];
	$scope.albumInfo = '';


	$scope.getAlbumPhoto = function(album, photoId, sizeNum, key) {
		$http({
			method: 'GET',
			url: 'https://api.flickr.com/services/rest',
			params: {
				method: 'flickr.photos.getSizes',
				photo_id: photoId,
				api_key: 'aa97f39fc7ff944178ebd92711b9ab35',
				text: $scope.photo,
				format: 'json',
				nojsoncallback: 1
			}

		}).success(function(data) {
			console.log(data);
			album[key]['thumbnail'] = data.sizes.size[sizeNum-1].source;

		}).error(function(error) {
			console.log('error');
		})
	}

	$scope.getAlbumPhotos = function(albumId, sizeNum, callback) {
		$http({
			method: 'GET',
			url: 'https://api.flickr.com/services/rest',
			params: {
				method: 'flickr.photosets.getPhotos',
				photoset_id: albumId,
				api_key: 'aa97f39fc7ff944178ebd92711b9ab35',
				text: $scope.album,
				format: 'json',
				nojsoncallback: 1
			}

		}).success(function(data) {
			$scope.album = data.photoset.photo;

			for (var key in $scope.album) {
				if ($scope.album.hasOwnProperty(key)) {
					var photoId = $scope.album[key].id;

					callback($scope.album, photoId, sizeNum, key);
				}
			}

		}).error(function(error) {
			console.log(error);
		})
	}

	$scope.getAlbumTitle = function(albumId) {
		$http({
			method: 'GET',
			url: 'https://api.flickr.com/services/rest',
			params: {
				method: 'flickr.photosets.getInfo',
				photoset_id: albumId,
				api_key: 'aa97f39fc7ff944178ebd92711b9ab35',
				text: $scope.album,
				format: 'json',
				nojsoncallback: 1
			}

		}).success(function(data) {
			$scope.albumInfo = data.photoset;

		}).error(function(error) {
			console.log(error);
		})
	}


	$scope.$on('$routeChangeSuccess', function(event, current, previous) {
		$scope.getAlbumPhotos($routeParams.albumId, 7, $scope.getAlbumPhoto);
		$scope.getAlbumTitle($routeParams.albumId);
		
	});

}]);