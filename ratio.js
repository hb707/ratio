(function($){
	$.fn.ratio = function(options){
		var default_settings = {
			width 	: 1,
			height 	: 1,
			ref		: "width"
		}

		var settings = $.extend(default_settings,options);

		return this.each(function(){
			var scale = settings.width/settings.height;
			if(settings.ref=="width"){
				var parentWidth = $(this).parent().innerWidth();
				$(this).outerHeight(parseInt(parentWidth/scale));
			}else if(settings.ref=="height"){
				var parentHeight = this.parent().innerHeight();
				$(this).outerWidth(parseInt(parentHeight*scale));
			}else{
				$(this).height("").width("");
			}
		})
	}
})(jQuery);