
///// my second wallet  with start row class line  ------------------------->

contract SecondRow{

mapping(address => uint) balances;

function balanceOf() public view returns (uint256 balance) {  /// check balance my account 
        return balances[msg.sender]+100000;
}

function addInitialBalance(address _to) public {  //// more balance in account 
    balances[_to] += 10000 wei;  // Add 10000 wei to the address's balance
}


uint public totalBalance = 100000;

  function deposit(uint amount) public {
        require(amount > 0, "Amount must be greater than zero");
        balances[msg.sender] += amount;
        totalBalance += amount;
    }




// transfer Money  ----------------->


function CheckBlanceOther(address _add)public  view returns (uint256 balance) { 

   return balances[_add];

}

function TranferMoney(address payable  from , address payable  to , uint value)public{
    balances[from]-=value;
    balances[to]+=value;
}


function getBalance() public view returns(uint){
    return address(this).balance + balances[msg.sender];   ///  add balance in contract
}

}



////// -------------------> Advaance walllet project ----------------->

contract AlloNe{



uint public money=1000 wei;


function Addmoney (uint value)public  payable {

    money+=value;
}


function withdraw(uint value)public payable {

    money -=value;
}


receive() external onlyAdmin payable {
    require(fund > 900 , "check your add money ");
        fund += msg.value;
    }
 

receive() external payable { }




address private Admin;



/// transfer to another account  ------------>
// Q payable not show contrac Balanace 

event log(uint value);

 // Transfer to another account  -------------------------->>>>>>
    function transferMoney(address payable add, uint value) public payable {  // not show ether in check balance account 
        (bool sent, ) = add.call{value: value}("");
        require(sent, "Transfer failed.");

        emit log(msg.value);


    }


function Gettransfer()public payable {  /// add your  own account  use only = Transact 
      require(address(this).balance >= 3 ether, "Not enough balance.");
    payable(msg.sender).transfer(3 ether);
}


function transferIo(address payable  one )public { // this ether show in msg.sender balance  and first add ether and transfer anther account
  bool sent=one.send(1000000000000000000);



}


function transferOwn(address payable  add )public payable {  /// 
bool sent=add.send(msg.value);
require(sent , 'true');



}


/// Money acount to another account 



///check balance in the wallet ---------------->


function checkBalanceContract() public view returns(uint){
    return address(this).balance;
}



function checkBalanceAddress() public view returns(uint){
    return address(msg.sender).balance;
}


    function Balance() public view returns (uint) {
        return   Admin.balance;
    }

}
// //3000000000000000000



