QuizApp.directive('sortable', function(){
	return {
		scope: {
			handle: '@'
		},
		link: function(scope, elem, attrs){
			$('#' + scope.handle).sortable({ cursor: 'move', opacity: 0.6 });
			$('#' + scope.handle).disableSelection();
		}
	}
});