const helloWorld = require('./index');

test('returns Hello World', () => {
  expect(helloWorld()).toBe('Hello, World!');
});
