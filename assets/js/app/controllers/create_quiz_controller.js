QuizApp.controller('CreateQuizController', ['$scope', function($scope){
	$scope.items = [
		{
			title: 'Lorem ipsum?'
		},
		{
			title: 'Lorem ipsum?'
		},
		{
			title: 'Lorem ipsum?'
		}
	];

	$scope.add_open_question = function(){
		$scope.items.push({
			title: 'Lorem ipsum dolor sit amet?'
		});
	}
}]);