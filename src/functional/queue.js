var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    if (value){
      for (var i = 0; i< arguments.length; i++){
        storage[size] = arguments[i];
        size +=1;
      }
      return value;
    } else {
      return 0;
    }
  };

  queue.dequeue = function(noOfItems){
    noOfItems = noOfItems || 1;
    var arr = [];
    for(var i = 0; i< noOfItems; i++){
      arr.push(storage[Object.keys(storage)[0]]);
      delete storage[Object.keys(storage)[0]];
    }
    return arr;
  };

  queue.getFirst = function(items){
    items = items || 0;
    if  (items){
      var arr = [];
      for(var i =0; i< items; i++ ){
        arr.push(storage[Object.keys(storage)[i]]);
      }
      return arr;
    } else {
      if (size > 0) {
        return storage[Object.keys(storage)[0]];
      } else {
        return 0;
      }
    }
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
