//Deploy contract. Currently configured for test network.

//replace with real desired whitelist
function getWhitelist() {
  let whitelist = [];
    whitelist.push(
    "0xE768687Cf9Ff40a1319F4847d3afD5b9fb6a4700",
    "0x69AFCf288bCE429a9925673a7a9121bBFE976416",
    "0xa5EbE5D1871CC87480B23126FAc13D7161a5c1d9",
    "0xe170a72dd1ff7e459F85FBcF71318545f5709ebC",
    "0x44B76fD4EeF6Ff8327c3CD7359E2177de463e36E",
    "0xEC6d36A487d85CF562B7b8464CE8dc60637362AC",
    "0x409b3F6363B6C35019F68291398413aAEEe96C04",
    "0x7F7a2cc5A4b00BeeAF82CaBA904562d75111F255",
    "0x1BfF8E0f6b90E80Db625579c671848e6157996FD",
    "0xf63488819D82e794c52cc792D9c9fe1a84AEFeec",
    "0xcc3925548525549d6959B82977FA30CDA91A660B",
    "0x5c00a96503C27A9cabC589b07548B3f9890AB3C6",
    "0x335DA83624F8CDbf69204e54E8c7aac2ED806a0a",
    "0x335DA83624F8CDbf69204e54E8c7aac2ED806a0a",
    "0x7223145933402CC2DfA26390Eb375db01c682b28",
    "0x254bD83b62B84bb58e5b020e9815B826AEfD6A4C",
    "0x1b619Dcb6Fabcc2f9Bedf9d1b905A67bf92AbBDf",
    "0x8991B93b721723753C68CBB6dea82743f4e5E9C5",
    "0x1f916bBF39aB189A9E3d9E1823a7b1A8e9e5f204",
    "0x7A47CF9C66d4154c11c1615e976C3D74b1aaF4D6",
    "0x882EBe579E11104FfA610FAd8B0b947955cf3D3D",
    "0x8910A33230FE604Cfe43DDCdCc9CFCB577Cbb143",
    "0x49CA0F6A3AcDB5e0053A151a06F6c48a2d512A2D",
    "0xEa824F16Ebc8C133B518E2e56449eF1e569E35b5",
    "0x5a2F2771F788DcEBc539370B49aCEE7255C7ef30",
    "0x1D7B98490329d72d8762FDA101c758f07d959114",
    "0x05b7812824A48Cb10EF5A3B701a8B55B7807dE25",
    "0xa74343F4C1881902D413E7ebE0D1B70147Ed4929",
    "0x98dee387Ee185F64eac0b2E8C17efb299a1C4B99",
    "0xD827eb2673D3Dc1a7F886413f6f0950Ec2fbBc98",
    "0xDB7F2C92AF67632Ab6A43AD0Ef7Bd53A99f634E1",
    "0xfe7cADc2b2544b4E05f527d7DA772e0D2c363712",
    "0x408027a9f302fEB3DE50859352cA3d91F6C22343",
    "0x856565Db827588a88780454863F98A4A323E13Aa",
    "0x57D2757b46EEcdc715c593973C9444a7bd52dCa3",
    "0x9c467F50421B8956B7d5Ef5cbF02f8031A51E0F7",
    "0xa819838683Dc056A586CDDCEa154bD25730f1229",
    "0x88718d577916D05E7Dbc5CA3C640bbB0f9239744",
    "0xF4bc68e754f99ac29382F7BA849F2e17914b40Cc",
    "0x83D2486b9646cF6F7A4EA8F0CfA8dfb961F9d6BB",
    "0x6Cf8D194568C54ceDa4B0dcc148c2D75eC25DE5b",
    "0x27E46E5C28d29Cae26fC0a92ACfCb3C9718D8Ee0",
    "0x0C9e6e9e329B687c1125d786C814CE8499306222",
    "0x9B9e99C207d2A952D6775858aCd1833e7Ef12f9b",
    "0x71866Ffb7E700E0832aD51f230B75668305493ff");
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
  const myNFT = await MyNFT.deploy(whitelist, tokenAddress, {gasPrice: ethers.BigNumber.from(web3.utils.toWei("80", "gwei"))});
  return myNFT
}

async function main() {
  let tokenAddress = "0xbaac2b4491727d78d2b78815144570b9f2fe8899";
  let deployed = await deployContract(tokenAddress);
  console.log(deployed);
}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })