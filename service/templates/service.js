angular
	.module('<%= appname %>', ['ionic']).factory('<%= _.camelize(name) %>',function() {

		var <%= _.camelize(name) %> = {};

		return <%= _.camelize(name) %>;
});