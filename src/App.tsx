import viteLogo from './assets/gll.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://greatlawleads.com" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Great Law Leads logo" /> 
        </a>
      </div>
      <h1>Great Law Leads</h1>
      <div className="card">
        <p>
        Coming soon
        </p>
      </div>
      <p className="read-the-docs">
        Reach us at info@greatlawleads.com
      </p>
    </>
  )
}

export default App
