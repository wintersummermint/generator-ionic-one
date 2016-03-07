angular
	.module('<%= appname %>', ['ionic']).directive('<%= _.camelize(name) %>', function() {
	return {
			restrict: 'A',
			link: function(scope, element, attrs, fn) {
			
			}
		};
});