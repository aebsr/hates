---
permalink: assets/hates.js
---

 $(document).ready(function () {

 	var hatred, hate;

	// Issues
	hatred = [ {% for post in site.posts %}"{{site.url}}{{ post.url }}/",{% endfor %} ];
	hate = hatred.indexOf(window.location.pathname);

	// Therapy
	hatred.splice(hate, 1);

	// Relapse
	hate = hatred[Math.floor(Math.random()*hatred.length)];

	$('h2 a').attr('href', hate);

 });
