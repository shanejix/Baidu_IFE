function drawcanvas(arr,id){

	var div = document.getElementById(id);
	
	div.innerHTML="";
	var canvas = document.createElement("canvas");
	canvas.setAttribute("width","700");
	canvas.setAttribute("height","500");
	
	var spacing=50;
  	var groupspacing = parseInt((700-2*spacing)/arr.length);
  	var q = 1;

  	if (canvas.getContext) {

	    var ctx = canvas.getContext("2d");
	    //
	    ctx.beginPath();
	    ctx.moveTo(spacing,0);
	    ctx.lineTo(spacing,500-spacing);
	    ctx.lineTo(700,500-spacing);
	    ctx.stroke();
	    //
	    for (var i = 0; i < arr.length; i++) {
	    	let x = (i+1)*groupspacing+spacing;
	    	let y = 450-arr[i];

	    	ctx.beginPath();
	    	ctx.arc(x,y,5,0,Math.PI*2,true);
	    	ctx.fill();
	    }
	    //
	    for (var i = 0; i < arr.length; i++) {
	    	let x = (i+1)*groupspacing+spacing;
	    	let y = 450-arr[i];

	    	if (i==0) {
	    		ctx.beginPath();
	    		ctx.moveTo(x,y);
	    	}
	    	if (i) {
		    	ctx.lineTo(x,y);
		    	ctx.stroke();
    		}
	    }
    }
    div.appendChild(canvas);
}