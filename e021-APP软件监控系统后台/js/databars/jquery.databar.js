/**
 * jquery.databar - jQuery plugin for Excel-style data bar.
 * https://github.com/ts-3156/databar
 * Released under the MIT license
 */
(function ($) {
	$.fn.databar = function (options) {
		var options = options || {};

		var colorMaker = (function () {
			var n = 0;
			var backgroundOpacity = (options.backgroundOpacity || 0.4);
			// solarized colors
			var colors = [
				'rgba(181, 137, 0, ' + backgroundOpacity + ')',   // '#b58900',
				'rgba(191, 122, 106, ' + backgroundOpacity + ')',   // '#cb4b16',
				'rgba(169, 189, 122, ' + backgroundOpacity + ')',   // '#dc322f',
				'rgba(111, 180, 206, ' + backgroundOpacity + ')',  // '#d33682',
				'rgba(210, 169, 104, ' + backgroundOpacity + ')', // '#6c71c4',
				'rgba(38, 139, 210, ' + backgroundOpacity + ')',  // '#268bd2',
				'rgba(42, 161, 152, ' + backgroundOpacity + ')',  // '#2aa198',
				'rgba(133, 153, 0, ' + backgroundOpacity + ')'    // '#859900'
			];
			return function () {
				n++;
				if (n >= colors.length) {
					n = 0;
				}
				return colors[n];
			};
		})();

		options.css = $.extend({
			textAlign: 'right'
		}, options.css);

		var $table = $(this);
		if ($table.find('thead').length == 0) {
			console.error('thead not found. please use thead, th, tbody, tr and td.');
			return;
		}
		if ($table.find('tbody').length == 0) {
			console.error('tbody not found. please use thead, th, tbody, tr and td.');
			return;
		}
		if ($table.find('tbody tr').length == 0) {
			console.error('tr not found. please use thead, th, tbody, tr and td.');
			return;
		}
		if ($table.find('tbody tr td').length == 0) {
			console.error('td not found. please use thead, th, tbody, tr and td.');
			return;
		}

		var column_size = $table.find('tbody tr').first().find('td').length;

		for (var i = 0; i < column_size; i++) {
			var $vertical_tds = $table.find('tbody tr > :nth-child(' + (i + 1) + ')');
			var numbers = $vertical_tds.map(function (i) {
				var text = $(this).text();

				var stripped = text.replace(/[\s,%$\\]/g, '');
				if ($.isNumeric(stripped)) {
					return parseFloat(stripped);
				} else {
					return false;
				}
			});

			(function ($tds, options) {
				var metrics = {};
				metrics['100%'] = Math.max.apply(null, numbers);
				var color = colorMaker();

				$tds.each(function (i) {
					if (numbers[i] === false) {
						return true;
					}
					var $bar = $('<span />')
						.css($.extend({
							'position': 'absolute',
							'top': 0,
							'left': 0,
							'zIndex': 0,
							'display': 'block',
							'height': '100%',
							'width': (100 * numbers[i] / metrics['100%']) + '%',
							'backgroundColor': color
						}, options.css));
					$(this).prepend($bar);

					$(this).wrapInner($('<div />').css({
						'position': 'relative',
						'textAlign': options.css['textAlign']
					}));
				});
			})($vertical_tds, options);
		}

		return this;
	}
}(jQuery));
