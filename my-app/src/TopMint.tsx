import {useState} from 'react'
import {ethers, BigNumber} from 'ethers'
import openzeppelin from './Openzeppelin.json'

declare let window: any
const openzeppelinNFTAddress = "0x319536d7781C971AeA6dF2252EE8CBf522881d3E"
//@ts-ignore
const TopMint = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmounts] = useState([]);
    const isConnected = Boolean(accounts[0]);

    const mintHandler = async () => {
        if ( window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(
                openzeppelinNFTAddress, 
                openzeppelin.abi,
                signer 
            )
        }
    }

    return ( )


}

export default TopMint

