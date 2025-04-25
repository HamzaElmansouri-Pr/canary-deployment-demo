const request = require('supertest');
const app = require('../app/server');

describe('Test de l\'API GET /', () => {
  it('devrait retourner un message de bienvenue', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Bienvenue sur la version Canary 🚀');
  });
});
