(function(OCP) {
	"use strict";

	OCP.DefaultLinkOpen = {
		apply: function () {
			OCP.Comments.formatLinksRich = function(content) {
				var self = this;
				return content.replace(this.urlRegex, function(url) {
					var hasProtocol = (url.indexOf('https://') !== -1) || (url.indexOf('http://') !== -1);
					if(!hasProtocol) {
						url = 'https://' + url;
					}

					var linkText = url.replace(self.protocolRegex, '');
					return '<a class="external" href="' + url + '">' + linkText + '</a>';
				});
			}
		}
	};

})(OCP);

$(document).ready(OCP.DefaultLinkOpen.apply);
