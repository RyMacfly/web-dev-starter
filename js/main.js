window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}
/**
 * This function hadels the button click to send a alert and
 * returns the string 'hello'
 * @return {string} the string hello
 */
function handleClick() {
    alert('Howdy!');
    return 'hello';
}

//adds event listener to button
document.getElementById('myButton').addEventListener('click', handleClick);