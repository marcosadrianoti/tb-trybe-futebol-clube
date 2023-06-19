import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { token } from './mocks/logins.mock'
import * as jwt from '../utils/jwt';

import { app } from '../app';

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
});
