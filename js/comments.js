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
			OCP.Comments._originalFormatLinksRich = OCP.Comments.formatLinksRich;
			OCP.Comments.formatLinksRich = function(content) {
				let formattedContent = OCP.Comments._originalFormatLinksRich(content);
				return formattedContent.replace(/<a class="external" target="_blank" rel="noopener noreferrer"/g, '<a class="external" rel="noopener noreferrer"');
			}
		}
	};

})(OCP);

$(document).ready(OCP.DefaultLinkOpen.apply);
