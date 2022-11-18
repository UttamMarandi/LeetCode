// Inheritence in prototype is totally different from other languages.

// Simple answer
// Inheritence in javascript is the way of acessing an object's keys or functions by another object.
{
  let arr = ["Uttam", "Aditya"];
  console.log(arr.length);

  let object2 = {
    name: "Uttam",
    city: "Baripada",
    getIntro: function () {
      console.log(`${this.name} from ${this.city}`);
    },
  };

  function fun() {
    console.log("Function called");
  }

  // How an array or objects have access to various in-built funcitons.
  // They have access of these in built functions and properties due to inheritence.
  // When you create an array , it attaches an object to your array.
  // We can access these functions and objects using __proto__ key.
  // arr.__proto__ and arr.prototype gives the same object

  // Interesting thing is if obj.__proto__ object has also it's own __proto__ key. Thah is the Object.prototype

  // Example In case of array:
  // arr.__proto__ // array prototype
  // arr.__proto__.__proto__ // object protoype i.e Object.prototype
  // arr.__proto__.__proto__.__proto__ // null

  // Examaple : In case of object
  // object2.__proto__  // object protoype i.e Object.prototype
  // object2.__proto__.__proto__ // null

  // Example : In case of object
  // fun.__proto__ // function prototype
  // fun.__proto__.__proto__ // object prototype i.e Object.prototype
  // fun.__proto__.__proto__.__proto__ // null

  //  We have heard that everything in a js is an object.
  // This is because most of the elements in js like arrays and functions are inherited from object prototype
}

{
  let object1 = {
    name: "Uttam",
    city: "Baripada",
    getIntro: function () {
      console.log(`${this.name} from ${this.city}`);
      return `${this.name} from ${this.city}`;
    },
  };

  let object2 = {
    name: "Sanjay",
  };

  // Never do this

  object2.__proto__ = object1;
  // object2.__proto__ is referring to Object.prototype

  // Now object.__proto__ refers to the object1

  console.log(object2.name);

  console.log(object2.city); // but city key is not defined in object2.
  // When we assigned object1 as the object2.__proto__ value , object2 now has access to the object1 keys also. But not recommended b.c we now don't have access to predefined keys of Object.prototype

  // So, how this works is while trying to access a key of an object or emelemt of an array,
  //first js will check its own keys. if not found  then it will go to .__proto__ object and
  // try to find value there. If there also not found , then .__proto__.__proto__
  // This is called protypical inheritance
  console.log(object1.getIntro());
  console.log(object2.getIntro());
  // object2.getIntro() will return Sanjay from Baripada
  // b.c this keywoked first searched for the name key in object2 , which it finds. So it logs name.
  // But city property is not found in object2. So it goes to the prototype chain and finds the
  // city property there. Hence logs Baripada.
}

{
  Function.prototype.myBind = function () {
    console.log("Uttam");
  };

  function fun() {
    fun.__proto__.myBind(); //myBind gets stored in prototype object
  }
  //   function fun2() {
  //     fun.prototype.myBind(); // logs error.
  // Doubt => to attach a function we use prototype object
  // to access a function we use __proto__ object
  //   }
  //   fun2(); // logs uttam.
}
