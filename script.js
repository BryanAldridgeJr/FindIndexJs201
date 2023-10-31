//Use a do...while loop to console.log the numbers from 1 to 1000

for (let x = 1; x <= 1000; x ++){
    console.log(x);
};

//Create an object (with keys and values) called person with the following data:

const person = {firstName: "Jane", lastName: "Doe", birthDate: "Feb 5, 1925", gender: "female"};

//Create a function that logs out the keys of the object using Object.keys()

console.log(Object.keys(person));

//Create a function that logs out the keys and values of the object using Object.entries().

console.log(Object.entries(person));

//Create an arrayOfPersons that contains multiple "people" objects.

const arrayOfPersons = [
    {firstName: "Jane", lastName: "Doe", birthDate: "Feb 5, 1924", gender: "female"}, 
    {firstName: "Rob", lastName: "Noe", birthDate: "Jan 5, 1959", gender: "male"},
    {firstName: "Jill", lastName: "Roe", birthDate: "Mar 5, 2004", gender: "female"}, 
    {firstName: "Jake", lastName: "Koe", birthDate: "July 5, 1925", gender: "male"}
]

//Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.

for (let person of arrayOfPersons) {
    const birthYear = new Date(person.birthDate).getFullYear();
    if (birthYear % 2 !== 0) {
        console.log(person.birthDate);
    }
}

//Use .map() to map over the arrayOfPersons and console.log() their information.

arrayOfPersons.map(person => {
    console.log(`Name: ${person.firstName} ${person.lastName} Birth Day: ${person.birthDate} Gender: ${person.gender}`)
})

//Use .filter() to filter the persons array and console.log 0only males in the array.

var filterMale =  arrayOfPersons.filter(function(arrayOfPerson) {
    return arrayOfPerson.gender == "male";
    
});
  
console.log(filterMale);

//Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const isBefore1990 = (birthDate) => {
    const date = new Date(birthDate);
    const comparisonDate = new Date('January 1, 1990');
    
    return date < comparisonDate;
};

console.log(isBefore1990('Feb 5, 1924')); 
console.log(isBefore1990('Jan 5, 1959')); 
console.log(isBefore1990('Mar 5, 2004')); 
console.log(isBefore1990('July 5, 1925')); 

//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

var before91 =  arrayOfPersons.filter(function(person) {
    return isBefore1990(person.birthDate);
    
});
  
console.log(before91);

//BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.


function isAtLeast21YearsAgo(date) {
    const currentDate = new Date();
    const comparisonDate = new Date(date);
    
    comparisonDate.setFullYear(comparisonDate.getFullYear() + 21);
    
    return comparisonDate <= currentDate;
};

var atLeast21YearsOld = arrayOfPersons.filter(function(person) {
    return isAtLeast21YearsAgo(person.birthDate);
});
  
console.log(atLeast21YearsOld);

//BONUS - .filter() out the people in the array who are younger than 21.

var not21 = arrayOfPersons.filter(function(person) {
    return !isAtLeast21YearsAgo(person.birthDate);
});
  
console.log(not21);