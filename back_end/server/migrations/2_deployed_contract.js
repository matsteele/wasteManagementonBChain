const wastemanagement = artifacts.require("./wastemanagement.sol");
const government = artifacts.require("./government.sol");

module.exports = function(deployer) {
  deployer
    .deploy(wastemanagement, "anywhere", {
      privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]
    })
    .then(() => {
      deployer.deploy(government);
    });
};
