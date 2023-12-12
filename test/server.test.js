const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server'); 

describe('GET /clima', function() {
    it('Esta api responde con un json con el conteniendo el clima, para los muchachos del tp-10', function(done) {
      request(app)
        .get('/clima')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done); 
    });
  });
  
