import Navbar from './components/Navbar'
import TravelCard from './components/TravelCard'
import './App.css'
import travelInfo from './travelInfo'

function App() {
  const travelElements = travelInfo.map((info) => {
    return <TravelCard key={info.key} info={info} />
  })

  return (
    <div className="main-container">
      <Navbar />
      <div className="card-container">{travelElements}</div>
    </div>
  )
}
export default App
