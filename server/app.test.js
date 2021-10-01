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
            console.log(res);
            // const result = res.body.data;
            res.should.have.status(200);
            // result.should.be.a('object');
            res.body.should.be.a('array');
            res.body[0].userId.should.be.a('number');
            res.body[0].userId.should.be.equal(1);
            done();
        });
    });
});