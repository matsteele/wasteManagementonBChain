pragma solidity ^0.5.0;
import "./wastemanagement.sol";



contract Government is WasteManagement {

    address owner;

    constructor() public{
        owner = msg.sender;
    }
   mapping(address => WasteManagement) public groups;

}
