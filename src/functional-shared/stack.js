var makeStack = function(){
  // Hey! Copy your code from src/functional/stack.js and paste it here
  //var storage = {};

  //var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};
  stack.storage = {};
  stack.stackSize = 0;
  stack.push = sharedStackMethods.push;
  stack.pop = sharedStackMethods.pop;
  stack.size = sharedStackMethods.size;
  stack.display = sharedStackMethods.display;
  stack.getTop = sharedStackMethods.getTop;
  return stack;
};

var sharedStackMethods = {};

sharedStackMethods.push = function(value){
  for(var i = 0; i< arguments.length; i++){
    this.storage[this.stackSize] = arguments[i];
    this.stackSize += 1;
  }
};

sharedStackMethods.pop = function(noOfItems){
  if (this.stackSize > 0) {
    noOfItems = noOfItems || 1;
    var returnValue =[];
    for(var i = 0; i< noOfItems; i++){
      returnValue.push(this.storage[this.stackSize - 1]);
      delete this.storage[this.stackSize- 1];
      this.stackSize -= 1;
    }
    return returnValue;
  } else {
    return 0;
  }
};

sharedStackMethods.size = function(){
  return this.stackSize;
};

sharedStackMethods.display = function() {
  for (var key in this.storage) {
    console.log(key + ": " + this.storage[key]);
  }
};
sharedStackMethods.getTop = function(){
  return this.storage[this.stackSize-1];
};