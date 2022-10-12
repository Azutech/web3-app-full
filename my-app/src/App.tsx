import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TopMint from './TopMint'
import Navbar from './NavBar'

function App() {
    const [accounts, setAccounts] = useState([])
    return (
        <div className="overlay">
            <div className="App">
                <Navbar accounts={accounts} setAccounts={setAccounts} />
                <TopMint accounts={accounts} setAccounts={setAccounts} />
            </div>
            <div className="moving-backward"></div>
        </div>
    )
}

export default App
