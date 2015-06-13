
//responcive menu object
var BCresponsiveMenu = function(options){
	var toggleState = false;
	var screenWidth = window.innerWidth;
	var triggerElement = $(options.triggerElement);		
	var targgetElement = $(options.targetElement);
	
	// INIT
	// if Over triggerWidth Hide triggerElement and live normal menu visible 
	// if Under triggerWidth hide menu and show triggerElement 	
	if(screenWidth <= options.triggerWidth ){// under then trigger width 
		toggleState = false;
		// hide menu
		targgetElement.css('display', 'none');
		//show trigger element 
		triggerElement.css('display','block');
	}else{// over then trigger width 
		toggleState = true;
		// show menu
		targgetElement.css('display', 'block');
		// hide trigger element 
		triggerElement.css('display','none');
	}

	// show menu on request
	this.show = function(){
		if(toggleState == false){
			toggleState = true;
			targetElement.toggle(100);
		}else{
			// do nothing
		}			
	}
	// hide menu on request 
	this.hide = function(){
		if(toggleState == true){
			toggleState = false;
			targetElement.toggle(100);
		}
	}

	//switch triggerElement and TargetElement states on resize 
	window.onresize = function(){
		screenWidth = window.innerWidth;
		if(screenWidth > options.triggerWidth ){// larger then trigger width
			toggleState = true;
			// show menu
			targgetElement.css('display', 'block');
			// hide trigger element 
			triggerElement.css('display','none');
		}else{
			toggleState = false;
			// hide menu
			targgetElement.css('display', 'none');
			//show trigger element 
			triggerElement.css('display','block');
		}
	}

	// Toggle on click event on TriggerElement
	triggerElement.on('click',function(){
		if(options.toggleSpeed == undefined){
			$("#mainNav ul").toggle();
		}else{
			$("#mainNav ul").toggle(options.toggleSpeed);
		}
		
	});

}
