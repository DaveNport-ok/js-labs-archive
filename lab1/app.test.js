import request from 'supertest';
import app from './app.js';

describe('Test API routes', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World');
    });

    test('GET /health should respond with status 200 and json', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: 'ok' });
    });
});