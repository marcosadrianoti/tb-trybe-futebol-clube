import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { correctUser, wrongUser } from './mocks/logins.mock';
import SeqUsersModel from '../database/models/SeqUserModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  beforeEach(sinon.restore);
  it('Correct login user', async function(){
    sinon.stub(SeqUsersModel, 'findOne').resolves(correctUser as any);

    const { status, body } = await chai.request(app)
    .post('/login')
    .send({
      email: 'admin@admin.com',
      password: 'secret_admin',
    });

    expect(status).to.be.equal(200);
    expect(body).to.be.an('object');
  })
  it('Wrong login user', async function(){
    sinon.stub(SeqUsersModel, 'findOne').resolves(wrongUser as any);

    const { status, body } = await chai.request(app)
    .post('/login')
    .send({
      email: 'admin@admin.com',
      password: 'xablau',
    });

    expect(status).to.be.equal(401);
    expect(body.message).to.be.equal("Invalid email or password");
  })
  it('User email-less', async function(){
    const { status, body } = await chai.request(app)
    .post('/login')
    .send({
      email: 'admin@admin.com',
    });

    expect(status).to.be.equal(400);
    expect(body).to.be.deep.equal({ message: 'All fields must be filled' });
  })
  it('Regex - email wrong', async function(){
    const { status, body } = await chai.request(app)
    .post('/login')
    .send({
      email: 'admin@',
      password: 'secret_admin',
    });

    expect(status).to.be.equal(401);
    expect(body).to.be.deep.equal({ message: 'Invalid email or password'});
  })
})
