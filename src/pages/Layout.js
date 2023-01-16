import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <h3>CRUD operations in React-JS using localStorage</h3>
    <br></br>
      <nav>
        <ul>
          <li className="liStyle btn btn-default">
            <Link to="/">Add Prod_Details</Link>
          </li>
          <li className="liStyle btn btn-default">
            <Link to="/fetch">Show Prod_Details</Link>
          </li>
          <li className="liStyle btn btn-default">
            <Link to="/edit">Edit Prod_Details</Link>
          </li>
          <li className="liStyle btn btn-default">
            <Link to="/delete">Delete Product</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;