This is an implementation of the team selection side without using any framework

# Evaluation

## What does it do technically?

* it renders empty divs on the screen
* on load it makes a request to load player data
	* for every player, it appends some html to the DOM
* user interaction allows the player to be clicked, on click
	* some checks are done, based on the checks
		* errors are shown
		* error container styling changes
	* the player is (un)selected
		* html element is removed from one div
		* and appended to the other div

## What could be done better? 

### Think of it as a ui component

* it's not really a component
	* it's not reusable
	* it's not testable/tested
	* it's not configurable
		* it cannot be used for selections where there are not 11 players in the selection
	* there's no API	
	* it's not modular
		
* styling? suppose this would be a component, which styling should apply to the component pieces versus which styling to the page?

### Think of ui practices
	
* about styling?
	* Maybe instead of setting properties we should change classes on the DOM element

* javascript is mixed with html? 
	* javascript is behaviour and should be in a javascript file. Also it's cached, html pages are reloaded every time (?)
	* no mvc. Is that needed? That's another discussion. At least we want clear separation of concerns. 

* getElementById -> unclear binding -> it might break if someone changes an id in 1 place? 
	* tight coupling between model and view
	* can be ok if 'internalized' inside a component which can only be accessed via a API (+ shadow DOM) or with data binding

* lots of boilerplate
	* xmlhttprequest
	* dom manipulation
	* using a framework or library hides things away and it's considered a good practice

* dom manipulation?
	* HTML should be the declarative view. There is not really a view, just empty divs. Now the view is created by javascript web API.
	* can be eliminated by data binding, also easier to test
	