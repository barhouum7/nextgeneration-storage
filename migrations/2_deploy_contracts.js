// Import Contract 
const DDocumentStorage = artifacts.require("DDocumentStorage");

module.exports = function (deployer) {
    // Deploy Contract
    deployer.deploy(DDocumentStorage);
};
