
The body is given a "font-size" of "62.5%" so that 1em equates to 10px, this allows you size everything easily in em, which means that if you ever need to implement accessibility resizing on a site, that it can be done rather easily.

	Style Rules (you don't have to follow these if you don't want to):
	 - All new selectors go on a new line, regardless of whether they are grouped or not, e.g.
	 	.foo { color: #000; }
	 	.bar,
	 	.baz { color: #f00; }
	  - Everything should be lowercase, including hex values, e.g. use #fa02f4 instead of #FA02F4
	  - There should be a space before and after every brace (these things {}) and after every colon and semi-colon. The only exception to this rule is that the closing brace not needing a space following it.
	  - Classes and ID's should be named with dashes seperating words, e.g. .this-is-an-example {  }
	  - Property: Value; pairs should all be on the same line unless there are more than 7/8 property: value; pairs (this is at your discretion)
	  - When property: value; pairs reach over the one line limit write them as so:
	  	.example {
	  		background: #000;
	  		color: #fff;
	  		font-weight: bold;
	  		position: relative;
	  		z-index: 1000;
	  		etc.
	  	}
	  - Property: Value; pairs should be alphebatised according to the property (for an example see above).
	  - All property value pairs should end with a semi-colon, regardless of whether they are the last/only rule in their declaration.

  	General tips:
  	 - Use classes over ID's wherever possible
  	 - Use OOCSS providing it doesn't make a project more complicated than need be
  	 - Any more?