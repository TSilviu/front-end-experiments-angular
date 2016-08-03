'use strict';

angular
	.module('searchFeature')	
	
	// Main dataservice for the search feature
	.factory('search_dataservice', 
		['$q',
		 'apiservice',
		 'get_or_load_service',

		function($q, apiservice, get_or_load_service){
			
			var service = {
				retrieveSearchArray: retrieveSearchArray	 
			};

			var searchArray = [];

			return service;

			// Function to retrieve all search objects
			function retrieveSearchArray(){
				if(searchArray.length == 0){
					searchArray = get_or_load_service.loadSearchArray();
					return searchArray;
				} else {
					searchArray = get_or_load_service.getSearchArray();
					return searchArray;
				}
			}
		}
	]);