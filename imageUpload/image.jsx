
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


// contract XXX {

//     struct Sub {
//         string name;
//         address add;
//     }

//     mapping(address => Sub[]) private Subs;
//     address[] private addresses;
//     function addSub(string memory _name, address _add) public {
//         require(!isAddressInArray(_add), "Address is already in the array.");
//         require(addresses.length < 2, "Only two addresses can be added.");

//         Sub memory newSub = Sub(_name, _add);
//         Subs[msg.sender].push(newSub);

//         addresses.push(msg.sender);  // Add the address after checking the constraints
//     }

//     function isAddressInArray(address _checkAddress) private view returns (bool) {
//         for (uint256 i = 0; i < addresses.length; i++) {
//             if (addresses[i] == _checkAddress) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     function checkAll(address _add) public view returns (Sub[] memory) {
//         return Subs[_add];
//     }
// }


// ------------------------------- /// ------------------------------------ ,,,,,,,,,,,,,,,,, 

// contract XXnx{


//  struct Upload {
//         string image;
//         address add;
 
//     }

//      mapping(address => mapping(uint => Upload[])) private upload;

//     // mapping (uint => Upload[])public  upload;
//     uint private nump;

//     function uploadImage(string memory _img, address _add,  uint _nums) public {
//         Upload memory up = Upload(_img, _add );
//         upload[msg.sender][_nums].push(up);
//         nump++;
//     }

// function  checkNum()public view  returns(uint){
//     return  nump;
// }


// function checkUp(address _add , uint _id) public view returns (Upload[] memory) {
//     return upload[_add][_id];
// }


// function NumberSall(address _add , uint _id)public view  returns(Upload[] memory){
//     return checkUp(_add, _id);
// }
// }




pragma solidity ^0.8.0;

contract XXnx {
    struct Upload {
        string image;
        address add;
    }

    mapping(address => mapping(uint => Upload[])) private upload;
    mapping(address => uint) private userUploadCount; // Tracking number of uploads per user

    uint private nump;

    // Event to log image uploads
    event ImageUploaded(address indexed user, uint indexed id, string image);

    function uploadImage(string memory _img, address _add, uint _nums) public {
        Upload memory up = Upload(_img, _add);
        upload[msg.sender][_nums].push(up);
        nump++;
        userUploadCount[msg.sender]++; // Increment user's upload count

        emit ImageUploaded(msg.sender, _nums, _img); // Emit the event
    }

    function checkNum() public view returns (uint) {
        return nump;
    }

    function checkUp(address _add, uint _id) public view returns (Upload[] memory) {
        return upload[_add][_id];
    }


    // Function to get the total number of uploads for a specific user
    function getUserUploadCount(address _user) public view returns (uint) {
        return userUploadCount[_user];
    }

    // Function to delete an upload
    // function deleteUpload(uint _nums, uint _index) public {
    //     require(_index < upload[msg.sender][_nums].length, "Index out of bounds");

    //     // Shift elements to the left to overwrite the deleted element
    //     for (uint i = _index; i < upload[msg.sender][_nums].length - 1; i++) {
    //         upload[msg.sender][_nums][i] = upload[msg.sender][_nums][i + 1];
    //     }

    //     // Remove the last element
    //     upload[msg.sender][_nums].pop();
    //     nump--;
    //     userUploadCount[msg.sender]--; // Decrement user's upload count
    // }


    
    // function NumberSall(address _add, uint _id) public view returns (Upload[] memory) {
    //     return checkUp(_add, _id);
    // }
}





 //////////////  ------------------> second row class Line  Start ----------

// contract Example {

//     struct One {
//         string name;
//         uint age;
//         address add;
//     }

//     mapping (address => One[]) private mappingOne;

//     function addEntry(string memory _name, uint _age , address _add) public {
//         One memory newEntry = One(_name, _age, msg.sender);
//         mappingOne[_add].push(newEntry);
//     }

//     function getEntries(address _add) public view returns (One[] memory) {
//         return mappingOne[_add];
//     }
// }




// SPDX-License-Identifier: GPL-3.0

// pragma solidity >=0.7.0 <0.9.0;

// contract Upload {
  
//   struct Access{
//      address user; 
//      bool access; //true or false
//   }
//   mapping(address=>string[]) value;
//   mapping(address=>mapping(address=>bool)) ownership;
//   mapping(address=>Access[]) accessList;
//   mapping(address=>mapping(address=>bool)) previousData;

//   function add(address _user,string memory url) external {
//       value[_user].push(url);
//   }
//   function allow(address user) external {//def
//       ownership[msg.sender][user]=true; 
//       if(previousData[msg.sender][user]){
//          for(uint i=0;i<accessList[msg.sender].length;i++){
//              if(accessList[msg.sender][i].user==user){
//                   accessList[msg.sender][i].access=true; 
//              }
//          }
//       }else{
//           accessList[msg.sender].push(Access(user,true));  
//           previousData[msg.sender][user]=true;  
//       }
    
//   }
//   function disallow(address user) public{
//       ownership[msg.sender][user]=false;
//       for(uint i=0;i<accessList[msg.sender].length;i++){
//           if(accessList[msg.sender][i].user==user){ 
//               accessList[msg.sender][i].access=false;  
//           }
//       }
//   }

//   function display(address _user) external view returns(string[] memory){
//       require(_user==msg.sender || ownership[_user][msg.sender],"You don't have access");
//       return value[_user];
//   }

//   function shareAccess() public view returns(Access[] memory){
//       return accessList[msg.sender];
//   }
// }