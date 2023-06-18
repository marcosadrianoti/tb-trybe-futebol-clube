import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

// import userMock from './mocks/userMock';
import matchesMock from './mocks/matches.mock';
import { token } from './mocks/logins.mock'
import * as jwt from '../utils/jwt';

import { app } from '../app';

import { Response } from 'superagent';
import Match from '../database/models/SeqMatcheModel';
import RoleModel from '../models/RoleModel';
import SeqUserModel from '../database/models/SeqUserModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Role', () => {
  beforeEach(sinon.restore);
  it('Get role', async function(){
    sinon.stub(SeqUserModel, 'findOne').resolves({} as any);
    sinon.stub(jwt, 'verify').returns({
          username: 'Admin',
          email: 'admin@admin.com',
        })
    const { status, body } = await chai.request(app).get('/login/role')
    .set('authorization', token.token);;
    console.log('Body role =====>',body);
    
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({});
  })
  // it('Return matches in progress', async function(){
  //   sinon.stub(Match, 'findAll').resolves(matchesMock.matches as any);

  //   const { status, body } = await chai.request(app).get('/matches?inProgress=true');

  //   expect(status).to.be.equal(200);
  //   expect(body).to.be.deep.equal(matchesMock.matches);
  // })
  // it('Teste do requisito 16 false', async function(){
  //   sinon.stub(Match, 'findAll').resolves(mocks.matches as any);

  //   const { status, body } = await chai.request(app).get('/matches?inProgress=false');

  //   expect(status).to.be.equal(200);
  //   expect(body).to.be.deep.equal(mocks.matches);
  // })
  // it('Teste do requisito 17', async function(){
  //   sinon.stub(Match, 'update').resolves();
  //   sinon.stub(jwt, 'verify').returns({
  //     username: 'Admin',
  //     email: 'admin@admin.com',
  //   })

  //   const { status, body } = await chai.request(app)
  //   .patch('/matches/2/finish')
  //   .set('authorization', token.token);

  //   expect(status).to.be.equal(200);
  //   expect(body).to.be.deep.equal({ message: 'finished' });
  // })
  // it('Macth must be updated', async function(){
  //   sinon.stub(Match, 'update').resolves();
  //   sinon.stub(jwt, 'verify').returns({
  //     username: 'Admin',
  //     email: 'admin@admin.com',
  //   })

  //   const { status, body } = await chai.request(app)
  //   .patch('/matches/2')
  //   .set('authorization', token.token)
  //   .send({
  //     "homeTeamGoals": 1,
  //     "awayTeamGoals": 1,
  //   });

  //   expect(status).to.be.equal(200);
  //   expect(body).to.be.deep.equal({ message: 'Updated match' });
  // })
  // it('New macth can be posted', async function(){
  //   sinon.stub(Match, 'create').resolves({dataValues: {
  //     "id": 49,
  //     "homeTeamId": 16,
  //     "awayTeamId": 8,
  //     "homeTeamGoals": 2,
  //     "awayTeamGoals": 2,
  //     "inProgress": true
  //   }} as any);
  //   sinon.stub(jwt, 'verify').returns({
  //     username: 'Admin',
  //     email: 'admin@admin.com',
  //   })

  //   const { status, body } = await chai.request(app)
  //   .post('/matches')
  //   .set('authorization', token.token)
  //   .send({
  //     "homeTeamId": 16,
  //     "awayTeamId": 8,
  //     "homeTeamGoals": 2,
  //     "awayTeamGoals": 2,
  //   });
  //   expect(status).to.be.equal(201);
  //   expect(body).to.be.deep.equal({
  //     "id": 49,
  //     "homeTeamId": 16,
  //     "awayTeamId": 8,
  //     "homeTeamGoals": 2,
  //     "awayTeamGoals": 2,
  //     "inProgress": true
  //   });
  // })
  // it('Teste do requisito 21 com duplicidade nos times', async function(){
  //   sinon.stub(Match, 'create').resolves({dataValues: {
  //     "id": 49,
  //     "homeTeamId": 16,
  //     "awayTeamId": 8,
  //     "homeTeamGoals": 2,
  //     "awayTeamGoals": 2,
  //     "inProgress": true
  //   }} as any);
  //   sinon.stub(jwt, 'verifyToken').returns({ id: 1, role: 'admin'})

  //   const { status, body } = await chai.request(app)
  //   .post('/matches')
  //   .set('authorization', userMock.token)
  //   .send({
  //     "homeTeamId": 16,
  //     "awayTeamId": 16,
  //     "homeTeamGoals": 2,
  //     "awayTeamGoals": 2,
  //   });
  //   expect(status).to.be.equal(422);
  //   expect(body).to.be.deep.equal({ message: 'It is not possible to create a match with two equal teams' });
  // })
  // it('Teste do requisito 21 sem encontrar os times', async function(){
  //   sinon.stub(Match, 'findOne').resolves();
  //   sinon.stub(jwt, 'verifyToken').returns({ id: 1, role: 'admin'})

  //   const { status, body } = await chai.request(app)
  //   .post('/matches')
  //   .set('authorization', userMock.token)
  //   .send({
  //     "homeTeamId": 16,
  //     "awayTeamId": 8,
  //     "homeTeamGoals": 2,
  //     "awayTeamGoals": 2,
  //   });
  //   expect(status).to.be.equal(404);
  //   expect(body).to.be.deep.equal({ message: 'There is no team with such id!' });
  // })
});