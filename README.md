jquery.dropdown
===============

A simple jQuery plugin to create stylable and customizable dropdown menus. The menu is navigatable with the arrow keys, options can be selected with ```enter``` and the menu can be closed with the ```esc``` key.

Usage
-----
``` html
<head>
  <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
  <script src="jquery.dropdown.js"></script>
</head>
```
``` html
<div class="dropdown">
  <div class="dropdown-head">
    <span class="title" unselectable="on">-- Default Option --</span><span class="caret"></span>
  </div>
  <ul class="dropdown-body">
    <li data-value="0" unselectable="on">First Value</li>
    <li data-value="1" unselectable="on">Second Value</li>
  </ul>
</div>
```

You can either just include this in the HTML head
``` html
<script>
  $(window).ready(function() {
    $('.dropdown').dropdown(alert);
  });
</script>
```
or run the code right after the required DOM elements are parsed. The function ```dropdown()``` takes a callback function that is run when a menu option is selected. The ```data-value``` is sent as an argument to the callback function. Also callbacks are called in scope, so ```this``` refers to the parent ```<div class="dropdown" />``` which can be useful for finding the caller (if there are many with the same callback).

License
-------
Copyright (C) 2013 by Karl Tannergård.
This plugin is licensed under the [MIT License (MIT)](http://opensource.org/licenses/MIT)

```
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
```
