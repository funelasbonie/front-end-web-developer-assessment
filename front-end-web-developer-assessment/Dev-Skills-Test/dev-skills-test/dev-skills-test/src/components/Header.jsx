import { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(true);
  };

  return (
    <header className="site-header">
      {/* Top Help Bar */}
      <nav className="top-nav">
        <button className="icon-button helpcenter" title="Help Center">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
      </nav>

      {/* Main Navigation */}
      <nav className="main-nav">
        <a className="logo" href="#">
          <img
            src="https://ik.imagekit.io/i9tsuapxspz/20230130000/tr:w-200/Site_Assets/header-logo.svg?ik-sdk-version=react-1.1.1"
            alt="Geiger Logo"
          />
        </a>

        <div className="search-form-container">
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="search-input"
              className="search-form-input"
              placeholder="Search Products"
              autoComplete="off"
            />
            <label htmlFor="search-input" id="search-label">
              <span className="material-symbols-outlined search-icon">
                search
              </span>
            </label>
          </form>
        </div>

        <div className="nav-icons-container">
          <button className="icon-button cart-btn" title="View Cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="icon-count">0</span>
          </button>
          <button className="icon-button wishlist-btn" title="View Favorites">
            <span className="material-symbols-outlined">favorite</span>
            <span className="icon-count">0</span>
          </button>
          <button className="login-btn" title="Log In">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="icon-label">Log In</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="icon-button mobile-menu-btn mobile-only"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Category Navigation (Desktop) */}
      <nav className="category-nav desktop-only">
        <ul>
          <li>
            <a href="#">Apparel</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Drinkware</a>
          </li>
          <li>
            <a href="#">Gift Giving</a>
          </li>
          <li>
            <a href="#">Marketing</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
          <li>
            <a href="#">View All</a>
          </li>
          <li>
            <a href="#">Expo</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <>
          <div className="mobile-overlay" onClick={toggleMenu}></div>
          <aside className="mobile-menu">
            <header className="mobile-menu-header">
              <span className="material-symbols-outlined red-icon">menu</span>
              <h3>Menu</h3>
              <span
                className="material-symbols-outlined red-icon close-btn"
                onClick={toggleMenu}
              >
                close
              </span>
            </header>

            <div className="mobile-menu-body">
              <div className="mobile-menu-left">
                <img
                  src="https://ik.imagekit.io/i9tsuapxspz/20230130000/tr:w-200/Site_Assets/header-logo.svg?ik-sdk-version=react-1.1.1"
                  alt="Geiger Logo"
                  className="mobile-logo"
                />
                <ul className="mobile-links">
                  <li>
                    <a href="#">Apparel</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Drinkware</a>
                  </li>
                  <li>
                    <a href="#">Gift Giving</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                  <li>
                    <a href="#">Sale</a>
                  </li>
                  <li>
                    <a href="#">View All</a>
                  </li>
                  <li>
                    <a href="#">Expo</a>
                  </li>
                  <li>
                    <a href="#">Custom Orders</a>
                  </li>
                </ul>
              </div>

              <div className="mobile-menu-right">
                <button className="icon-button helpcenter" title="Help Center">
                  <span className="material-symbols-outlined">
                    help_outline
                  </span>
                </button>
                <button className="icon-button accountprofile" title="Account">
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                </button>
                <button className="icon-button wishlist-btn" title="Favorites">
                  <span className="material-symbols-outlined">favorite</span>
                  <span className="icon-count">0</span>
                </button>
                <button className="icon-button cart-btn" title="View Cart">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  <span className="icon-count">0</span>
                </button>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
