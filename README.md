#TutoPop
###Lead by bubble!

___

##Dependencies
* JQuery

___

##What is it?

TutoPop is a jQuery-based tool for creating simple popup tutorials showing your users the interface of your website or web app!

___

##How does it work?

It's simple! All you have to do is pass in a few key points of data voila! Instant tutorials!

The method takes up to 5 arguments

``` js
tutoPop(array[, array, int, callback, callback]);
```

Then there are (currently) 2 initiation type methods to call on tutoPop

``` js
// timeline 
// calling the "timeline" method will initiate tutoPop for procedural operations
tutoPop(...).timeline([options])
// oneTime
// calling the "oneTIme" method will initiate tutoPop to display all tutorial popups at once.
tutoPop(...).oneTime([options])
```

The "oneTime()" initiation method accepts an object with the following options
``` js
// This is an object of our initiation method options
// highlight: indicates whether or not to include a highlight on the page
// color: a CSS color value (hex code or RGB), the color of the area surrounding the highlighted area
// opacity: the opacity of the highlight box (color opacity is effected)

{
  highlight: boolean,
  opacity: number,
  color: String
}
```

Here how it works:

First, you'll want to create an array of all of your tutorial prompts

``` js
// This is an array of our tutorial prompts.
// It's an array of objects that take 9 parameters:

// dialogX: this is the x coordinate for the tutorial dialog box
// dialogY: this is the y coordinate for the tutorial dialog box
// highlightX: this is the x coordinate for the tutorial highlight box
// highlightY: this is the y coordinate for the tutorial highlight box
// highlightRadius: this is the border radius for the highlight area
// highlightWidth: this is the width of the optional highlight area
// highlightHeight: this is the height of the optional highlight area
// msg: this is the actual text for the tutorial dialog box
// side: this is the side that arrow will appear: top(default), right, bottom, left

var tutorials = [
  {
    dialogX: number,
    dialogY: number,
    highlightX: number,
    highlightY: number,
    highlightRadius: number,
    highlightWidth: number,
    highlightHeight: number,
    msg: String,
    side: String
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
tutoPop(array[, array, number, callback, callback]);
```

###Color: array

The second argument accepts an array. Passing in any hex code(s) (or CSS rgb(a) value(s)) will let you change the color of both the text and the background.

``` js
["<color for background>", "<color for text>"]
```
Pass an empty string or null to ignore that index of the array.

###Index: number

The third argument accepts an integer. This indicates the place in the tutorials array in which to begin the tutorial.

Pass an empty string or null and it will default to 0;

###Callback(s): function

The third and fourth arguments accept a function. This allows you to trigger certain events for the clicking of the "Next" and "X" buttons.

Pass an empty string or null and it will ignore it;

Below you'll find an example of a callback function using this feature

``` js
// This is our callback for when the user clicks the next button of the current tutorial dialog box (optional)

// "arr" is the original array that gets passed back to this function
// **NOTE** if you use the "oneTime" initiation method "arr" with actually be the one tutorial
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

That's just a small example of what you can use the callback feature of TutoPop for. Go crazy! And tell me about it :)

Here's a [Codepen](http://codepen.io/piecedigital/pen/vNdaJm) example of TutoPop in use.

___

# Thanks for viewing! :)
## Star this repo if you liked it
### Checkout my links below

[Twitter](http://twitter.com/PieceDigital) | [Github](piecedigital.github.io) | [LinkedIn](linkedin.com/in/pdstudios)
