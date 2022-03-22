pragma solidity ^0.5.0;

contract DDocumentStorage {
    string public name = 'DDocumentStorage';
    uint public fileCount = 0;
    mapping(uint => File) public files;

    
}
