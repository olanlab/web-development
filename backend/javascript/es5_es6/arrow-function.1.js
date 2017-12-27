// OLD WAY STYLE --------------------------------------------------------
var greet1 = function (firstname, lastname) {
    return firstname + ' ' + lastname
}
var name = greet1('Olan', 'Samritjiarapon')
console.log(`greet1| ${name}`);
// ARROW FUNCTION -------------------------------------------------------
var greet2 = (firstname, lastname) => {
    return firstname + ' ' + lastname
}
console.log(`greet2| ${greet2('Seen', 'Vechprasit')}`);
// ----------------------------------------------------------------------
var greet3 = (firstname, lastname) => firstname + ' ' + lastname
console.log(`greet3| ${greet3('Gamer', 'Soney')}`);


