import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

import dotenv from 'dotenv'
dotenv.config()

const TESTNET_RPC = process.env.TESTNET_RPC
const PRIVATE_KEY = process.env.PRIVATE_KEY as string
const API_KEY = process.env.API_KEY

const config: HardhatUserConfig = {
    solidity: '0.8.9',
    networks: {
        goerli: {
            url: TESTNET_RPC,
            accounts: [PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: API_KEY,
    },
}

export default config
