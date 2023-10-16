1:::Abstract Contracts simple exmaple

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Inheriting from the abstract contract
contract Dog is Animal {
    string public breed;

    constructor(string memory _name, uint _age, string memory _breed) Animal(_name, _age) {
        breed = _breed;
    }

    function makeSound() public view override returns (string memory) {
        return "Woof!";
    }
}

||||||||||||||||Update Code For ||||||||||||

//     bool public isCheckNameReset;

//     function resetCheckName() public {
//         isCheckNameReset = false;
//         one = block.timestamp + 5;
//         two = block.timestamp + 10;
//     }
// 
    //  struct NameAndMoney {
    //     string name;
    //     uint256 money;
    // }

    //   function checkName() public view returns (NameAndMoney memory) {
    //     NameAndMoney memory result;
        
    //     if (one > block.timestamp) {
    //         result.money = money - 10 wei;
    //          result.name = "";
    //     } else if (two < block.timestamp) {
    //         result.money = money + 10 wei;
    //          result.name = "";
    //     } else {
    //         result.money = money;
    //          result.name = name;
    //     }
    //     return result;
    // }


||||||||||||||||||||||||GetRanDom NumBer SmartContract||||||||||||||||||

contract RandomNumberGenerator {
    address public owner;
    constructor() {
        owner = msg.sender;
    }

    function generateRandomNumber(uint256 maxValue) public view returns (uint256) {
        require(maxValue > 0, "maxValue must be greater than 0");
        uint256 randomSeed = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, block.difficulty)));
        uint256 randomNumber = randomSeed % maxValue;
        return randomNumber;
    }
}


|||||||||||||||||||||||||||||||||Create a HashIn ||||||||||||||||||||||||

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashGenerator {
    function generateHash(string memory data) public pure returns (bytes32) {
        bytes32 hash = sha256(abi.encodePacked(data));
        return hash;
    }

 function generateHash(string memory data) public pure returns (bytes32) {
        bytes32 hash = sha256(abi.encodePack(data));
        return hash;
    }
}


||||||||||||||||||||||||||Change Your Address With Modifyer
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashGenerator {
    address public one=msg.sender ;
    uint private two ;


    modifier vilad() {
        require(one == msg.sender, "You are not authorized.");
        _;
    }

    function check() public view vilad returns (uint) {
        return two;
    }

    function setTwo(uint _newValue) public vilad {
        two = _newValue;
    }
      
  function ChangeAddress(address _add)public  {
require(one==msg.sender , "You are not authorized");
one=_add;
  }
}

|||||||||||||||||||||Random Address Smart Contact||||||||||||||||

pragma solidity ^0.8.0;

contract HelloWorlds {

    address[] private addresses;  // Change to dynamic array

   
    address Admin;



 function getAllAddresses() public view returns (address[] memory) {
  require(one < block.timestamp , " wait enter all addres and then show your address");
return   addresses; 

 }


function getRandomAddress() public view returns (address) {
    require(addresses.length > 0, "No addresses in the array.");
    uint256 randomIndex = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % addresses.length;
    return addresses[randomIndex];
}


    function isAddressInArray(address _checkAddress) private view returns (bool) {
        for (uint256 i = 0; i < addresses.length; i++) {
            if (addresses[i] == _checkAddress) {
                return true;
            }
        }
        return false;
    }

    uint public one=block.timestamp+10;
       modifier onlyAdmin{
        require(msg.sender == Admin, "only Atc can run this function");
        _;
    }

    function addAddress(address _newAddress) public  {
        require(addresses.length < 4, "Only two addresses can be added.");
        require(!isAddressInArray(_newAddress), "Address is already in the array.");
// require(p > block.timestamp , " your  Time  is close  "); //Your Time Is up
    
        addresses.push(_newAddress);
    }
}


||||||||||||||||||||||||||||||||Array Address Your  with ArrAy||||||||||||||
contract HelloWorld {

    address public one = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    address public two = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
    address public three = 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db;
    address public four = 0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB;
    address public five = 0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB;

    function getAllAddresses() public view returns (address[] memory) {
        address[] memory addresses = new address[](5);
        addresses[0] = one;
        addresses[1] = two;
        addresses[2] = three;
        addresses[3] = four;
        addresses[4] = five;
        return addresses;
    }
}

||||||||||||||||||||||||||||||||||||||||

