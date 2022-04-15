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

    describe('file', async () => {
        let result, fileCount
        const fileHash = ''
        const fileSize = '1'
        const fileType = 'TypeOfTheFile'
        const fileName = 'NameOfTheFile'
        const fileDescription = 'DescriptionOfTheFile'

        before(async () => {
            result = await ddstorage.uploadFile(fileHash, fileSize, fileType, fileName, fileDescription, { from: uploader })
            fileCount = await ddstorage.fileCount()
        })

        // Check the event
        it('upload file', async () => {
            // If Success
            assert.equal(fileCount, 1)
            const event = result.logs[0].args
            assert.equal(event.fileId.toNumber(), fileCount.toNumber(), 'Id is correct!')
            assert.equal(event.fileHash, fileHash, 'Hash is correct!')
            assert.equal(event.fileSize, fileSize, 'Size is correct!')
            assert.equal(event.fileType, fileType, 'Type is correct!')
            assert.equal(event.fileName, fileName, 'Name is correct!')
            assert.equal(event.fileDescription, fileDescription, 'Description is correct!')
            assert.equal(event.uploader, uploader, 'Uploader is correct!')

            // FAILURE: File must have Hash
            await ddstorage.uploadFile('', fileSize, fileType, fileName, fileDescription, { from: uploader }).should.be.rejected;
            // FAILURE: File must have Size
            await ddstorage.uploadFile(fileHash, '', fileType, fileName, fileDescription, { from: uploader }).should.be.rejected;
            // FAILURE: File must have Type
            await ddstorage.uploadFile(fileHash, fileSize, '', fileName, fileDescription, { from: uploader }).should.be.rejected;
            // FAILURE: File must have Name
            await ddstorage.uploadFile(fileHash, fileSize, fileType, '', fileDescription, { from: uploader }).should.be.rejected;
            // FAILURE: File must have Description
            await ddstorage.uploadFile(fileHash, fileSize, fileType, fileName, '', { from: uploader }).should.be.rejected;
        })

        // Check from Struct
        it('lists file', async () => {
            const file = await ddstorage.files(fileCount)

            assert.equal(file.fileId.toNumber(), fileCount.toNumber(), 'Id is correct!')
            assert.equal(file.fileHash, fileHash, 'Hash is correct!')
            assert.equal(file.fileSize, fileSize, 'Size is correct!')
            assert.equal(file.fileType, fileType, 'Type is correct!')
            assert.equal(file.fileName, fileName, 'Name is correct!')
            assert.equal(file.fileDescription, fileDescription, 'Description is correct!')
            assert.equal(file.uploader, uploader, 'Uploader is correct!')
        })

    })
})