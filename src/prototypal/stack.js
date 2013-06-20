var Stack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var stack = Object.create(sharedStackMethods);
  stack.storage = {};
  stack._size = 0;
  return stack;
};

var sharedStackMethods = {};

sharedStackMethods.push = function(value){
  for(var i = 0; i< arguments.length; i++){
    this.storage[this._size] = arguments[i];
    this._size += 1;
  }
};

sharedStackMethods.pop = function(noOfItems){
  if (this._size > 0) {
    noOfItems = noOfItems || 1;
    var returnValue =[];
    for(var i = 0; i< noOfItems; i++){
      returnValue.push(this.storage[this._size - 1]);
      delete this.storage[this._size- 1];
      this._size -= 1;
    }
    return returnValue;
  } else {
    return 0;
  }
};

sharedStackMethods.size = function(){
  return this._size;
};

sharedStackMethods.display = function() {
  for (var key in this.storage) {
    console.log(key + ": " + this.storage[key]);
  }
};
sharedStackMethods.getTop = function(){
  return this.storage[this._size-1];
};
