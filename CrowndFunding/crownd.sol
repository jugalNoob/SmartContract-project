// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract CrowndFunding{
    address public owner;
    mapping (address => uint )public funders;
    uint public goal;
    uint public minAmount;
    uint public noOffunder;
    uint public fundsRasied;
    uint public timePeriod;

    constructor(uint _goal , uint _timePeriod){
        goal=_goal;
        timePeriod=block.timestamp+_timePeriod;
        owner=msg.sender;
        minAmount=1000 wei;
    }

function contribution()public payable {

    require(block.timestamp <  timePeriod , "fund time over ");
    require(msg.value>=minAmount , "minimum amount criteria not satisfy ");
    if(funders[msg.sender] == 0){

noOffunder++;
    }

    funders[msg.sender]+=msg.value;
    fundsRasied+=msg.value;
}
    
    receive() payable external {
      contribution();
    }

///getRefund
function getRefund() public {
    require(block.timestamp >  timePeriod , "fund time over");
    require(fundsRasied < goal , "funding was successfully");
    require(funders[msg.sender] >0, "not a funder");
payable (msg.sender).transfer(funders[msg.sender]);
  fundsRasied-=funders[msg.sender];
  funders[msg.sender]=0;
}


///Struct Requests{}

struct Request{

    string description;
    address payable  reciver;
    uint amount;
    uint noOfVoter;
    mapping (address=>bool)votes;
    bool completed;
}

mapping(uint=>Request )public AllRequestion;
uint public numReq;
function createRequest(string memory _description , uint _amount , address payable  _reciver)public{
    require(msg.sender==owner , "your not the owner");
    Request storage newRequest=AllRequestion[numReq];
    newRequest.description=_description;
    newRequest.amount=_amount;
    newRequest.reciver=_reciver;
    newRequest.completed=false;
    newRequest.noOfVoter=0;

}


function votingForRequest(uint reqNum)public{

    require(funders[msg.sender] > 0 , "not a funder");
    Request storage thisRequest=AllRequestion[reqNum];
    require(thisRequest.votes[msg.sender]==false , "already voted");
thisRequest.votes[msg.sender]=true;
thisRequest.noOfVoter++;
    
}


function makePayment(uint reqNum)public{
    Request storage thisRequest=AllRequestion[reqNum];
    require(owner ==msg.sender , "only owner");

    require(thisRequest.completed==false , "completed");
    require(thisRequest.noOfVoter>=noOffunder / 2 , " voting not in favour");

    thisRequest.reciver.transfer(thisRequest.amount);
    thisRequest.completed=true;
}

}