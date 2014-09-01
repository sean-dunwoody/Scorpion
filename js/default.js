// Remove the 'no-js' class on the <html> element to show the user has javascript enabled
document.getElementsByTagName('html')[0].classList.remove('no-js');

/* Add  class to the body whilst scrolling
	http://www.thecssninja.com/javascript/pointer-events-60fps */
var body = document.body,
    timer;

window.addEventListener('scroll', function() {
	clearTimeout(timer);
	if(!body.classList.contains('disable-hover')) {
		body.classList.add('disable-hover')
	}

	timer = setTimeout(function(){
		body.classList.remove('disable-hover')
	},100);
}, false);

/* Responsive Nav */
var nav = responsiveNav("#nav-container", {
    animate: true,        // Boolean: Use CSS3 transitions, true or false
    transition: 250,      // Integer: Speed of the transition, in milliseconds
    label: "Menu",        // String: Label for the navigation toggle
    insert: "after",      // String: Insert the toggle before or after the navigation
    customToggle: "",     // Selector: Specify the ID of a custom toggle
    openPos: "relative",  // String: Position of the opened nav, relative or static
    jsClass: "js"        // String: 'JS enabled' class which is added to <html> el
});