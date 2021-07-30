# random quote generator

On [random quote generator](https://mollyexten.github.io/quote-generator/), users can access random quotes by topic or at large.

## About

The functionality is quite simple - one single Vanilla JS file that handles calling random quotes the Quote Garden API by topic or at large with a filter to keep the quotes under 220 characters.

The **main focus** of this website was to create a **WELL-STYLED WEBSITE**.

I wanted to:
1. learn Sass
2. use more responsive units of measurement in CSS
3. avoid media queries (*not sure why this became a goal, but it was an interesting challenge*)

Read on for some of the style insights I gained from this project!

### vmin
This unit was very helpful for creating responsive font sizes that didn't break the styling with unusual screen sizes (or just horizontal phone orientations!)

### The 100vh Problem
Since this is a small website, I set the body height to be 100vh. Everything looked good until I viewed my app on a phone. The browser bar pushed the whole site downwards, which threw off my styles! I learned more about the 100vh problem through [this article](https://chanind.github.io/javascript/2019/09/28/avoid-100vh-on-mobile-web.html), and there was even a solution to this issue in the comments: 
```html, body { height: 100% }```

### mixins
Sass mixins were incredibly handy for setting ths color scheme. [Sass documentation](https://sass-lang.com/documentation) was very easy to follow. I was able to pass arguments into these mixins and used a conditional to determine the color scheme:
```
@mixin colorScheme($theme) {
  @if $theme == dark {
    background-color: $darkGray;
    color: $offWhite;
  } @else {
    background-color: $offWhite;
    color: $darkGray;
  }
}
```
I also found mixins useful for setting the two common flex layouts that I use:
```@mixin flexSetup($orientation) {
  display: flex;
  @if $orientation == horizontal {
    align-items: center;
  } @else {
    flex-direction: column;
    justify-content: center;
  }
}
```

## Feature: The Animated Header
To add a final flourish to this website, I styled the header so that the word generator appears to be typed out. I used [this amazing Code Pen](https://codepen.io/5t3ph/pen/qBdJVEq) as my guide. Roughtly, this involved:
- creating a span within the <h1> tag to hold the text to be animated
- giving the span two classes to handle (1) keeping text hidden at the beginning and (2) animating the letters printing to the page (increasing the width) and a cursor (changing the border color to create a flicker effect)
  
My favorite part of creating this header was using a for loop in Sass (!!!):
```@keyframes type {
  @for $ch from 1 to $chCount {
    $frame: $ch * $frameSize;
    // #{$frame * 1%} replaced #{$frame} * 1%, which I figured out from this stack overflow: https://stackoverflow.com/questions/10787609/sass-error-when-using-in-property-value-together-with-for-loop-variable
    #{$frame * 1%} {
      width: $ch * $chWidth;
    }
  }
  100% {
    width: ($chCount - 1) * $chWidth;
    padding-right: 0;
  }
}```
 

## Reflections
I learned a lot of useful Sass features through this project, and I can't wait to apply it to my other work. In the future, I plan to learn more about:
  1. How to best organize my Sass files
  2. The best way to use responsive units for media queries
