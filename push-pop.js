
// /.....................push....................

var lastName=['Nasir','pallob','arif','bolto'];
lastName.push('jalto');
lastName.push('kalto');
console.log(lastName);

var friendage=[20,10,1,0,20,1,0];
friendage.push('100');
console.log(friendage);




// .................pop element ..........


var lastName=['Nasir','pallob','arif','bolto'];
lastName.pop();
lastName.pop();
console.log(lastName);

var friendage=[20,10,1,0,20,1,100];
var lastside = friendage.pop();
console.log(lastside);
console.log(friendage);
// .................shift............ 
var lastName=['Nasir','pallob','arif','bolto'];
lastName.shift();
lastName.shift();
console.log(lastName);

// ...........unshift............... 

var lastName=['Nasir','pallob','arif','bolto'];
lastName.unshift('kalto');
lastName.unshift('janto');
console.log(lastName);