const proxyquire = require('proxyquire');
const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'));
const {expect} = chai;

const expressListenStub = sinon.stub();
const expressMock = {
    get: sinon.stub(),
    listen: expressListenStub
};

describe('Server', async () => {
    before(async () => {
        expressListenStub.resetHistory();
        proxyquire('../src/index', {
            'express': () => expressMock,
            './config': {PORT:67889}
        });
    });

    it('It uses the correct port', async () => {
        expect(expressListenStub).to.have.been.calledOnce.and.calledWith(67889);
    });
})