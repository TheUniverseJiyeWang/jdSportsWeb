const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');

const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET user', () => {
    it('it should Get all users', (done) => {
        chai.request(app)
        .get('/api/get')
        .end((err, res) => {
            res.should.have.status(200);
            // res.body.should.be.a('object');
            res.body.should.be.a('array');
            done();
        });
    });
});