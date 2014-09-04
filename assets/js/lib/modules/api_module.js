var TEMPLATE = (function(){
	var _public = {};

	_public.get_quiz = function(options){
			$.get('/quiz/' + options.id)
			.success(function(data){
				options.success(data);
 	
 			}).fail(function(data){
 				options.fail(data);

 			})
		};

	return _public;
})();
