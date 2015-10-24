#TutoPop
###Lead by bubble!

___

##Dependencies
* JQuery

___

##What is it?

TutoPop is a jQuery tool for creating simple popup tutorials showing your users the interface of your website or web app!

___

##How does it work?

It's simple! All you have to do is pass in a few key points of data voila! Instant tutorials!

The method takes up to 5

```
tutoPop(array[, array, int, callback, callback]);
```

Here how it works:

First, you'll want to create an array of all of your tutorial prompts

```
// This is an array of our tutorial prompts.
// It's an array of objects that take 3 parameters:
// x: this is the x coordinate for the tutorial dialog box
// y: this is the y coordinate for the tutorial dialog box
// msg: this is the actual text for the tutorial dialog box
// side: this is the side that arrow will appear: top(default), right, bottom, left

var tutorials = [
  {
    x: int,
    y: int,
    msg: String
    side: String
  },
  ...
];
```

Next, we call the tutoPop method to initiate the tutorial popups

```
tutoPop(tutorials);
```

And that's it! Seriously, that's all that's required.

Of course there's more that you can so with TutoPop, so let's explore what those other optional arguments let us do.

___


```
tutoPop(array[, array, int, callback, callback]);
```

###Color: array

The second argument accepts an array. Passing in any hex code(s) (or CSS rgb(a) value(s)) will let you change the color of both the text and the background.

```
["<color for background>", "<color for text>"]
```
Pass an empty string or null to ignore that index of the array.

###Index: int

The third argument accepts an integer. This indicates the place in the tutorials array in which to begin the tutorial.

Pass an empty string or null and it will default to 0;

###Callback(s): function

The third and fourth arguments accept a function. This allows you to trigger certain events for the clicking of the "Next" and "X" buttons.

Pass an empty string or null and it will ignore it;

Below you'll find an example of a callback function using this feature

```
// This is our callback for when the user clicks the next button of the current tutorial dialog box (optional)

// "arr" is the original array that gets passed back to this function
// "ind" is the current index that gets passed back to this function
// "nextFunc/closeFunc" are the original callbacks that get passed back to this function

var nextCB = function(arr, ind, nextFunc, closeFunc) {
  if(ind >= arr.length-1) {
    if(confirm("Would you like to rerun the tutorial?")) {
      popupTut(arr, null, nextFunc, closeFunc);
    }
  }
};

// This is our callback for when the user clicks the close button of the current tutorial dialog box (optional)

// ditto

var closeCB = function(arr, ind, nextFunc, closeFunc) {
  if(confirm("Would you like to rerun the tutorial?")) {
    popupTut(arr, null, nextFunc, closeFunc);
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