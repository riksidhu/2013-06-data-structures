var Stack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  //var stack = Object.create(sharedStackMethods);
  this.storage = {};
  this._size = 0;

  //return stack;
};

//var sharedStackMethods = {};

Stack.prototype.push = function(value){
  for(var i = 0; i< arguments.length; i++){
    this.storage[this._size] = arguments[i];
    this._size += 1;
  }
};

Stack.prototype.pop = function(noOfItems){
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

Stack.prototype.size = function(){
  return this._size;
};

Stack.prototype.display = function() {
  for (var key in this.storage) {
    console.log(key + ": " + this.storage[key]);
  }
};
Stack.prototype.getTop = function(){
  return this.storage[this._size-1];
};
