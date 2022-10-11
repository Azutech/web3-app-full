import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TopMint from './TopMint'
import Navbar from './NavBar'

function App() {
    const [accounts, setAccounts] = useState([])
    return (
        <div className="App">
            <Navbar accounts={accounts} setAccounts={setAccounts} />
            <TopMint accounts={accounts} setAccounts={setAccounts} />
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        </div>
    )
}

export default App
