angular
	.module('<%= appname %>', ['ionic']).filter('<%= _.camelize(name) %>', function() {
		return function(input,arg) {
			return 'output';
		};
});