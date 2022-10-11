import {useState} from 'react'
import {ethers, BigNumber} from 'ethers'
import openzeppelin from './Openzeppelin.json'


const openzeppelinNFTAddress = "0x319536d7781C971AeA6dF2252EE8CBf522881d3E"
//@ts-ignore
const TopMint = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmounts] = useState(1)
    const isConnected = Boolean(accounts[0])

    return ()


}

export default TopMint

