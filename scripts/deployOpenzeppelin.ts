import hre from 'hardhat'

const main = async () => {
    const OpenzeppelinNFT = await hre.ethers.getContractFactory('Openzeppelin')
    const openzeppelinNFT = await OpenzeppelinNFT.deploy()

    await openzeppelinNFT.deployed()

    console.log('OpenzepplinNFT is deployed:', openzeppelinNFT.address)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
