// Hardhat 패키지에서 ethers를 import
const { ethers } = require("hardhat");

async function main() {
  /*
  ethers.js 안에 있는 CountractFactory는 새로운 스마트 컨트랙트를 배포하기 위해 사용되는 추상입니다.
  따라서, nftContract는 NFTee컨트랙트의 인스턴스를 위한 팩토리 입니다.
  */
  const nftContract = await ethers.getContractFactory("NFTee");

  // 여기서 컨트랙트를 배포합니다.
  const deployedNFTContract = await nftContract.deploy();

  //컨트랙트를 배포하기 위해 기다립니다.
  await deployedNFTContract.deployed();

  // 배포된 컨트랙트의 주소를 출력합니다.
  console.log("NFT Contract Address:", deployedNFTContract.address);
}

//main 함수를 불러오고 에러가 있으면 찾아냅니다.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
