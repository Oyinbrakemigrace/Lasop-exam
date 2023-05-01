// Javascript Part A

// 1. console.log(Math.floor(Math.random()*256))

/* 2. const today = new Date()

        1. const yearToday= today.getFullYear()
console.log(yearToday)

        2. const monthToday = today.getMonth() + 1           I added +1 simply because JS counts months from index 0
console.log(monthToday)

        3. const dateToday = today.getDate()
console.log(dateToday)

        4. const dayToday = today.getDay()
console.log(dayToday)

        5. const hoursNow = today.getHours()
console.log(hoursNow)

        6. const minutesNow = today.getMinutes()
console.log(minutesNow)

        7. const numOfSecs = today.getTime()/1000
console.log(numOfSecs)
*/

// 3. 
/*
const now = new Date()

const currentYear = now.getFullYear()

const userDob = prompt("What year were you born?")
const age = currentYear - userDob

if(age >= 18){
    alert('Congrats! You are fit to drive.')
}
else{
    const yearsToWait = 18 - age
    alert('You are ' + age + ' years old. You have to wait for ' + yearsToWait + ' years before you can drive.')
}
*/

// 5
    /* 
    let userInput = prompt('Enter your age here.')
    if(userInput >= 18){
        alert('You are old enough to drive')
    }else{
        let yearsToWait = 18 - userInput
        alert('You have to wait for ' + yearsToWait + ' years before you turn 18 and be eligible to drive.')
    }*/

    // 6
    /* 
    let yourAge = prompt('Enter your age')
    let myAge = prompt('Enter my age')

    if(myAge > yourAge){
        alert('I am older')
    }else{
        alert('You are older')
     } */

// 7
    /* Using Ternary operator
let a = 20
let b = 50

let result = a>b ? 'a is greater than b' : 'a is less than b'
console.log(result)

    Using if and else
let a =30
let b = 20
let ans;

if(a>b){
    ans = 'a is greater than b'
}
else{
    ans = 'a is less than b'
}
    */

// 8
/*
let number = 100

    if(number%2===0){
        console.log(number + ' is an even number.')
    }else{
        console.log(number + ' is an odd number.')
    }*/







    // Javascript Part B

// 1
    /*let score = 99

    if( score >= 80 && score<=100){
    console.log('A')
    }else if( score >= 70 && score <= 89){
    console.log('B')
    }else if( score >= 60 && score <= 69){
    console.log('C')}
    else if( score >= 50 && score <= 59){
    console.log('D')}
    else if( score >= 0 && score <= 49){
    console.log('F')} */

// 2
/*let month = 'October'

if(month === 'September'|| month === 'October' || month === 'November'){
    console.log('The season is Autumn')
}else if(month === 'December'|| month === 'January' || month === 'February'){
    console.log('The season is Winter')
}else if(month === 'March'|| month === 'April' || month === 'May'){
    console.log('The season is Spring')
}else if(month === 'June'|| month === 'July' || month === 'August'){
    console.log('The season is Summer')
}*/

/*4
let sum = 0

for (let i = 0; i <= 100; i++){
    console.log(sum+= i)
}*/

/*5
let sumOfEven = 0;
let sumOfOdd = 0;

for (let i = 0; i <= 100; i++) {
i % 2 === 0 ? (sumOfEven += i) : (sumOfOdd += 1);
}

console.log(sumOfEven, sumOfOdd)*/

/*6

let sumOfEven = 0;
let sumOfOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEven += i;
  } else {
    sumOfOdd += i;
  }
}
console.log([sumOfEven, sumOfOdd]);





// JAVASCRIPT PART C
// 7
// const shoppingCart=['Milk','Coffee','Tea','Honey']

        //1 shoppingCart.unshift('Meat')

        //2 shoppingCart.push('Sugar')

        //3 shoppingCart.pop()

        //4 shoppingCart[2] = 'Green Tea'

/*
9

const frontEnd=['HTML','CSS','JS','React','Redux']
const backEnd=['Node','Express','MongoDB']

const fullstack = frontEnd + backEnd
console.log(fullstack)*/



// PYTHON
/*
2.
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))

area = length * width
perimeter = 2 * (length + width)

print("Area of the rectangle:", area)
print("Perimeter of the rectangle:", perimeter)*/

/*
3
radius = float(input("Enter the radius of the circle: "))

pi = 3.14
area = pi * radius * radius
circumference = 2 * pi * radius

print("Area of the circle:", area)
print("Circumference of the circle:", circumference)

*/

/*
7

ages = [22, 19, 24, 25, 26, 24, 25, 24]

ages_set = set(ages)

if len(ages) > len(ages_set):
    print("The list is bigger than the set.")
elif len(ages) < len(ages_set):
    print("The set is bigger than the list.")
else:
    print("The list and the set have the same length.")*/


// 8
// Strings are characters enclosed in quotes
// A list is a sequence of values enclosed in a square bracket. it is mutable.
// Tuple is a sequence of values enclosed in a square bracket. it is immutable.
// Set is a collection of unique values, enclosed in curly braces. it can be mutable but not duplicated


// 12
/*
numbers = [-4, -3, -2, -1, 0, 2, 4, 6]

filteredNumbers = [num for num in numbers if num <= 0]

print(filteredNumbers)*/
