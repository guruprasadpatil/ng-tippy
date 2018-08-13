# NgTippy

NgTippy is an Angular wrapper directive for Tippy.js

## Installation

```
npm i ng-tippy
```

# Usage
 
Import in app.module.ts

```javascript
...
import { TippyModule } from 'ng-tippy';
... 

imports: [ TippyModule ]
```

# Basic

```html
<input title="I am a tooltip" appTippy>show on mouseover or hoverover</input>
```

# With options

```html
<input title="I am a tooltip" appTippy [tippyOptions]="{arrow: true}">
  show on mouseover or hoverover
</input>
```

# With custom template

```html
<div id="myCustomTemplate"></div>

<input title="I am a tooltip" appTippy [tippyOptions]="{html: '#myCustomTemplate'}">
 show on mouseover or hoverover
</input>
```
# Using the Tippy service