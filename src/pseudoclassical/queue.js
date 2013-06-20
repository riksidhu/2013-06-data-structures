var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it her
  this._storage = {};
  this._size = 0;
};

Queue.prototype.enqueue = function(value){
    if (value){
      for (var i = 0; i< arguments.length; i++){
        this._storage[this._size] = arguments[i];
        this._size +=1;
      }
      return value;
    } else {
      return 0;
    }
  };

  Queue.prototype.dequeue = function(noOfItems){
    noOfItems = noOfItems || 1;
    var arr = [];
    for(var i = 0; i< noOfItems; i++){
      arr.push(this._storage[Object.keys(this._storage)[0]]);
      delete this._storage[Object.keys(this._storage)[0]];
    }
    return arr;
  };

  Queue.prototype.getFirst = function(items){
    items = items || 0;
    if  (items){
      var arr = [];
      for(var i =0; i< items; i++ ){
        arr.push(this._storage[Object.keys(this._storage)[i]]);
      }
      return arr;
    } else {
      if (this._size > 0) {
        return this._storage[Object.keys(this._storage)[0]];
      } else {
        return 0;
      }
    }
  };

  Queue.prototype.size = function(){
    return this._size;
  };
  Queue.prototype.display = function(){
    for(var key in this._storage){
      console.log(key +':'+ this._storage[key]);
    }
};
