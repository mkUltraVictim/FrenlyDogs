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
    IERC20 public dog;
    // Create a new role identifier for the minter role
    bytes32 public constant WHITELISTED_ROLE = keccak256("WHITELISTED_ROLE");
    uint128 mintCost = 13810000000000000000000;

    constructor(address whitelisted) ERC721("FrenlyDogs", "FND") {
        // Grant the minter role to a specified account
        _setupRole(WHITELISTED_ROLE, whitelisted);
        // Grant the contract deployer the default admin role: it will be able
        // to grant and revoke any roles
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
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
    
    function approval() public onlyRole(WHITELISTED_ROLE) {
        dog.approve(owner, mintCost);
    }

    function buy() public onlyRole(WHITELISTED_ROLE) {
        address sender = _msgSender();
        // Check that the calling account has the whitelisted role
        require(hasRole(WHITELISTED_ROLE, msg.sender), "Caller is not whitelisted");
        // Revoke the whitelisted role and then mint.
        revokeRole(WHITELISTED_ROLE, sender);
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        dog.safeTransferFrom(sender, owner, mintCost);
        _mint(sender, newItemId); // mints the next token to the address provided
    }

}