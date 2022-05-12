import mongoose from "mongoose"
import Exchange from "../src/models/exchange.js";
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../index.js'
let should = chai.should();


chai.use(chaiHttp);

describe('EXCHANGE API TESTS', () => {
  beforeEach((done) => {
    Exchange.remove({}, (err) => {
      done();
    });
  });

  describe('/POST exchange', () => {

    it('it should create an exchange', (done) => {

      let exchange = {
        type: "exchange",
        status: "approved",
        from: "BTC",
        to: "USD",
        amount1: "12",
        amount2: "31223221",
      }
      chai.request(server)
        .post('/api/v1/exchange')
        .send(exchange)
        .end((err, res) => {

          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Exchange was successfully created');
          res.body.newExchange.should.have.property('type');
          res.body.newExchange.should.have.property('status');
          res.body.newExchange.should.have.property('from');
          res.body.newExchange.should.have.property('to');
          res.body.newExchange.should.have.property('amount1');
          res.body.newExchange.should.have.property('amount2');
          res.body.newExchange.should.have.property('createdAt');

          done();
        });
    });
  });

  describe('/GET exchanges', () => {
    it('it should GET all the exchanges', (done) => {
      chai.request(server)
        .get('/api/v1/exchange')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.results.should.be.a('array');
          res.body.results.length.should.be.eql(0);
          done();
        });
    });
  });


  describe('/PUT/:id exchange', () => {
    it('it should update an exchange given an id', (done) => {
      let exchange = new Exchange({ 
        type: "exchange",
        status: "approved",
        from: "BTC",
        to: "USD",
        amount1: "12",
        amount2: "31223221",
        createdAt: new Date().toISOString()
       })
      exchange.save((err, exc) => {
        chai.request(server)
          .put('/api/v1/exchange/'+ exc.id)
          .send({ 
            type: "exchange",
            status: "approved",
            from: "BTC",
            to: "USD",
            amount1: "12",
            amount2: "31223221",
            
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.should.have.property('message').eql('exchange updated');
            // res.body.exchange.should.have.property('emailAddress').eql("john@email.com");
            done();
          });
      });
    });
  });

  describe('/DELETE/:id exchange', () => {
    it('it should delete a exchange given an id', (done) => {
     
      let exchange = new Exchange({ 
            type: "exchange",
            status: "approved",
            from: "BTC",
            to: "USD",
            amount1: "12",
            amount2: "31223221",
            createdAt: new Date().toISOString()
       })
      exchange.save((err, exc) => {
        chai.request(server)
          .delete('/api/v1/exchange/'+exc.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Exchange was successfully deleted');
            done();
          });
      });
    });
  });
});