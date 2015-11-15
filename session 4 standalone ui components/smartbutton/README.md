# smart button component

based on chapter 5 of the book

## use case

“As a web developer for a very large enterprise organization I need to be able to quickly include action buttons on my microsite that adhere to corporate style guide standards for color, shape, font, etc, and can be configured with the necessary behavior for my application.”

## features




### Attributes as component API: States
- configurable temporary state text (default)
- configurable active state text (after click)
- fixed finished text (after timeout)

#### Done in angular
- by assigning the incoming attribute values to directive scope in the linking function
- in the directive controller the scope values are used and there is binding with the DOM template
- an click handler changes the value from default to active, and a timeout handler from active to finished

#### API:
- attribute that represents incoming static text for default state
- attribute that represents incoming static text for active state

#### Exercise

Add 2-way binding for these attributes




### Events as component API: fixed click event and event listener

Interaction with another component: when the button is clicked the directive informs the world. Another component listens on the event. The other component fires an event with a command which the directive listens on again and the directive executes the command. In this case changing the style of the button element so that it becomes orange.

#### Done in angular
- emitting an event from directive scope upwards up to rootscope
- the other component broadcasts downwards from rootscope allowing the directive to listen on it

#### API:
- fires event on click
- listens on event and executes the command referring back to the same directive element





### Angular expressions as component API: Debug expression
Adds an angular expression, in this case an alert, that makes it possible to use parent scope stuff.

#### Done in angular
- bind parent scope expressions in an isolate scope. Here 'debug' becomes a local scope property derived from a parent scope. The parent scope cannot be modified

#### API:
- attribute that represents an angular expression to be executed





### Inner HTML added via transclusion API: Transcluded HTML fragment
Add HTML into the component (mainly interesting for container components where directives can be inside other directives.

#### Done in angular
Transclude = true will keep the html inside the directive element and it will be put where ng-transclude is in the directive template

