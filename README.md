# Animate.scss
A Scss version of [Dan Eden's](https://github.com/daneden) [Animate.css](http://daneden.me/animate)

## Features
animate-sass has a couple of features to make the most of what Sass has to offer for more effecient development.

### Base Styles
The `_animate.scss` file includes a base sass file that contains the base css rules for animate.scss to work.

### Settings
The settings file defines a range of default [Sass variables](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_) which are used by some of the animation modules. You can override the defaults in your own settings or style sass file(s).

####Animation Module loading
The settings file also sets all animation modules to false (nothing gets loaded).

To include an animation module in your project, simply override the $use[moduleName] variable in your own settings file to true.

By only choosing the animation modules you need, you're keeping the compiled css at it's leanest!

Eg:
````
// These will be included
@import "animation/bounce";
@import "animation/flash";
@import "animation/pulse";
````

Modules are arranged by the following animation types;

- Attention Seekers
- Bouncing Entrances
- Bouncing Exits
- Fading Entrances
- Fading Exits
- Flippers
- Lightspeed
- Rotating Entrances
- Rotating Exits
- Sliding Entrances
- Sliding Exits
- Zoom Entrances
- Zoom Exits
- Specials

### Animations
All individual animation modules are kept in their own [Sass partials](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#partials) so they can be found easily. You shouldn't need to edit these as they are part of the animate.css library.

### Bower Support
Add animate-scss to your project using [Bower](http://bower.io)

bower.json dependency
````
"dependencies": {
  "animate-scss-edition": "1.0.0"
}
````

Command line
`bower install animate-scss-edition`

## Usage
To use animate.scss in your project, you will need to have Sass installed. [Visit the Sass site](http://sass-lang.com/) to find out how to do this.

Once Sass has been installed, you can download or clone this repo into your project's `css` folder and import `animate.scss` into your main Sass stylesheet.

Eg: inside css/style.scss
````
@import "animate-scss/animate"
````

Choose which modules you want to use in you project by overriding the variables set in the `helpers/settings.scss` file in your own settings file.

Add the base css styles mentioned in the BASE section above.

Finally in your markup, simply add the class `animated` to an element, along with any of the animation class names.

````
    <div class="animated fadeIn">
    	<p>Watch me fade in!</p>
    </div>
````

That's it! You've got a CSS animated element. Super!

## Questions/Comments
You can follow me / ask questions on twitter: [@reatlat](http://www.twitter.com/reatlat)

## Learn more
You can [check out the original animate.css here](http://daneden.me/animate). See working examples as well as how to use with javascript or creating custom css classes

## MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Copyright © 2016 by [Alex Zappa a.k.a. re[at]lat](https://github.com/reatlat)
