# evaluating our existing directives

What is well done for being an isolated component, what is not?

E.g. isolate scope usage can be a good sign, ...

## how to run

In this folder, run once

	npm install
	
and to start your server

	grunt server
	
(Note that aca code is not checked in)


## errorcontainer

It displays an error code that can be set or cleared via a service

- api of this directive is implicit (setting the error code must be done via a singleton service)
- Styling is in a project specific template partial
- Developers only need to interact with the errorcontainer service (and place the directive in the html)
- Reusable, but only 1 component per page (service is a singleton)

## confirmation modal

TODO

## conditional focus

TODO

## emailvalidator

Not really a component, just additional behaviour to a component

## http loading

- cfr errorcontainer. One singleton, only one use case.

TODO

## phone number

- component with validation

## block on exit

- cfr errorcontainer. 

## preview thumbnail

TODO 




# Exercise 

Create a component for the entire team selector of session 1