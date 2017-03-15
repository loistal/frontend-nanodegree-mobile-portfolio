# TODO

## Optimizing the DOM
- minify
	- HTML: http://kangax.github.io/html-minifier/
	- CSS: http://cssnano.co/, https://css.github.io/csso/csso.html
	- JS: http://lisperator.net/uglifyjs/
- compressing: done automatically
- cache
- unblock CSS rendering: 
	- split CSS into separate styles
	- inline if possible
	- add a 'media' attribute when importing a non-critical stylesheet
- external JS dependencies: 
	- inline JS if possible
	- JS is executed after CSS -> it blocks CSS => make CSS faster
	- Async JS: <script src"..." async></script>:
		- does not block DOM construction
		- does not block on CSSOM

