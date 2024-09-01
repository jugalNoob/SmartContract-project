pragma solidity ^0.8.0;

contract MyContract {
    uint public money = 2000;

    function allon(uint value) public payable {
        money += value;
    }

    function payname(uint value) public payable {



// ---------------> First Logic This 

        // require(value <= money, "Insufficient funds in the contract");
        // money += value;
        // payable(msg.sender).transfer(value);


// ------------> second Logic this  

           payable(msg.sender).transfer(1000 wei);
             money += 1000 wei;
    }

    // Function to receive Ether directly sent to the contract
    receive() external payable {}
}
