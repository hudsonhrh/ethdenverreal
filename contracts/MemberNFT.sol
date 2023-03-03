// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//ignore these errors it compiles fine
import "contracts/KUBIX.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract MyNFT is ERC721URIStorage, Ownable {
    

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MyNFT", "NFT") {}


    //just have a function that will only change metadata when called and balance checked
    //function upgrade(){
        // if adress balance that owns token id has 100 KUBIX can upgrade. else cant
    //}

    function mintNFT(address recipient, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function burn(uint256 tokenId) public {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "KUBImember: caller is not owner nor approved");
        _burn(tokenId);
    }

    function beforeTokenTransfer(address, address, uint256) internal virtual override {
        revert("KUBImember: transfer not allowed");
    }
}
