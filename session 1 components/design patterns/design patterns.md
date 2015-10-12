# MVC (separation of concerns)

## concept

Clean separation of concerns between

* view or user interface presentation (html: the intent ; css: how it looks like, the display)
* controller or business logic (update model and view and their interactions)
* model or data (actual content, data)

## advantages

* separation of concerns
* separate profile: web authors vs front-end developers

## without front-end framework
...

## in angular 1.x

* view: partial, template, some html/css
* controller: ng-controller, directive link function
* model: service or data model ($resource)

## in extJS
?

## using web component spec

it's ... different, it's not really related, but web components comprise the view and business logic and model could be coming in through its APIs


# Observer (publish / subscribe)

UI components do not know about there context, so they should communicate indirectly, via APIs:
- shout what it does blindly : eg. send events
- and listen 'blindly': eg. setup a listener for an event

--> Events and Event Listeners as APIs

# Mediator

to know about the other components and facilitate communication between them. Listening for events and invoking other functions in response to events

# IoC (dependency injection)

TODO

# Component: no application or page level dependencies

TODO

# Module pattern

TODO

# Promises

TODO
