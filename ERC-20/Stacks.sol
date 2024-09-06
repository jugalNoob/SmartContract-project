
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract PayXXX {

mapping(address => uint) balances;

function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
}


function addInitialBalance(address _to) public {
    balances[_to] += 10000 wei;  // Add 10000 wei to the address's balance
}



function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
balances[_from]-=_value;
balances[_to]+=_value;
return true;

}
}

