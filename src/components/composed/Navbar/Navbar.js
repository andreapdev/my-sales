import React from 'react';

const Navbar = () => {
    const navbarStyle = {
      backgroundColor: "#E491A5",
    }
    return(
    <nav class="navbar navbar-expand-md row mt-3" style={navbarStyle}>
        <div class="col m-0 p-0">
          <ul class="navbar-nav row text-center">
            <li class="nav-item dropdown col border-right">
              <a href="/" class="nav-link dropdown-toggle" data-toggle="dropdown">Show only</a>
              <div class="dropdown-menu" >
                <a class="dropdown-item" href="/">Pending</a>
                <a class="dropdown-item" href="/">Done</a>
                <a class="dropdown-item" href="/">Sent</a>
              </div>
            </li>
            <li class="nav-item col border-right">
              <a href="/" class="nav-link">Stats</a>
            </li>
            <li class="nav-item col border-right">
              <a href="/" class="nav-link">Inventory</a>
            </li>
            <li class="nav-item col">
              <a href="/" class="nav-link">Settings</a>
            </li>
          </ul> 
        </div>
    </nav>
    );
  }

  export default Navbar;