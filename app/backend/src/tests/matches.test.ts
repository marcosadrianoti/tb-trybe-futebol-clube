import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import matchesMock from './mocks/matches.mock';
import { token } from './mocks/logins.mock'
import * as jwt from '../utils/jwt';

import { app } from '../app';

import Match from '../database/models/SeqMatcheModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches', () => {
  beforeEach(sinon.restore);
  it('Deve mostrar todos os matches', async function(){
    sinon.stub(Match, 'findAll').resolves(matchesMock.matches as any);

    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(matchesMock.matches);
  })
  it('Return matches in progress', async function(){
    sinon.stub(Match, 'findAll').resolves(matchesMock.matches as any);

    const { status, body } = await chai.request(app).get('/matches?inProgress=true');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(matchesMock.matches);
  })
  it('Teste do requisito 17', async function(){
    sinon.stub(Match, 'update').resolves();
    sinon.stub(jwt, 'verify').returns({
      username: 'Admin',
      email: 'admin@admin.com',
    })

    const { status, body } = await chai.request(app)
    .patch('/matches/2/finish')
    .set('authorization', token.token);

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({ message: 'finished' });
  })
  it('Macth must be updated', async function(){
    sinon.stub(Match, 'update').resolves();
    sinon.stub(jwt, 'verify').returns({
      username: 'Admin',
      email: 'admin@admin.com',
    })

    const { status, body } = await chai.request(app)
    .patch('/matches/2')
    .set('authorization', token.token)
    .send({
      "homeTeamGoals": 1,
      "awayTeamGoals": 1,
    });

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({ message: 'Updated match' });
  })
  it('New macth can be posted', async function(){
    sinon.stub(Match, 'create').resolves({dataValues: {
      "id": 49,
      "homeTeamId": 16,
      "awayTeamId": 8,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
      "inProgress": true
    }} as any);
    sinon.stub(jwt, 'verify').returns({
      username: 'Admin',
      email: 'admin@admin.com',
    })

    const { status, body } = await chai.request(app)
    .post('/matches')
    .set('authorization', token.token)
    .send({
      "homeTeamId": 16,
      "awayTeamId": 8,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
    });
    expect(status).to.be.equal(201);
    expect(body).to.be.deep.equal({
      "id": 49,
      "homeTeamId": 16,
      "awayTeamId": 8,
      "homeTeamGoals": 2,
      "awayTeamGoals": 2,
      "inProgress": true
    });
  })
});