# Design principles for components

Reusable
Portable
Consumable
Consistent
Maintainable
Encapsulated
Loosely coupled
Quick to implement
Self containing

## Reusable

* unit-tested components
* general behaviour, extract specifics from generics
* general, clear naming
* think of reusability when writing similar code again and again
* configurable components

## Portable

* over different browsers (based on spec)
* ~reusable, but in different use cases
* configurable components
* clear (and possibly documented) APIs
* IoC

## Consumable

- available?
- usable?

## Consistent

* unit tested
* same approach over multiple components?
* look and feel, user experience?
* consistent API
* adhering to technology practices
* using namespaces?
* consistent naming
* coding style
* standardized

## Maintainable

* readable and understandable code
* maintain backwards compatibility if possible
* avoid duplication
* keep it simple (kiss), low complexity
* well tested, tests are documentation
* no mix of languages, eg excessive json in html, keep javascript out of html
* intuitive

## Encapsulated

* no naming collisions (javascript global scope)
* only interact via API, not use the internals
* keep look and feel (eg facebook like components)

## Loosely coupled

- IoC
- decoupled communication (mediator)
- html id's used in javascript (ok for components)
- modular
- few knowledge about other components, APIs
- no mix of languages, eg excessive json in html, keep javascript out of html

## Quick to implement

* understandable
* well documented (in any way)

## Self containing

* reusable without the need to include other components for reuse
