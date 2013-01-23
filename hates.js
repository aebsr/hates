---
permalink: assets/hates.js
---

 $(document).ready(function () {

 	var hatred, hate;

	// Issues
	hatred = [ {% for post in site.posts %}"{{ post.url }}/",{% endfor %} ];
	hate = hatred.indexOf(window.location.pathname);

	// Therapy
	hatred.splice(hate, 1);

	// Relapse
	hate = hatred[Math.floor(Math.random()*hatred.length)];

	if ($('h2 + a').length) {
		$('h2 + a').attr('href', hate);
	} else {
		$('h2').after(function() {
			return '<a href="' + hate + '">What else?</a>';
		});
	}
 });
