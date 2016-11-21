var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	if(!$httpProvider.defaults.headers.get) $httpProvider.defaults.headers.get = {};

	// IE 9 浏览器中ajax呼叫时，文件缓存的问题（modify配置文件的时间调制。）
	$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
	$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
	$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

	$urlRouterProvider.when("", "/sortable");

	$stateProvider.state("sortable", {
		url: "/sortable",
		templateUrl: "./view/sortable.html"
	});
});

myApp.controller('sortableController', function($scope, $timeout) {
	$scope.data = [{
		'name': '小米'
	}, {
		'name': '小明'
	}, {
		'name': '小妹'
	}, {
		'name': '小马'
	}, {
		'name': '小猫'
	}, {
		'name': '小麦'
	}];
	document.ontouchstart = function() {
		return false;
	};
	Sortable.create($('#listName')[0], {
		handle: '.drag-handle',
		animation: 150
	});
});