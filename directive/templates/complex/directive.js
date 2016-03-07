angular
	.module('<%= appname %>', ['ionic']).directive('<%= _.camelize(name) %>', function() {
		return {
			restrict: 'E',
			replace: true,
			scope: {

			},
			templateUrl: '<%= htmlPath %>',
			link: function(scope, element, attrs, fn) {
				
			}
		};
});
