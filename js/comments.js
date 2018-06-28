/**
 * @copyright (c) 2018 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 */

(function(OCP) {
	"use strict";

	OCP.DefaultLinkOpen = {
		apply: function () {
			OCP.Comments.formatLinksRich = function(content) {
				var self = this;
				return content.replace(this.urlRegex, function(url) {
					var hasProtocol = (url.indexOf('https://') !== -1) || (url.indexOf('http://') !== -1);
					if(!hasProtocol) {
						url = 'https://' + url.trim();
					}

					var linkText = url.replace(self.protocolRegex, '');
					return '<a class="external" href="' + url + '">' + linkText + '</a>';
				});
			}
		}
	};

})(OCP);

$(document).ready(OCP.DefaultLinkOpen.apply);
