//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MyNFT is ERC721URIStorage, Ownable, AccessControl {
    using SafeERC20 for IERC20;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    IERC20 public dog;
    // Create a new role identifier for the whitelisted role
    bytes32 public constant WHITELISTED_ROLE = keccak256("WHITELISTED_ROLE");
    uint128 MINTCOST = 6905000000000000000000;

    constructor(address[] memory whitelisted) ERC721("Frenly Dogs", "FND") {
        // Grant the WHITELISTED_ROLE to all addresses in array 'whitelisted'
        for (uint i=0; i<whitelisted.length; i++) {
            address whitelistfinal = whitelisted[i];
            _setupRole(WHITELISTED_ROLE, whitelistfinal);
        }
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, AccessControl) returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
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

    function buy() public onlyRole(WHITELISTED_ROLE) {
        address sender = _msgSender();
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        dog.safeTransferFrom(sender, owner(), MINTCOST);
        _safeMint(sender, newItemId); 
        revokeRole(WHITELISTED_ROLE, sender);
    }

}