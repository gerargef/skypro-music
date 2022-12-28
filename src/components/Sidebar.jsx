
import SIdebarList from "./SIdebarList";

function SIdebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <SIdebarList/>
      </div>
    </div>
  );
}

export default SIdebar;
