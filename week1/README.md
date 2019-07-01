# week1

## Regular expression

### Definition:
**Regular Expression** is a sequence of characters or patterns used to to match character combinations in strings and also it is an object.

**Pattern:** Things happening in an order repeatedly.

## For what purpose do we use it:
We used it to search, edit,vaildate input and manipulate string.

## how to create a RegExp?

###  There are two ways to create a RegExp:
- **first:** pregular expression literal,which is a pattern enclosed between slashes, as follows:
var re = /ab+c/;
this way provide compilation of the regular expression when the script is loaded.

- **Second:** calling the constructor function of the RegExp object, as follows:
var re = new RegExp('ab+c');
this way provides runtime compilation of the regular expression. that's mean 

### Syntax:
/pattern/modifiers

### Example
var patt = /regularexp/i;

## Regular Expression Modifiers
i relate for case-insensitive
g relate for global match
m relate for multiline matching

### Example
string s = "\nIs th\nis it?"
var allModifiers = /is/igm;

### Output:\
 Is,is


##Regular Expression Patterns:
We use Brackets to find a range of characters:
[abc]
[0-9]


### Metacharacters
\d	Find a digit	
\s	Find a whitespace character	
\b  Find a match at the beginning of a word 

n+	Matches any string that contains at least one n
n* 	Matches any string that contains zero or more occurrences of n


## Example for +
var str = "Hellooo World! Hello W3Schools!"; 
var patt1 = /lo+/g;
var result = str.match(patt1);
## output:
looo,lo
## Example for *
var str = "Hellooo World! Hello W3Schools!"; 
var patt1 = /lo*/g;
 var result = str.match(patt1);
## output:
l,looo,l,l,lo,l



### Reg Exp Methods;

test() :returns boolean

var patt = /e/;
patt.test("The best things in life are free!");


exec(): returns object


String Methods:

match()
matchAll()
search()
replace()
split()


https://regex101.com
