This is an exemplary description
and there should be no line break before this line.

But in front of this line, there should be a line break
because we interpret the double newline in the source as one.
<p>
The single p-tag should force this to be preceded by a line
break as well.
<p>
Wrapping in p-tags with closing tag should be possible, too,
and make no difference to the single p-tag ...
</p>
Except for this text which will have a line break
before, of course.



**Param**:   one    the first parameter (without a type)


  {int}     two the second parameter (with a type)


  {MyNoun}  three the third parameter (custom object)
         second line for third parameter


**Return**:  {string} some arbitrary return value


**Author**:  John Doe (john.doe@example.org)


 Jane Doe (@jane)


**License**:      GPL


**Since**:        1.0


**See**:          otherFunc


Comments that do not precede any function, class or variable are ignored


You can document "classes" as well (and docs may have wrong indentation)


**Var**:  {string} shows that you can give type annotations


