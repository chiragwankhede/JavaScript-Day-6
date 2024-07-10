console.log("HEllo");

//  this target depend on context, here this is targetting global/window object
this.a= 5;

console.log(this);

// (Normal Function) -  here this is targeting to its parent object. 

const details = {
    name: "Chirag",
    age: 20,
    myself (){
        console.log(this.name);
    }
};

details.myself();

// (Normal Function) - here, inside nested object this will target to its immediates parent object, not global object

const info = {
    nam : "Chiru",
    age : 30,
    childObj: {
        newname : "Chiru Bhai",
        myname(){
            console.log(this.newname, this.nam);
        }
    }
};

info.childObj.myname();

// (Arrow Function) inside an object points to global/window object.


let user1 = {
    name1: "Chiruuuu bhai",
    age: 40,
    myself1 :() => {
        console.log(this.name1);
    }
}

user1.myself1();

// (Arrow Function) inside nested normal function, will inheriate the value from the object of the normal function.

let user2 = {
    name2: "dhiru Bhai",
    age: 50,
    myself2 (){
        const details1 = () => {
            console.log(this.name2);
        }
            details1();
        
    }
};

user2.myself2();
 