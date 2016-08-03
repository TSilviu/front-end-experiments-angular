'use strict';

angular
	.module('searchFeature')

	// Service to get or load the search array
	.factory('get_or_load_service', 
		['$q',
		 'apiservice',
		 'construct_service',
		 'search_request_service', 

		function($q, apiservice, construct_service, search_request_service){

			var service = {
				getSearchArray:  getSearchArray,
				loadSearchArray: loadSearchArray
			}	

			var searchArray = [];

			return service;

			// Function to get the search array when
			// it is already loaded
			function getSearchArray(){
				var deferred = $q.defer();
				deferred.resolve(searchArray);
				return deferred.promise;
			}

			// Function to load the search array from
			// API end-point
			function loadSearchArray(){
				var API_CALL = apiservice.getBathingWatersApi();

				return search_request_service.requestBathingWaters(API_CALL).then(function onSuccess(bwArray){
					searchArray = construct_service.constructSearchArray(bwArray);
					return searchArray;
				}, function onFailure(error){
					return "Failed at `get_or_load_service.loadDataFromApi()`" + error;
				});
			}
	}])