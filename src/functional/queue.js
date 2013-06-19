var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    for (var i = 0; i< arguments.length; i++){
      storage[size] = arguments[i];
      size +=1;
    }
    return value;

  };

  queue.dequeue = function(){
    // obj[Object.keys(obj)[0]]
  };

  queue.size = function(){
    return size;
  };
  queue.display = function(){
    for(var key in storage){
      console.log(key +':'+ storage[key]);
    }
  };
  return queue;
};
