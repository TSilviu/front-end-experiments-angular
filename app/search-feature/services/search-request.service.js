'use strict';

angular
	.module('searchFeature')
	
	// Service for making requests to the API end-points
	// for the search feature
	.factory('search_request_service', 
		['$http',
		
		function($http){
			var service = {
				requestBathingWaters: requestBathingWaters	
			}
			
			return service;

			// Get all bathing waters
			function requestBathingWaters(API_CALL){
				return $http.get(API_CALL)
			    .then(function onSuccess(response){
					return response.data.result.items;
				}, function onFailure(response){
					$log.error("Failed http request at 'search_request_service.getBathingWaters()':" + response);
					return "Failed http request at 'search_request_service.getBathingWaters()'";
				});
			}
	}])