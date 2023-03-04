// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/KUBIX.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract KubixGovernance is Ownable {
    using SafeMath for uint256;

    struct Proposal {
        address proposer;
        string description;
        uint256 votingStartBlock;
        uint256 votingEndBlock;
        uint256 yesVotes;
        uint256 noVotes;
        bool executed;
        mapping(address => bool) hasVoted;
    }

    uint256 public constant VOTING_DURATION_BLOCKS = 10000; // ~2 days assuming 15s per block
    uint256 public constant MINIMUM_VOTING_POWER = 10 * (10**18); // 10 KUBIX minimum voting power to create a proposal
    uint256 public constant VOTING_POWER_DIVISOR = 10**18; // Used to calculate voting power based on KUBIX holdings
    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;
    mapping(address => uint256) public votingPower;

    IERC20 public kubixToken;

    constructor(address _kubixTokenAddress) {
        kubixToken = IERC20(_kubixTokenAddress);
    }

    function createProposal(string calldata _description) external {
        require(kubixToken.balanceOf(msg.sender) >= MINIMUM_VOTING_POWER, "Not enough KUBIX balance to create a proposal");

        proposalCount++;
        Proposal storage proposal = proposals[proposalCount];
        proposal.proposer = msg.sender;
        proposal.description = _description;
        proposal.votingStartBlock = block.number;
        proposal.votingEndBlock = block.number.add(VOTING_DURATION_BLOCKS);
    }

    function vote(uint256 _proposalId, bool _vote) external {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.votingStartBlock > 0, "Proposal does not exist");
        require(proposal.votingEndBlock > block.number, "Voting period has ended");
        require(!proposal.hasVoted[msg.sender], "Already voted");
        require(kubixToken.balanceOf(msg.sender) > 0, "Must hold at least one KUBIX token to vote");

        uint256 voterPower = kubixToken.balanceOf(msg.sender).div(VOTING_POWER_DIVISOR);
        votingPower[msg.sender] = votingPower[msg.sender].add(voterPower);
        proposal.hasVoted[msg.sender] = true;

        if (_vote) {
            proposal.yesVotes = proposal.yesVotes.add(voterPower);
        } else {
            proposal.noVotes = proposal.noVotes.add(voterPower);
        }
    }

    function executeProposal(uint256 _proposalId) external {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal has already been executed");
        require(block.number >= proposal.votingEndBlock, "Voting period has not ended yet");
        require(proposal.yesVotes > proposal.noVotes, "Proposal did not pass");

        proposal.executed = true;
        // Execute proposal logic here
    }

    function revokeVote(uint256 _proposalId) external {
            Proposal storage proposal = proposals[_proposalId];
            require(proposal.hasVoted[msg.sender], "Has not voted");
            require(proposal.votingEndBlock > block.number, "Voting period has ended");

            uint256 voterPower = kubixToken.balanceOf(msg.sender).div(VOTING_POWER_DIVISOR);
            votingPower[msg.sender] = votingPower[msg.sender].sub(voterPower);
            proposal.hasVoted[msg.sender] = false;

            if (proposal.yesVotes > 0) {
                proposal.yesVotes = proposal.yesVotes.sub(voterPower);
            }

            if (proposal.noVotes > 0) {
                proposal.noVotes = proposal.noVotes.sub(voterPower);
            }
        }
}