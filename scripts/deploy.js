//Deploy contract. Currently configured for test network.

//replace with real desired whitelist
function getWhitelist() {
  let whitelist = [];
  for(let i = 0; i < 100; i++) {
    whitelist.push("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
  }
  return whitelist
}

async function deployTestToken() {
  const TestToken = await ethers.getContractFactory("testToken");
  const token = await TestToken.deploy(web3.utils.toWei("10000000", "ether"));
  console.log("Test token deployed to address:", token.address);
  return token.address
}

async function deployContract(tokenAddress) {
  whitelist = getWhitelist()
  
  // Start deployment, returning a promise that resolves to a contract object
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy(whitelist, tokenAddress);
  console.log("Contract deployed to address:", myNFT.address);
}

async function main() {
  let tokenAddress = await deployTestToken();
  await deployContract(tokenAddress);
}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })