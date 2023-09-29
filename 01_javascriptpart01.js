/************************ JavaScript part01 ************************/
/************************ console ************************/
// Code written in console is not permenant
// Console use's REPL (Read evaluate print loop)

/************************ variable ************************/
// A variable is simply the name of a storage location

// a = 10;
// b = 5;
// age = 23;
// name = "Tony";
// console.log(a + b);

/************************ DataTypes ************************/
// a = 25;
// console.log(typeof a);
// typeof use to check typeof given variable.

// name = "Tony";
// console.log(typeof name);

// c = 5.9;
// console.log(typeof c);

/************************ numbers ************************/

// Positive (14) & negative (-4)
// Integers(45, -50)
// Floating numbers - with decimal (4.6, -8.9)

// price = 4.0200;
// console.log(typeof price);

/************************ Operators ************************/
// Division operators gives Quotient
// Modulo  operator gives Remained
// Mainly Modulo operator is used to find even/odd numbers, if number is completely divisible then its even or else its odd.
// Exponentiation is also know as power operator 3**4 = 81 (3to the power 4 ie 3*3*3*3 = 81)

// a = 9;
// b = 2;
// sum = a + b;
// sub = a - b;
// mul = a * b;
// div = a / b;
// mod = a % b;
// console.log('sum = ' + sum);
// console.log('sub = ' + sub);
// console.log('mul = ' + mul);
// console.log('div = ' + div);
// console.log('mod = ' + mod);

/************************ NaN(Not a Number) in js ************************/
// In JavaScript, NaN is a number that is not a legal(valid) number.
// The NaN global property is a value representing Not-A-Number.

// console.log(0/0);
// console.log(typeof NaN);

// Example:- User wants to ckeck temperature of xyz place, but because of some reason server can't fetch the result so it will show NaN, because server can't show 0(zero) because 0(zero) is also a temperature.

/************************ Operator Precendence in JS ************************/
// This is the general order of solving an expression. 
// Precendence means priority 
// like case 1:- 2+2*5 = 12, case 2:- (2+2)*5 = 20, case 3:- 3+3/6 = 3.5 and case 4:- (3+3)/6 = 1

// In first case Js did 2*5 ie 10 then addition of 2 ie 12
// In second case we specified which part should calculate first ie with bracket we told bracket what should be done first then remaning part. ie 2+2 = 4 then 4*5 = 20.
// In third case 3+3/6 = 3.5 JS did 3/6 = 0.5 then added 3 so total is 3.5.
// In fourth case (3+3)/6 = 1 by using operator precedence we specified program should do first then the division part, So output is 1.

// Its like BODMAS Rule first when should do calculation of bracket part then power of then multiplication then division then addition then followed by substraction.
// () -> first then
// ** -> second then
// *,/,% -> all three has same precedence here we go from left to right then
// +,- -> both has same precedence here we go from left to right 

// ie if have to calculate (5+2)/3+1*2 by BODMAS Rule then answer will be 5+2 =7 then 7/3 = 2.3333333333333335 then 1*2 = 2 then 2.3333333333333335 + 2 = 4.666666666666667

//for more click here for mdn docs:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

/************************ let keyword in JS ************************/
//Syntax of declaring variables
//Anything declared using let variable are change-able;

// let dob = 23;
// dob = dob + 1;
// console.log(dob);

/************************ const keyword in JS ************************/
// values of constants can't be changed with re-assignment & they can't be re-declared.

// const DOY = 1993;
// DOY = DOY + 1;
// console.log(DOY);// Error:- Assignment to constant variable.

/************************ var keyword in JS ************************/
// Old syntax of writing variable.
// Var has problem with scope etc.
// Not recommended to use var keyword.

/**************************** Practice Qs ****************************/
// What is the value of age after the code runs?
// let age = 23;
// age + 2;
// console.log(age); // OP:- 23. because we added 2 but we dosent stored the value

// What is the value of avg after this code runs?
// let hindi = 80;
// let english = 90;
// let math = 100;
// let avg = (hindi + english + math) / 3;
// console.log(avg); // OP:- 270/3 = 90

/**************************** Assignment Operator ****************************/
// let age = 23;
// age+=1
// console.log(age); // 24 Because age+=1, means age = current value + 1;

/**************************** Unary Operator ****************************/

//age++ // increment operator increment by 1
//age-- // decrement operator decrement by 1

// age++ Post-increment and ++age Pre-increment both are increment operator but age++ will first print then increment where as ++age will increment then print.
// age-- Post-decrement and --age Pre-decrement both are decrement operator but age-- will first print then decrement where as --age will decrement then print.

// let age = 25; 
// console.log(age++); // 25
// console.log(age); // 26
// console.log(++age); // 27
// console.log(age); // 27

// let x = 5;
// console.log(x++); // Output is 5 because first printed then incremented.

// let y = 5;
// console.log(++y); // Output is 6 because first incremented then printed.

/**************************** Practice Qs ****************************/
// What is the value of each variable in each line of code?
// let num = 5; //5
// let newNum = num++; // 5
// console.log(newNum);
// newNum = ++num; // 7
// console.log(newNum);

/**************************** Identifier Rules ****************************/