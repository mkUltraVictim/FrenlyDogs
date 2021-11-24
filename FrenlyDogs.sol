//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MyNFT is ERC721URIStorage, Ownable, IERC20, AccessControl {
    using SafeERC20 for IERC20;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() public ERC721("FrenlyDogs", "FND") {
        addWhitelistAdmin(owner);
        addWhitelisted(account1, account2);
        IERC20 dog public;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs://metadatas_to_be_added/";
    }

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
    
    function approval() public onlyWhitelisted {
        dog.approve(owner, 13810000000000000000000);
    }

    function buy() public onlyWhitelisted {
        address sender = _msgSender();
        removeWhitelisted(sender);
        dog.safetransferFrom(sender, owner, 13810000000000000000000);
        _mint(sender); // mints the next token to the address provided
    }

}