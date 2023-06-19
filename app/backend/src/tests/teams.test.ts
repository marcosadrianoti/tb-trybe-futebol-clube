import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SeqTeamModel from '../database/models/SeqTeamModel';
import { teamsMock, teamMock } from './mocks/teams.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams', () => {
  beforeEach(sinon.restore);
  it('Get all teams', async () => {
    sinon
      .stub(SeqTeamModel, 'findAll')
      .resolves(teamsMock as any);
      const { status, body } = await chai.request(app).get('/teams');
      expect(status).to.equal(200);
      expect(body).to.deep.equal(teamsMock);
  });
  it('Get by id',async () => {
    sinon
      .stub(SeqTeamModel, 'findOne')
      .resolves(teamMock as any);
    const { status, body } = await chai.request(app).get('/teams/2')
    expect(status).to.equal(200);
    expect(body).to.deep.equal(teamMock);
  })
});
