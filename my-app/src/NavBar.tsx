import React from 'react'



declare let window: any
//@ts-ignore
const NavBar =  ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0])

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            })
            setAccounts(accounts)
        }
    }

    return (
        <div>
            {/* Left Side from the   */}
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Email</div>

            {/* Left Side from the   */}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {isConnected ? (
                <p>Connected</p>
            ): (
                <button onClick={connectAccount}>Connect</button>
            )}

        </div>
    )

}

export default NavBar

