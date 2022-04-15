const { assert } = require('chai');

const DDocumentStorage = artifacts.require('./DDocumentStorage');

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('DDocumentStorage', ([deployer, uploader]) => {
    let ddstorage

    before(async () => {
        ddstorage = await DDocumentStorage.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await ddstorage.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('has a name', async () => {
            const name = await ddstorage.name()
            assert.equal(name, 'DDocumentStorage')
        })
    })

})