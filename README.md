#BC Responsive Menu
This allows to add Responsive menu functionality .

!NOTE: jQuery is required. 

Preslude: 
Responsive design is a must this days and one of the most common tasks is to make menu mobile ready. 
After writing a responsive menu couple of times i decided to make this, so i could reuse it in future. 


It is Desctope -> mobile design.
It requires you to have Not only menu but also a trigger element.

```
----------------- Mobile Mode - Desctope Mode-
Trigger Element |  Vicible    |   Hidden     |
main Navigation |  Hidden     |   Vissible   |
----------------------------------------------
```

You can Toggle main menu on  by with click event on Trigger elemen .
This class keeps track of toggle state and make sure that all elements displayed properly on transition from mobile view to descktop view. 

To use this you will have to know how to work with @media Queries. Please look in to this prior using this class. 
#1 First thing first. 

Have BC.responsiveMenu.js file linked.

```
<script type="text/javascript" src="js/BC.responsiveMenu.js"></script>	
```


#2 Have Trigger element in place. 

You need to have trigger element that is visible in mobile view. 
This element will have event listener to toggle main menu.  

For example my menu would look something like this.

```
<nav id="mainNav">
	<div class="container">

		// trigger element 
		<div id="triger">Menu</div>

		<div class="mainNav">
			<ul>
				<li><a href=""></a></li>
				<li><a href=""></a></li>
				<li><a href=""></a></li>
				<li><a href=""></a></li>
				<li><a href=""></a></li>
			</ul>
		</div>

	</div>		
</nav>	
```

#3 Create options object with required parameters

options.triggerElement - 
takes jQuery or DOM object , of a trigger element. 
In other this will be an element that will be visible only in mobile view and will trigger menu's toggle function.

options.targetElement - 
takes jQuery or DOM element of a target element
In other words this should be your menu that will bi hidden in mobile view and will be toggle on triggerElement clock event.

options.toggleSpeed - 
Takes integer. Will define toggle animation speed in milliseconds

options.triggerWidth - 
Takes integer. Will set max-width of a mobile view, and will set limit width at which code will be activated. 


```
var options = {
	triggerElement: $("#triger"),
	targetElement: $("#mainNav ul"),
	toggleSpeed: 200,	// optional
	triggerWidth: 960
}
```

#3 Initiate code

And finally we need to call BCresponsiveMenu object with options in argument
Place this code in your document.ready() section. 

So finally your script section should look something like this:

```
// options for responcive menu
var options = {
	triggerElement: $("#triger"),
	targetElement: $("#mainNav ul"),
	toggleSpeed: 200,	// optional
	triggerWidth: 960
}
// initiate menu function
BCresponsiveMenu(options);
```

