
import CenterBlock from './CenterBlock'
import Nav from './Nav'
import Sidebar from './Sidebar'

function Main() {
  return (
    <main className="main">
        <Nav/>
        <CenterBlock/>
        <Sidebar/>
    </main>
  )
}

export default Main