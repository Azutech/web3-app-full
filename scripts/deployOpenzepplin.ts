import hre from 'hardhat'

const main = async () =>{
    try {
        const OpenzepplinNFT= await hre.ethers.getContractFactory('openzepplin');
        const openzepplinNFT = await OpenzepplinNFT.deploy()
        
        await openzepplinNFT.deployed()
        console.log('OpenzepplinNFT:', openzepplinNFT.address)
        process.exit(0);
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}


export default main