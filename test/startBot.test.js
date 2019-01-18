const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('App', () => {
    before( ()=>{
    });
    //this.timeout(15000);

    describe('/start_bot', () => {
        it('shoud start the bot and get ok', function (done) {
            chai.request(server)
                .post(`/start_bot`)
                .send({chat: {id:111}})
                .end(function (err, res) {
                    //console.log(res.body);
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});