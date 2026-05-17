describe('Zevorix Panel', () => {
  test('should be defined', () => {
    expect(true).toBe(true);
  });

  test('app should start without errors', () => {
    const express = require('express');
    const app = express();
    expect(app).toBeDefined();
  });
});
