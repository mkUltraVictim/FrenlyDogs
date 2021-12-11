//Deploy contract. Currently configured for test network.


//replace with real desired whitelist
function getWhitelist() {
  let whitelist = [];
  for(let i = 0; i < 100; i++) {
    whitelist.push("0x329121b9817b6945f2486A643fC427aaf58520b2");
  }
  return whitelist
}

async function main() {
  const [account] = await ethers.getSigners();
  const MyNFT = await ethers.getContractFactory("MyNFT");
  whitelist = getWhitelist()
  
  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy(whitelist);
  console.log("Contract deployed to address:", myNFT.address);
}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })