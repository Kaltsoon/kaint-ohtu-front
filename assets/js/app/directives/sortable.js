QuizApp.directive('sortable', function(){
	return {
		scope: {
			handle: '@'
		},
		link: function(scope, elem, attrs){
			$('#' + scope.handle).sortable();
			$('#' + scope.handle).disableSelection();
		}
	}
});