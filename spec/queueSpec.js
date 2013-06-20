describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');

  });

  // Hey! Add tests here that thoroughly test the functionality of your queue
  it('should enqueue at the end of the queue', function() {
    expect(queue.enqueue("test")).to.equal("test");
    expect(queue.enqueue()).to.equal(0);
  });

  it('should enqueue multiple values', function () {
    queue.enqueue("test", "hi", 5);
    expect(queue.size()).to.equal(3);
  });

  it('should dequeue from the front of the queue', function () {
    queue.enqueue("test", "hi", 5);
    expect(queue.dequeue()).to.eql(["test"]);
  });

  it('should dequeue multiple values', function () {
    queue.enqueue("test", "hi", 5);
    expect(queue.dequeue(2)).to.eql(["test", "hi"]);
  });

  it('should get the first item in the queue', function () {
    queue.enqueue("test", "hi", 5);
    expect(queue.getFirst()).to.equal("test");
  });

  it('should get the first 3 items in the queue', function () {
    queue.enqueue("test", "hi", 5);
    expect(queue.getFirst(3)).to.eql(["test", "hi", 5]);
  });
});
