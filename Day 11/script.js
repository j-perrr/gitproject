'use strict';
// switch statements
const cup = 'Tea';

switch(cup)
{
    case 'Mocha' :
        console.log('Mocha is tasty');
        break;
    case 'Coffee' :
        console.log('I like coffee');
        break;
    case 'Tea':
        console.log('Tea originated in India');
        break;
}

const calRetireYears = function (pName, birthYear)
{
    const pAge = 2022 - birthYear;
    const diffAge = 16 - pAge;

    if(diffAge > 0 && diffAge < 3)
    {
        const resultMsg = `You are not 16 yey, wait for another
        ${diffAge}`
        return resultMsg;
    }else if(diffAge > 3)
    {
        console.log(`You are too young to get a driver license`);
        return -1;
    }

    return `${pName} is ${pAge} years old...`;
}

// arrays:

const scores = [100, 82,80,60,100,82];

console.log(scores)

function getFinalBill()
{
    const bill = [];
    bill.push();
}

//OBJECT
const John = 
[
    'John', 
    'Smith',
    'john@gmail.com',
    1996,
    2022-1996
]

//object
const johnObj = 
{
    firstName:'John', 
    lastName: 'Smith',
    email: 'john@gmail.com',
    birthYear: 1996,
    friends: ['Peter', 'Jack', 'Harry'],
    calAge: function ()
    {
        let age = 2022 - this.birthYear;
        return age;
    }
}

johnObj.address = '101 columbia ave';

// console.log(johnObj);
console.log(johnObj.calAge());

for( let i = 1; i <= 10; i++)
{
    console.log(`Coffee order # ${i}`);
}