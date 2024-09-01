

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlipGame {
    uint256 public clickCount = 0;
    uint256 public maxClicks = 5;
    uint256 public headsCount = 0;
    uint256 public tailsCount = 0;

    // Function to simulate a coin flip
    function flipCoin() public returns (string memory result) {
        require(clickCount < maxClicks, "No more flips allowed, you've reached the limit.");

        // Increment click count
        clickCount++;

        // Generate a random number between 0 and 1 (0 for Tails, 1 for Heads)
        uint256 coinFlip = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % 2;

        if (coinFlip == 1) {
            // Heads
            headsCount++;
            return "Heads, you win!";
        } else {
            // Tails
            tailsCount++;
            return "Tails, you lose!";
        }
    }

    // Function to check the result after all flips
    function finalResult() public view returns (string memory) {
        require(clickCount == maxClicks, "You have not finished all flips yet.");

        if (headsCount > tailsCount) {
            return "You win as Heads!";
        } else if (tailsCount > headsCount) {
            return "You lose as Tails!";
        } else {
            return "It's a tie!";
        }
    }

    // Function to reset the game (optional)
    function resetGame() public {
        clickCount = 0;
        headsCount = 0;
        tailsCount = 0;
    }
}
