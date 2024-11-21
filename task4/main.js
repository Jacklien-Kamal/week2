//1- Arrow Function


function fun(){
    return 1
}

const arrowFun=()=>1



console.log(arrowFun());


const books = [{title:'book1',salary:'120$'},{title:'book2',salary:'100$'}];


const myBooks = books.map(
    
    function (book) {
    return book.title
});
console.log(myBooks); 


const myBooks2 = books.map(
    book =>book.title
);
console.log(myBooks2); 



//2- bakticks

const name = 'Alice';
const age = 25;

const message1 = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

const message2 = `Hello, my name is ${name} and I am ${age} years old.`;



console.log(message2); 


//3- spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]; //[1,2,3,4,5,6]
console.log(arr3); 


