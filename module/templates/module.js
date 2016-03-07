angular
	.module('<%= _.camelize(name) %>', ['ionic','<%= routerModuleName %>']);
<% if (!uirouter) { %>
angular
	.module('<%= _.camelize(name) %>').config(function($routeProvider) {

	/* Add New Routes Above */

});
<% } %><% if (uirouter) { %>
angular
	.module('<%= _.camelize(name) %>').config(function($stateProvider) {

	/* Add New States Above */

});
<% } %>
