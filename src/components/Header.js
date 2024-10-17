import avatar from "../assets/images/avatar.png";

function Header() {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul className="navbar-container">
            <div className="left-items">
              <li>
                <div className="profile">
                  <div className="header-profile-pic"></div>
                  KESHAV BHANDARI
                </div>
              </li>
            </div>
            <div className="right-items">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
