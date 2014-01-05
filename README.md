# Strapinsky (alpha version)

## Classes

### Wrappers

#### content
```html
<div class="content"></div>
```

#### wrap (Wrapper)
```html
<div class="wrap"></div>
```

### Columns
Replace * with a number (up to 12 by default but can be changed in _settings.scss) to change column width.

#### c* (Column)
Column width. By default c4 would be a third of the width of it's parent.
```html
<div class="c4"></div>
```

#### stack* (Stacking columns)
All first level children get's the width of c4.
```html
<div class="stack4">
	<div>Column 1</div>
	<div>Column 2</div>
	<div>Column 3</div>
</div>
```

### Floats

#### fl (Float left)
```html
<div class="fl"></div>
```

#### fr (Float right)
```html
<div class="fr"></div>
```

### Margins
Replace * with a number (up to 24 by default but can be changed in _settings.scss) to multiplicate by.
No number and 1 is the same, ie times 1.

#### m* (Margin)
```html
<div class="m"></div>
```

#### mt* (Margin top)
```html
<div class="mt"></div>
```

#### mb* (Margin bottom)
```html
<div class="mb"></div>
```

#### ml* (Margin left)
```html
<div class="ml"></div>
```

#### mr* (Margin right)
```html
<div class="mr"></div>
```


### Paddings
Replace * with a number (up to 24 by default but can be changed in _settings.scss) to multiplicate by.
No number and 1 is the same, ie times 1.

#### p* (Padding)
```html
<div class="p"></div>
```

#### pt* (Padding top)
```html
<div class="pt"></div>
```

#### pb* (Pading bottom)
```html
<div class="pb"></div>
```

#### pl* (Padding left)
```html
<div class="pl"></div>
```

#### pr* (Padding right)
```html
<div class="pr"></div>
```

### Other

#### overflow-hidden
```html
<div class="overflow-hidden"></div>
```


## Project description

Strapinsky is a boilerplate that uses HTML5 and Sass for rapid web development.

## File structure

* library
    * css **// Stylesheet directory**
        + style.css **// Don't work with this! Stylesheet, compiled from all Sass files.**
    * favicons **// Favicon directory**
        + apple-touch-icon-72x72.png **// iPad 1st and 2nd gen icon.**
        + apple-touch-icon-114x114.png **// Retina iPhone and iPod icon.**
        + apple-touch-icon-144x144.png **// Retina iPad icon.**
        + favicon.png **// Desktop icon.**
        + touchicon.png **// iPhone and iPod icon.**
    * js **// JavaScript directory**
        + script.js **// Put your own javascript in here!**
    * scss **// Sass directory**
        + _reset.scss **// html5doctor.com Reset Stylesheet.**
        + _settings.scss **//Settings for page, font, color, margin & padding.**
        + _default-classes **// Default classes like m for margin and p for padding etc.**
        + _grid **// The grid. A digital frontier. (http://youtu.be/S5S6s5dZXNM).**
        + _variables **//Store your own variables. If you wanna.**
        + _mixins **// Store mixins.**
        + _480less **// The default lowest breakpoint Sass file. Begin styling with this one for mobile-first development.**
* index.html **// Your starter HTML file.**
* README.md **// This file!**

## HTML structure

### Encoding & language

```no-highlight
<meta charset="utf-8">
```
Set to utf-8 as default. Read more about meta at [MDN](http://goo.gl/tI406X)

### Page info

```no-highlight
<title>Strapinsky beta</title>
```
```no-higlight
<meta name="description" content="">
```
```no-higlight
<meta name="keywords" content="">
```
```no-higlight
<link rel="canonical" href="http://example.strapinsky.com">
```

### Mobile

```no-higlight
<meta name="HandheldFriendly" content="true">
```
HandheldFriendly was originally created by Palm and BlackBerry devices for managing mobile websites. It is still somewhat useful although not exactly the highest market share among mobile devices.

```no-higlight
<meta name="MobileOptimized" content="320">
```
This was originally designed for mobile Internet Explorer and will be carried over for WMP.

```no-higlight
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
```
Controls the logical dimensions and scaling of the browser viewport window in many smartphone browsers, including Safari Mobile for the iPhone, Android browser, webOS browser in Palm Pre and Pixi devices, Opera Mini, Opera Mobile and BlackBerry browsers. The presence of the Viewport META tag indicates that the markup document is optimized for mobile devices.

### Favicons

```no-higlight
<link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png">
```
```no-higlight
<link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png">
```
```no-higlight
<link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png">
```
```no-higlight
<link rel="apple-touch-icon" href="touchicon.png">
```
```no-higlight
<link rel="icon" href="favicon.png">
```
Regular favicon (32 x 32 pixels)


<!--[if IE]><link rel="shortcut icon" href="path/to/favicon.ico"><![endif]-->
<!-- or, set /favicon.ico for IE10 win -->




### Features

- Add support for old ie browsers
	eg.
	"""
	<!--[if lt IE 7 ]><html class="ie ie6" lang="sv"> <![endif]-->
	<!--[if IE 7 ]><html class="ie ie7" lang="sv"> <![endif]-->
	<!--[if IE 8 ]><html class="ie ie8" lang="sv"> <![endif]-->
	<!--[if IE 9 ]><html class="ie ie9" lang="sv"> <![endif]-->
	<!--[if (gte IE 9)|!(IE)]><!--><html lang="sv"> <!--<![endif]-->
	"""
- IE 10 & WMP favicons
<meta name="msapplication-TileColor" content="#D83434">
<meta name="msapplication-TileImage" content="tileicon.png">