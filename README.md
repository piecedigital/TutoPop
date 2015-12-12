# TutoPop
### Lead by bubble!

___

## Requirements
* JQuery

___

## What is it?

TutoPop is a jQuery-based tool for creating simple popup tutorials showing your users the interface of your website or web app!

___

## How does it work?

It's simple! All you have to do is pass in a few key points of data voila! Instant tutorials!

The method takes up to 5 arguments

``` js
tutoPop(array[, array, int, callback, callback]);
```

Then there are (currently) 2 initiation type methods to call on tutoPop

``` js
// timeline 
// calling the "timeline" method will initiate tutoPop for procedural operations
tutoPop(...).timeline()
// oneTime
// calling the "oneTIme" method will initiate tutoPop to display all tutorial popups at once.
tutoPop(...).oneTime([options])
```

The initiation methods accept an object with the following options
``` js
// This is an object of our initiation method options
// fadeIn: the time, in seconds, that it'll take for the dialog box to fade in
// highlight: indicates whether or not to include a highlight on the page
// color: a CSS color value (hex code or RGB), the color of the area surrounding the highlighted area
// opacity: the opacity of the highlight box (color opacity is effected)

{
  fadeIn: number
  highlight: boolean,
  opacity: number,
  color: string
}
```
**NOTE: the "highlight" option is not available to the "oneTime()" initiation method. Ergo, neither are "opacity" and "color"**
___

Here how it works:

First, you'll want to create an array of all of your tutorial prompts

``` js
// This is an array of our tutorial prompts.
// It's an array of objects that take 9 parameters:

// dialogX: this is the x coordinate for the tutorial dialog box. 50% is the default
// dialogY: this is the y coordinate for the tutorial dialog box. 50% is the default
// highlightX: this is the x coordinate for the tutorial highlight box
// highlightY: this is the y coordinate for the tutorial highlight box
// highlightRadius: this is the border radius for the highlight area
// highlightWidth: this is the width of the optional highlight area
// highlightHeight: this is the height of the optional highlight area
// msg: this is the actual text for the tutorial dialog box. "???" is the default text
// side: this is the side that arrow will appear: top(default), right, bottom, left
// offset: this is of the arrow. If it had a face, negatives would be its left, posititves its right. Influence is a percentage based on dialog box width or height. 0% is the default value

var tutorials = [
  {
    dialogX: number,
    dialogY: number,
    highlightX: number,
    highlightY: number,
    highlightRadius: number,
    highlightWidth: number,
    highlightHeight: number,
    msg: string,
    side: string,
    offset: number
  },
  ...
];
```

Next, we call the tutoPop method to initiate the tutorial popups

``` js
tutoPop(tutorials).[initiationTypeMethod]([options]);
```

And that's it! Seriously, that's all that's required.

Of course there's more that you can so with TutoPop, so let's explore what those other optional arguments let us do.

___


``` js
tutoPop(tutorials[, color, index, nextButtonCallback, closeButtonCallback]);
```

### Color: array

The second argument accepts an array. Passing in any hex code(s) (or CSS rgb(a) value(s)) will let you change the color of both the text and the background.

``` js
["<color for background>", "<color for text>"]
```
Pass an empty string or null to ignore that index of the array.

### Index: number

The third argument accepts an integer. This indicates the place in the tutorials array in which to begin the tutorial.

Pass an empty string or null and it will default to 0;

### Callback(s): function

The third and fourth arguments accept a function. This allows you to trigger certain events for the clicking of the "Next" and "X" buttons.

Pass an empty string or null and it will ignore it;

Below you'll find an example of a callback function using this feature

``` js
// This is our callback for when the user clicks the next button of the current tutorial dialog box (optional)

// "arr" is the original array that gets passed back to this function
// "ind" is the current index that gets passed back to this function
// "nextFunc/closeFunc" are the original callbacks that get passed back to this function

var nextCB = function(arr, ind, nextFunc, closeFunc) {
  if(ind >= arr.length-1) {
    if(confirm("Would you like to rerun the tutorial?")) {
      tutoPop(arr, null, null, nextFunc, closeFunc).timeline();
    }
  }
};

// This is our callback for when the user clicks the close button of the current tutorial dialog box (optional)

// ditto

var closeCB = function(arr, ind, nextFunc, closeFunc) {
  if(confirm("Would you like to rerun the tutorial?")) {
    tutoPop(arr, null, null, nextFunc, closeFunc).timeline();
  }
};
```
**NOTE: if you use the "oneTime" initiation method "arr" with actually be a single tutorial from the popup**

That's just a small example of what you can use the callback feature of TutoPop for. Go crazy! And tell me about it :)

Here's a [Codepen](http://codepen.io/piecedigital/pen/vNdaJm) example of TutoPop in use.

___

#  Thanks for viewing! :)
##  Star this repo if you liked it
###  Checkout my links below

[Twitter](http://twitter.com/PieceDigital) | [Github](piecedigital.github.io) | [LinkedIn](linkedin.com/in/pdstudios)
