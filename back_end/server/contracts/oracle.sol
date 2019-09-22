pragma solidity ^0.5.0;
// import "./wastemanagement";

contract Oracle {

address public owner;

uint public trash_weight;
string public trash_type;
uint public trash_type_price;

event getPrice();
event getTrashPrice();

constructor()public{
  owner = msg.sender;
}

function updateWeightPrice() public{
  emit getPrice();
}

function updateTrashTypePrice() public{
  emit getTrashPrice();
}













}