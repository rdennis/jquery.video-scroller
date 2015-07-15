'use strict';

; (function($) {
	$.fn.videoScroller = function(options) {
		// settings passed to plugin
		var settings = $.extend(true, {}, $.fn.videoScroller.defaults, options);

		$(this).filter('video').each(function() {
			// settings from the element
			var attrSettings = $(this).data('vsSettings');
			if (typeof attrSettings != 'object') {
				attrSettings = null;
			}

			var vsSettings = $.extend(true, settings, attrSettings, { el: this });
			new VideoScroller(vsSettings);
		});

		return this;
	};

	$.fn.videoScroller.defaults = {};
})(jQuery);