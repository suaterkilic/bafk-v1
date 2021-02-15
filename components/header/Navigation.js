import React, { Fragment } from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <Fragment>
      <div className="left-nav barberry-navigation cell auto">
        <nav className="navigation-foundation">
          <ul
            id="menu-primary-menu"
            className="dropdown menu"
            data-dropdown-menu
            data-hover-delay={150}
            data-closing-time={0}
          >
            <li
              id="menu-item-3609"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3488 current_page_item menu-item-3609 active"
            >
              <Link href="/">
                <a>
                  <span>Ana Sayfa</span>
                </a>
              </Link>
            </li>
            <li
              id="menu-item-3680"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3680"
            >
              <a href="hakkimizda/index.html">
                <span>Biz Kimiz</span>
              </a>
            </li>
            <li
              id="menu-item-3497"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3497 dropdown is-dropdown-submenu-parent is-mega-menu"
            >
              <Link href="/category">
                <a className="dropdown-toggle">
                  <span>Erkek</span>
                </a>
              </Link>
            </li>
            <li
              id="menu-item-3616"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3616"
            >
              <a href="blog/index.html">
                <span>Blog</span>
              </a>
            </li>
           
            
          </ul>
          <div className="menu-trigger grid-x align-middle">
            <div className="nav_burger cell shrink">
              <span className="burger_top" />
              <span className="burger_middle" />
              <span className="burger_bottom" />
            </div>
            <div className="menu-title cell auto">
              <span>Menu</span>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation;
