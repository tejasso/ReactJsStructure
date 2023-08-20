// import React from "react";
// import { NavLink } from "react-router-dom";
// import styles from "./NavigationBar.module.scss";

// const NavigationBar = () => {
//   return (
//     <nav className={styles.nav}>
//       <ul className={styles.navList}>
//         <li className={styles.navItem}>
//           <NavLink to="/" exact activeClassName={styles.active}>
//             Dashboard
//           </NavLink>
//         </li>
//         <li className={styles.navItem}>
//           <NavLink to="/" activeClassName={styles.active}>
//             Report
//           </NavLink>
//         </li>
//         {/* <li className={styles.navItem}>
//           <NavLink to="/products" activeClassName={styles.active}>
//             Products
//           </NavLink>
//         </li> */}
//       </ul>
//       <div className={styles.userProfile}></div>
//     </nav>
//   );
// };

// export default NavigationBar;

import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import styles from "./NavigationBar.module.scss";

const NavigationBar = () => {
  const CustomNavLink = ({ to, children, exact }) => {
    const match = useMatch({ path: to, end: exact });
    return (
      <NavLink to={to} className={match ? styles.active : ""}>
        {children}
      </NavLink>
    );
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <CustomNavLink to="/" exact>
            Dashboard
          </CustomNavLink>
        </li>
        <li className={styles.navItem}>
          <CustomNavLink to="/report">Report</CustomNavLink>
        </li>
        {/* <li className={styles.navItem}>
           <NavLink to="/products" activeClassName={styles.active}>
             Products
           </NavLink>
         </li> */}
      </ul>
      <div className={styles.userProfile}></div>
    </nav>
  );
};

export default NavigationBar;
