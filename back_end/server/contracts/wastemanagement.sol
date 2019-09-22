pragma solidity ^0.5.0;


contract WasteManagement{

  string public location;
  uint totalSpent;
  uint256 cash;

   struct Trash{
     uint trash_weight;
     bytes32 trash_type;
     address sanitation_worker;
    }

  mapping(address => Trash) public trashCount;

  constructor(string memory _location)public{
    location = _location;
    cash = 1000000 ether;
   }


  function createTrash(uint trash_weight, bytes32 trash_type, address sanitation_worker)public{
    trashCount[sanitation_worker] = Trash(trash_weight, trash_type, sanitation_worker);
  }

  function calculateType(bytes32 trash_type) private pure returns(uint){
    if(trash_type == "metal"){
      return 500 wei;
    }
    if(trash_type == "hazardous"){
      return  400 wei;
    }
    if(trash_type == "hazardous"){
      return  300 wei;
    }
    if(trash_type == "wet"){
      return  200 wei;
    }
  }

  function payOutTrash(uint trash_weight, bytes32 trash_type)public payable returns(uint){
      uint256 payout = calculateType(trash_type) * trash_weight;
      cash -= payout;
      require (cash >= payout, 'Contract does not have enough funds');
      return payout;
  }
}


