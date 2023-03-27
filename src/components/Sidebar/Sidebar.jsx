import SidebarList from './SidebarList'

function Sidebar() {
    return (
        <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__avatar"></div>
            </div>
            <SidebarList />
        </div>
    )
}

export default Sidebar