describe("stack", function() {
  var stack;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Stack
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });
  /* END DO NOT MODIFY */

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('should add pushed items to the top of the stack', function() {
    // Fill out the body of the test here
    // add 1 to size
    // add the new item to the stack
    stack.push("test");
    expect(stack.size()).to.equal(1);
    stack.push("hi");
    expect(stack.getTop()).to.equal("hi");
  });

  it('should remove popped items from the top of the stack', function() {
    // Fill out the body of the test here
    stack.push("test");
    stack.push("hi");
    stack.pop();
    expect(stack.getTop()).to.equal("test");
  });

  it('should push and pop multiple items in the right order (LIFO)', function() {
    // Fill out the body of the test here
    // stack.push("test", "hi") ==> storage {0: 'test', 1: 'hi'}
    stack.push("test", "hi", 5);
    expect(stack.getTop()).to.equal(5);
    stack.pop(2);
    expect(stack.getTop()).to.equal("test");
  });

  it('should not error when popping from an empty stack', function() {
    // Fill out the body of the test here
    expect(stack.pop()).to.equal(0);
  });

  // Hey! Add more tests here if you can think of ways to test your stack more thoroughly
});
