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

    constructor () public {

    }
    function uploadFile (string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName, string memory _fileDescription) public {
        // Make sure the file hash exists
        require(bytes(_fileHash).length > 0);
        // MAke sure file Type exists
        require(bytes(_fileType).length > 0);
        // MAke sure file Description exists
        require(bytes(_fileDescription).length > 0);
        // MAke sure file Name exists
        require(bytes(_fileName).length > 0);
        // MAke sure uploader address exists
        require(msg.sender != address(0));
        // MAke sure file size is more than 0
        require(_fileSize > 0);

        // Increment file id
        fileCount++;

        // Add File to the contract
        files[fileCount] = File(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, now, msg.sender);
        // Trigger an Event
        emit FileUploaded(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, now, msg.sender);
    }
}
