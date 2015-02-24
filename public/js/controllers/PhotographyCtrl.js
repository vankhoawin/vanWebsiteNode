var PhotographyCtrl = angular.module('PhotographyCtrl', []);

PhotographyCtrl.controller('PhotographyController', ['$scope', '$http', '$anchorScroll', '$location', function($scope, $http, $anchorScroll, $location) {
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

	$scope.scrollTo = function(id) {
    var old = $location.hash();
    $location.hash(id);
    $anchorScroll();
    //reset to old to keep any additional routing logic from kicking in
    $location.hash(old);
	};


	// $scope.getjson = function() {

	// 	$http.get('/photography').then(function(res) {
	// 		console.log(res);
	// 	})
	// }


	$scope.$on('$routeChangeSuccess', function(event, current, previous) {
		// $scope.getjson();
		$scope.getAlbums(5, $scope.getAlbum);
	  document.getElementById("transparency").style.backgroundColor = 'rgba(200,200,200,0.14)';
	});
}]);


PhotographyCtrl.controller('PhotographyAlbumController', ['$scope', '$http', '$anchorScroll', '$location', '$routeParams', function($scope, $http, $anchorScroll, $location, $routeParams) {

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
			album[key]['thumbnail'] = data.sizes.size[sizeNum-1].source;

		}).error(function(error) {
			console.log(error);
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


	$scope.scrollTo = function(id) {
    var old = $location.hash();
    $location.hash(id);
    $anchorScroll();
    
    //reset to old to keep any additional routing logic from kicking in
    $location.hash(old);
	};



	$scope.$on('$routeChangeSuccess', function(event, current, previous) {
		$scope.getAlbumPhotos($routeParams.albumId, 9, $scope.getAlbumPhoto);
		$scope.getAlbumTitle($routeParams.albumId);
	  document.getElementById("transparency").style.backgroundColor = 'rgba(200,200,200,0.14)';
		
	});

}]);