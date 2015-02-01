angular.module('PhotographyCtrl', [])
.controller('PhotographyController', ['$scope', '$http', function($scope, $http) {
	
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
			albums.photosets.photoset[key]['thumbnail'] = data.sizes.size[sizeNum-1].source;

		}).error(function(error) {
			console.log('error');
		})
	}

	$scope.getAlbum = function(data, sizeNum, callback) {
		for (var key in data.photosets.photoset) {
			if (data.photosets.photoset.hasOwnProperty(key)) {
				var AlbumCoverPhotoId = data.photosets.photoset[key].primary;

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
			callback(data, sizeNum, $scope.getPhoto);
			
		}).error(function(error) {
			console.log(error);
		})
	}





}]);