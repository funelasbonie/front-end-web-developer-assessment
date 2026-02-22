import { useState, useRef } from "react";
import "../styles/Header.css";
import { useClickOutside } from "../hooks/useClickOutside";
import CartPanel from "./CartPanel";
import WishlistPanel from "./WishlistPanel";

export default function Header({ cartItems = [], wishlistItems = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [cartPanelOpen, setCartPanelOpen] = useState(false);
  const [wishlistPanelOpen, setWishlistPanelOpen] = useState(false);
  
  const cartPanelRef = useRef(null);
  const wishlistPanelRef = useRef(null);
  
  useClickOutside(cartPanelRef, () => setCartPanelOpen(false));
  useClickOutside(wishlistPanelRef, () => setWishlistPanelOpen(false));

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 250);
    } else {
      setMenuOpen(true);
    }
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
          <div className="panel-wrapper" ref={cartPanelRef}>
            <button 
              className={`icon-button cart-btn ${cartPanelOpen ? "active" : ""}`} 
              title="View Cart"
              onClick={() => {
                setCartPanelOpen(!cartPanelOpen);
                setWishlistPanelOpen(false);
              }}
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="icon-count">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </button>
            <CartPanel 
              cartItems={cartItems} 
              isOpen={cartPanelOpen} 
            />
          </div>
          
          <div className="panel-wrapper" ref={wishlistPanelRef}>
            <button 
              className={`icon-button wishlist-btn ${wishlistPanelOpen ? "active" : ""}`} 
              title="View Favorites"
              onClick={() => {
                setWishlistPanelOpen(!wishlistPanelOpen);
                setCartPanelOpen(false);
              }}
            >
              <span className="material-symbols-outlined">favorite</span>
              <span className="icon-count">{wishlistItems.length}</span>
            </button>
            <WishlistPanel 
              wishlistItems={wishlistItems} 
              isOpen={wishlistPanelOpen} 
            />
          </div>
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
      {(menuOpen || isClosing) && (
        <>
          <div className={`mobile-overlay ${isClosing ? "closing" : ""}`} onClick={toggleMenu}></div>
          <aside className={`mobile-menu ${isClosing ? "closing" : ""}`}>
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
                  <span className="icon-count">{wishlistItems.length}</span>
                </button>
                <button className="icon-button cart-btn" title="View Cart">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  <span className="icon-count">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </button>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
