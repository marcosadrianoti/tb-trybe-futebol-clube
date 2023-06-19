import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { token } from './mocks/logins.mock'
import * as jwt from '../utils/jwt';

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Role', () => {
  beforeEach(sinon.restore);
  it('Get role', async function(){
    sinon.stub(jwt, 'verify').returns({
          username: 'Admin',
          email: 'admin@admin.com',
          role: 'admin',
        })
    const { status, body } = await chai.request(app).get('/login/role')
    .set('authorization', token.token);
    
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({ role: "admin" });
  })
});
