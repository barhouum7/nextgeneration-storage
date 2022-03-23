pragma solidity >=0.6.0 <0.9.0;

contract DDocumentStorage {
    string public name = 'DDocumentStorage';
    uint public fileCount = 0;
    mapping(uint => File) public files;

    struct File {
        uint fileId;
        string fileHash;
        uint fileSize;
        string fileType;
        string fileName;
        string fileDescription;
        uint uploadTime;
        address payable uploader;
    }

    event FileUploaded(
        uint fileId,
        string fileHash,
        uint fileSize,
        string fileType,
        string fileName,
        string fileDescription,
        uint uploadTime,
        address payable uploader
    );

    constructor() public {

    }

    

}
