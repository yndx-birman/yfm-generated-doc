/**
 * This is an exemplary description
 * and there should be no line break before this line.
 *
 * But in front of this line, there should be a line break
 * because we interpret the double newline in the source as one.
 * <p>
 * The single p-tag should force this to be preceded by a line
 * break as well.
 * <p>
 * Wrapping in p-tags with closing tag should be possible, too,
 * and make no difference to the single p-tag ...
 * </p>
 * Except for this text which will have a line break
 * before, of course.
 *
 * @param  one    the first parameter (without a type)
 * @param  {int}     two the second parameter (with a type)
 * @param  {MyNoun}  three the third parameter (custom object)
 *          second line for third parameter
 * @return {string} some arbitrary return value
 * @author John Doe (john.doe@example.org)
 * @author Jane Doe (@jane)
 * @license     GPL
 * @since       1.0
 * @see         otherFunc
 */
function myFunc(one,
        two,
        three) {
// do something
}

/**
* Comments that do not precede any function, class or variable are ignored
*/

/**
* You can document "classes" as well (and docs may have wrong indentation)
*/
var MyClass = function () {

// some members and methods

}

/** The description may even be single-line and followed by a blank line */

function boringFunc()
{
return null;
}

/**
* @var {string} shows that you can give type annotations
*/
var i = 0;

/** @private */ var privateVariable = "";