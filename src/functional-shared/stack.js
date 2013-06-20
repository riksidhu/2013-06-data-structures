var makeStack = function(){
  // Hey! Copy your code from src/functional/stack.js and paste it here
  // Implement the methods below
  var stack = {};
  stack._storage = {};
  stack._size = 0;
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
    this._storage[this._size] = arguments[i];
    this._size += 1;
  }
};

sharedStackMethods.pop = function(noOfItems){
  if (this._size > 0) {
    noOfItems = noOfItems || 1;
    var returnValue =[];
    for(var i = 0; i< noOfItems; i++){
      returnValue.push(this._storage[this._size - 1]);
      delete this._storage[this._size- 1];
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
  for (var key in this._storage) {
    console.log(key + ": " + this._storage[key]);
  }
};
sharedStackMethods.getTop = function(){
  return this._storage[this._size-1];
};