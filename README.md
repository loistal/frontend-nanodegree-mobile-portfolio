# README

## What is this?

In this project, I was given an existing website with performance issues. The goal was the 
to find those issues and solve them using performance optimization techniques.  Concretely, the goal
was to get the website to a PageSpeed Insights score of at least 90 on both Mobile and Desktop, and make it run at a smooth 60-frame per second rate.

## How to run
There are 2 ways to access the website:

* The simplest method consists in opening the following URL using any web browser: <a href="https://loistal.github.io/frontend-nanodegree-mobile-portfolio/">https://loistal.github.io/frontend-nanodegree-mobile-portfolio/</a>
* Alternatively, you can run the application locally by:
	* Cloning the repo: ```git clone https://github.com/loistal/frontend-nanodegree-mobile-portfolio/```
	* Then opening frontend-nanodegree-mobile-portfolio/index.html using a web browser

## Optimizations

### PageSpeed

* use optimized images (from PageSpeed Insights)
* load Google Analytics script at the bottom
* replace Google fonts import with async script
* minify and inline css

### Frame rate

* loop optimization: several values computed inside the loop are constant. Those computations are moved outside the loop.
* painting optimizations:
	* decrease the number of pizzas
	* create an array that stores all the pizzas with id "movingPizzas1"
	* add ```backface-visibility: hidden``` in mover
	* decrease time for pizza rendering: calculate dx and newWidth outside the loop


