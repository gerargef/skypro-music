import Bar from '../components/Bar/Bar'
import CenterBlock from '../components/CenterBlock/CenterBlock'
import Nav from '../components/Nav/Nav'
import Sidebar from '../components/Sidebar/Sidebar'

function MainPage() {
  return (
    <div className="wrapper">
         <div className="container">
          <main className="main">
              <Nav/>
              <CenterBlock/>
              <Sidebar/>
          </main>
          <Bar/>
        </div>
    </div>
  )
}

export default MainPage