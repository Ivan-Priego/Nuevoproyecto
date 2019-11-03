import React, { Component } from 'react';
import {Link} from "react-router-dom"

class BarNav extends Component {
  render() {
    return (
      <div className="BarNav">
      <ul>

        <li>
            <Link to="/PageHome">Home </Link>
        </li>
        <li>
            <Link to="/PageNosotros">Nosotros</Link>
        </li>
        <li>
            <Link to="/PageBlog">Blog</Link>
        </li>
        <li>
            <Link to="/PageContacto">Contacto</Link>
        </li>

    </ul>
      </div>
    );
  }
}
export default BarNav;