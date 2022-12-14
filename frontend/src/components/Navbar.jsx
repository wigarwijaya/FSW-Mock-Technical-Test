import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";

const Navbar = () => (
    <header>
      <div className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} bg-secondary flex items-center justify-between`}>
        <Link to="/">
          <h1 className="text-primary">Todo List</h1>
        </Link>
        <nav className="flex items-center">
          <div>
            <Link className="text-primary ml-2" to="/login">Log in</Link>
            <Link className="text-primary ml-2" to="/signup">Sign up</Link>
          </div>
        </nav>
      </div>
    </header>
  );

export default Navbar;

// {user && (
//     <div>
//       {user.email}
//       <button onClick={handleClick}>Log out</button>
//     </div>
//   )}
//   {!user && (
//     <div>
//       <Link to="/login">Log in</Link>
//       <Link to="/signup">Sign up</Link>
//     </div>
//   )}
