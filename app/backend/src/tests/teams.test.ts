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
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
