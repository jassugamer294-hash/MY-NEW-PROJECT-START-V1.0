describe('Zevorix MC Panel', () => {
  const app = require('../index.js');

  test('should be defined', () => {
    expect(app).toBeDefined();
  });

  test('app should be an Express instance', () => {
    expect(typeof app).toBe('function');
  });

  test('Express app should be properly configured', () => {
    expect(app._router).toBeDefined();
  });
});
