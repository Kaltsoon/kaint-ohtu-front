QuizApp.service('QuizService', function(){
	var _public = {};
	_public.create_quiz = function(optinons){
		$.post('/quiz', optinons.quiz)
		.done(function(data){
			optinons.done(data);
		})
		.fail(function(data)){
			optinons.fail(data);
		});
	}
	return _public;
});