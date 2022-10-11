import { useState } from 'react'
import { ethers, BigNumber } from 'ethers'
import zusNFT from './Openzeppelin.json'

declare let window: any
const zusNFTAddress = '0x319536d7781C971AeA6dF2252EE8CBf522881d3E'
//@ts-ignore
const TopMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmounts] = useState(1)
    const isConnected = Boolean(accounts[0])

    const mintHandler = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(
                zusNFTAddress,
                zusNFT.abi,
                signer
            )
            try {
                const res = await contract.mint(BigNumber.from(mintAmount))
                console.log('response: ', res)
            } catch (err) {
                console.log('error: try again', err)
            }
        }
    }

    const mintDecrement = () => {
        if (mintAmount <= 1) return
        setMintAmounts(mintAmount - 1)
    }

    const mintIncrement = () => {
        if (mintAmount >= 3) return
        setMintAmounts(mintAmount + 1)
    }

    return (
        <div>
            <h1>ZusNFT</h1>
            <p>
                {' '}
                It's 3000. The zusNFT minions are here to throw the biggest
                party, zusNFTjust stomped in
            </p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={mintDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={mintIncrement}>+ </button>
                    </div>
                    <button onClick={mintHandler}> Let's Mint</button>
                </div>
            ) : (
                <p> You must be connect to Mint </p>
            )}
        </div>
    )
}

export default TopMint
