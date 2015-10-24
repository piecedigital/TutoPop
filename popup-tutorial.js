var tutoPop = function(tutArr, color, index, nextCB, closeCB) {
	bgColor = "#9be0ff !important",
	textColor = "#017ab1 !important";
	
	if(color && typeof color === "object") {
		bgColor = (color[0]) ? color[0] + " !important" : bgColor,
		textColor = (color[1]) ? color[1] + " !important" : textColor;
	}
	
	tutArr = tutArr || [],
	index = index || 0,
	nextCB = nextCB || null,
	closeCB = closeCB || null;

	$("head").append( $("<style>").attr("id","popup-styles").text(".col-2 {width: 50%;display: inline-block;}.left-justify {text-align: left;}.right-justify {text-align: right;}.pointer {cursor: pointer;}.tut-box {position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%) scale(0.9);min-width: 15em;max-width: 15em;padding: 1em;border-radius: 1em;background-color: "+bgColor+";color: "+textColor+";box-shadow: 0 0 .4em 0 black;opacity: 0;}.tut-box.full {transition: .5s all;opacity: 1;transform: translate(-50%, -50%) scale(1);}.tut-box > div {width: 100%;height: 100%;position: relative;}.tut-box > div p {margin: 0;}.tut-box > div .separator {background-color: #004B6E;height: 1px;margin: .5em 0;opacity: 0.5;}.tut-box > div .arrow {overflow: hidden;position: absolute;width: 3.5em;height: 1.75em;}.tut-box > div .arrow.top {top: -2.75em;left: 50%;transform: translate(-50%, 0) rotateZ(0deg);}.tut-box > div .arrow.right {top: 50%;left: 100%;transform: translate(1%, -50%) rotateZ(90deg);}.tut-box > div .arrow.bottom {top: 100%;left: 50%;transform: translate(-50%, 55%) rotateZ(180deg);}.tut-box > div .arrow.left {top: 50%;left: 0%;transform: translate(-101%, -50%) rotateZ(-90deg);}.tut-box > div .arrow > div {transform: rotateZ(45deg);display: block;margin: .75em auto 0;background-color: "+bgColor+";width: 2em;height: 2em;box-shadow: 0 0 .4em 0 black;}") );
	// This variable is the structure for our tutorial dialog box
	var tutBox = function(text, x, y, side) {
	  x = x + "px" || "50%";
	  y = y + "px" || "50%";
	  side = side || "top";
	  var box = $("<div>").addClass("tut-box").css({
	    top: y,
	    left: x
	  }).html(
	    $("<div>").append(
	      $("<div>").addClass("arrow " + side).html( $("<div>") ),
	      $("<p>").html(text),
	      $("<div>").addClass("separator"),
	      $("<div>").addClass("quit col-2 left-justify").html(
	        $("<span>").addClass("pointer").html("X")
	      ),
	      $("<div>").addClass("next col-2 right-justify").html(
	        $("<span>").addClass("pointer").html("Next")
	      )
	    )
	  );
	  
	  return box;
	};

	// This is the function that brings together all of the components created above
	// It initiates the tutorial dialog box.
	// Here we pass in the array, index (optional), callback for next (optional), and callback for close (optional)
	var tutRun = function(arr, ind, nextFunc, closeFunc) {
	  ind = ind || 0;
	  var thisTutBox = new tutBox(arr[ind].msg, arr[ind].x + 16, arr[ind].y + 16, arr[ind].side);

	  $("body").append($(thisTutBox));
	  setTimeout(function() {
	    $(thisTutBox).addClass("full");
	  }, 100);

	  if( Math.ceil($(thisTutBox).offset().left + $(thisTutBox).width() + 16) >= $(document).width() ) {
	    $(thisTutBox).css("left", ($(document).width() - ($(thisTutBox).width() / 2)) - 16);
	  }

	  if( Math.floor($(thisTutBox).offset().left) <= 0 ) {
	    $(thisTutBox).css("left", (0 + $(thisTutBox).width() / 2) + 16);
	  }
	  
	  if( Math.ceil($(thisTutBox).offset().top + $(thisTutBox).height() + 16) >= $(document).height() ) {
	    $(thisTutBox).offset().css("top", $(document).height() - $(thisTutBox).height());
	  }
	  
	  if( Math.floor($(thisTutBox).offset().top) <= 0 ) {
	    $(thisTutBox).offset().css("top", 0 + 16);
	  }
	  
	  $(thisTutBox).find(".next").on("click", function() {
	    $(thisTutBox).remove();
	    if(nextFunc && typeof nextFunc === "function") { nextFunc(arr, ind, nextFunc, closeFunc); };
	    if(ind < arr.length-1) { tutRun(arr, ind+1, nextFunc, closeFunc); nextFunc = null; };
	  });
	  $(thisTutBox).find(".quit").on("click", function() {
	    if(closeFunc && typeof closeFunc === "function") { closeFunc(arr, ind, nextFunc, closeFunc); nextFunc = null; };
	    $(thisTutBox).remove();
	  });
	}
	tutRun(tutArr, index, nextCB, closeCB);
};