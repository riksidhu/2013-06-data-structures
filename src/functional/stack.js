var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    //console.log(arguments);
    for(var i = 0; i< arguments.length; i++){
      storage[size] = arguments[i];
      size += 1;
    }
  };

  stack.pop = function(noOfItems){
    if (size > 0) {
      noOfItems = noOfItems || 1;
      var returnValue =[];
      for(var i = 0; i< noOfItems; i++){
        returnValue.push(storage[size - 1]);
        delete storage[size - 1];
        size -= 1;
      }
      return returnValue;
    } else {
      return 0;
    }
  };

  stack.size = function(){
    return size;
  };

  stack.display = function() {
    for (var key in storage) {
      console.log(key + ": " + storage[key]);
    }
  };
  stack.getTop = function(){
    return storage[size-1];
  };
  return stack;
};
