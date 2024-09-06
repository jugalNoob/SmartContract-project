pragma solidity ^0.8.0;




contract XXX{

struct  Info{

    string name;
    uint age;

    address addd;
    
}


mapping(address => mapping(uint => Info[])) private Infomap;
uint private  value=0;
    

function SetInfo( string memory _name , uint _age )public{
Info memory all=Info(_name , _age , msg.sender);
Infomap[msg.sender][value].push(all);
value ++;
}

//  ---> Get Information  -----------------------------------------------------------------------


function GetInfo(uint index) public view returns (Info[] memory) {
    require(index < value, "Index out of bounds");  // Ensure the requested index is within bounds
    return Infomap[msg.sender][index];              // Retrieve the Info array at the specified index
}

//////      without index  number  
function GetAllInfoUpTo() public view returns (Info[] memory) {
    // require(index < value, "Index out of bounds");  // Ensure the requested index is within bounds

    // Calculate the total number of Info elements to determine the size of the result array
    uint totalLength = 0;
    for (uint i = 0; i <= value; i++) {
        totalLength += Infomap[msg.sender][i].length;
    }

    // Create a new array to hold all Info elements
    Info[] memory allInfo = new Info[](totalLength);

    // Populate the new array with Info elements from each array up to the specified index
    uint currentIndex = 0;
    for (uint i = 0; i <= value; i++) {
        Info[] memory infoArray = Infomap[msg.sender][i];
        for (uint j = 0; j < infoArray.length; j++) {
            allInfo[currentIndex] = infoArray[j];
            currentIndex++;
        }
    }

    return allInfo;  // Return the combined array
}




// with index number

function GetAllInfoUpTo(uint index) public view returns (Info[] memory) {
    require(index < value, "Index out of bounds");  // Ensure the requested index is within bounds

    // Calculate the total number of Info elements to determine the size of the result array
    uint totalLength = 0;
    for (uint i = 0; i <= index; i++) {
        totalLength += Infomap[msg.sender][i].length;
    }

    // Create a new array to hold all Info elements
    Info[] memory allInfo = new Info[](totalLength);

    // Populate the new array with Info elements from each array up to the specified index
    uint currentIndex = 0;
    for (uint i = 0; i <= index; i++) {
        Info[] memory infoArray = Infomap[msg.sender][i];
        for (uint j = 0; j < infoArray.length; j++) {
            allInfo[currentIndex] = infoArray[j];
            currentIndex++;
        }
    }

    return allInfo;  // Return the combined array
}


// -------------------------->   delete Mapping  -------------------------->>>

function deletes(uint index)public {
delete Infomap[msg.sender][Infomap[msg.sender][index].length - 1];
}


    
// -------------->  Udate Your Information  ------------------->>

function UploadInfo(string memory _name, uint _age, uint index) public {
    require(index < value, "Index out of bounds");  // Ensure the index is within bounds
    // Reference the struct in storage, not memory
    Info storage infoToUpdate = Infomap[msg.sender][index][0];  // Assuming you're updating the first entry
    // Update the fields of the struct
    infoToUpdate.name = _name;
    infoToUpdate.age = _age;
    infoToUpdate.addd = msg.sender;
}

//  value count Number   --------------------<><><><> ----------------------------------------------

    function getTicketCount() public view returns (uint) {
            require(value > 0, "No tickets have been booked yet.");
        return value;
    }

 
 function GetAllLengths() public view returns (uint[] memory) {
    require(value > 0, "No Info available");  // Ensure there is at least one set of Info
    uint[] memory lengths = new uint[](value);
    for (uint i = 0; i < value; i++) {
        lengths[i] = Infomap[msg.sender][i].length;
    }

    return lengths;
}



function GetAllCumulativeLengths() public view returns (uint[] memory) {
    require(value > 0, "No Info available");  // Ensure there is at least one set of Info
    uint[] memory cumulativeLengths = new uint[](value); // Array to store cumulative lengths
    uint sum = 0;
    for (uint i = 0; i < value; i++) {
        sum += Infomap[msg.sender][i].length; // Accumulate the lengths
        cumulativeLengths[i] = sum;           // Store the cumulative length at each step
    }
    return cumulativeLengths; // Return the array of cumulative lengths
}



// function GetLength() public view returns (uint) {
//     require(value > 0, "No Info available");         // Ensure that there is at least one set of Info
//     return Infomap[msg.sender][value - 1].length;    // Return the length of the last set of Info   
// }

}



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




:::::::::::::::  check contract address ::::::::::::::::::::


  // Function to return the contract's address
    function getContractAddress() public view returns (address) {
        return address(this);
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


Simple Mapping   ----------------------------------------------------------<><><><><><><>

contract TracXXX{

struct Info{
    uint age;
    string name;
    address add;
}
 

 mapping (address => Info[]) public  addinfo;
 Info public info;

function ADDInformation(uint _age , string memory _name )public{
Info memory all=Info(_age , _name , msg.sender);
addinfo[msg.sender].push(all);
}



//get Length  Information
function GetLength()public view returns(uint){
    return addinfo[msg.sender].length;
}

  function getLengthWithLoop() public view returns (uint) {
        uint count = 0;

        for (uint i = 0; i < addinfo[msg.sender].length; i++) {
            count++;
        }

        return count;
    }




//delete Information 
function deletes()public {

delete addinfo[msg.sender][addinfo[msg.sender].length - 1];

}




//Get Information all 


 function getInformationWithLoop() public view returns (Info[] memory) {
        uint length = addinfo[msg.sender].length;
        Info[] memory infoArray = new Info[](length);
        for (uint i = 0; i < length; i++) {
            infoArray[i] = addinfo[msg.sender][i];
        }
        return infoArray;
    }



function BaseGet()public view  returns(Info[] memory){
    return addinfo[msg.sender];
}



Upload Your Map Infomration  ------------------->>>



   function updateTreeInfo(uint _index, string memory _name ,  uint _age, string memory _country , string memory _gender) public {
        // require(!isPaused, "Contract is paused");
        // require(_index < userTrees[msg.sender].length, "Invalid index");
        // require(timePeriod < block.timestamp, "Cannot update information during time change");


        Infomap[msg.sender][_index].name = _name;
       Infomap[msg.sender][_index].age = _age;
     
    }



}








