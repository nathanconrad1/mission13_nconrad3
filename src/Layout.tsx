import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3 text-bg-dark p-3">
        <div className="container text-bg-dark p-3">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/movie">
                Movie List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/podcast">
                Podcast
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
