//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "hardhat/console.sol";
contract MyNFT is ERC721URIStorage, Ownable {
    using SafeERC20 for IERC20;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    IERC20 public dog;
    uint128 MINTCOST = 13810000000000000000000;
    mapping(address => bool) whitelist;

    constructor(address[] memory whitelisted, address dogAddress) ERC721("Frenly Dogs", "FND") Ownable() {
        dog = IERC20(dogAddress);
        // Add all addresses in array to whitelist mapping
        for (uint i=0; i<whitelisted.length; i++) {
            address whitelistfinal = whitelisted[i];
            console.log("address in whitelist: %s", whitelistfinal);
            whitelist[whitelistfinal] = true;
        }
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721) returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
    }
    
    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs://bafybeidlcn7h6tgdgy2meifpz4h6ydpanvihwipe7xiaytjzltl2gr6ke4/";
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

    function buy() public {
        address sender = _msgSender();
        require(whitelist[sender], "This address is not whitelisted.");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        dog.safeTransferFrom(sender, owner(), MINTCOST);
        _safeMint(sender, newItemId); 
        whitelist[sender] = false;
    }

}