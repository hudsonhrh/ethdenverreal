// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract KubixToken is ERC20, Ownable {
    using SafeMath for uint256;

    uint256 public constant TOTAL_SUPPLY = 1000000 * (10**18); // 1 million tokens
    address public treasuryContract;
    bool public transfersEnabled = false;

    constructor() ERC20("Kubix Token", "KUBIX") {
        _mint(msg.sender, TOTAL_SUPPLY);
    }

    modifier onlyTreasury() {
        // Only allow the treasury contract to call this function
        require(msg.sender == treasuryContract, "Caller is not the treasury contract");
        _;
    }

    function setTreasuryContract(address _treasuryContract) external onlyOwner {
        require(_treasuryContract != address(0), "Invalid treasury contract address");
        treasuryContract = _treasuryContract;
    }

    function enableTransfers() external onlyTreasury {
        // Allow transfers to happen
        transfersEnabled = true;
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(transfersEnabled == true, "Transfers are not enabled yet");
        require(msg.sender == treasuryContract, "Only the treasury contract can transfer tokens");
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        require(transfersEnabled == true, "Transfers are not enabled yet");
        require(msg.sender == treasuryContract, "Only the treasury contract can transfer tokens");
        _transfer(sender, recipient, amount);
        _approve(sender, _msgSender(), allowance(sender, _msgSender()).sub(amount, "ERC20: transfer amount exceeds allowance"));
        return true;
    }

    function burn(uint256 amount) external onlyTreasury {
        _burn(msg.sender, amount);
    }

    function vote(uint256 proposalId) public {
        require(balanceOf(msg.sender) > 0, "Must hold at least one KUBIX token to vote");
        // Handle voting logic here
    }
}
