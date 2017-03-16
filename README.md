# README

## What is this?
In this project, I was given an existing website with performance issues. The goal was the 
to find those issues and solve them using performance optimization techniques.  Concretely, the goal
was to get the website to a PageSpeed Insights score of at least 90 on both Mobile and Desktop, and make it run at a smooth 60-frame per second rate.

## How?
### PageSpeed
```index.html```
* use optimized images (from PageSpeed Insights)
* load Google Analytics script at the bottom
* replace Google fonts import with async script
* minify and inline css
