import { useState, useRef } from "react";
import "../styles/ProductPage.css";
import productData from "../data/product.json";
import { useDeliveryDate } from "../hooks/useDeliveryDate";
import { useToast } from "../hooks/useToast";
import { useShareLinks } from "../hooks/useShareLinks";
import { useClickOutside } from "../hooks/useClickOutside";
import { useFavorite } from "../hooks/useFavorite";

export default function ProductPage({ cartItems, setCartItems, wishlistItems, setWishlistItems }) {
  const { id, name, basePrice, description, colors, sizes, delivery } =
    productData;

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState(false);
  
  const { toastMessage, showToast } = useToast();
  const { shareUrl, facebookHref, xHref } = useShareLinks();
  const shareBarRef = useRef(null);
  
  const { isFavorite, handleToggleFavorite } = useFavorite(
    id,
    name,
    basePrice,
    selectedColor,
    wishlistItems,
    setWishlistItems
  );

  useClickOutside(shareBarRef, () => setExpanded(false));

  const handleColorChange = (color) => {
    if (color.name === selectedColor.name) return;
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    const newItem = {
      id,
      name,
      color: selectedColor.name,
      colorHex: selectedColor.hex,
      image: selectedColor.image,
      size: selectedSize,
      quantity,
      price: basePrice,
      total: quantity * basePrice,
    };
    setCartItems((prev) => [...prev, newItem]);
    setQuantity(1);
    showToast(`Added ${quantity} ${quantity === 1 ? "item" : "items"} to cart!`);
  };

  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: newQuantity,
              total: item.price * newQuantity,
            }
          : item
      )
    );
  };

  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleIncrease = () => setQuantity((q) => q + 1);

  const deliveryDate = useDeliveryDate(delivery);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <main className="product-page">
      <div className="product-wrapper">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="/geigerstore">Home</a> &gt; <span>{name}</span>
            </li>
          </ul>
        </div>

        <header className="product-header">
          <div className="share-bar" ref={shareBarRef}>
            <i
              className="material-symbols-outlined filled share-icon"
              title="Share"
              onClick={() => setExpanded((prev) => !prev)}
            >
              share
            </i>

            <div className={`flyout ${expanded ? "expanded" : ""}`}>
              <button
                className="material-symbols-outlined link-icon"
                title="Copy Link"
                onClick={() => navigator.clipboard.writeText(shareUrl)}
              >
                link
              </button>

              <a
                href={facebookHref}
                target="_blank"
                rel="noreferrer"
                title="Share on Facebook"
                className="social"
              >
                <div className="social-container">
                  <svg
                    role="img"
                    aria-label="facebook"
                    className="social-svg"
                    viewBox="0 0 64 64"
                  >
                    <g className="social-svg-icon">
                      <path d="M0,0H64V64H0ZM0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z" />
                    </g>
                    <g className="social-svg-mask facebook">
                      <path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z" />
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href={xHref}
                target="_blank"
                rel="noreferrer"
                title="Share on X"
                className="social"
              >
                <div className="social-container">
                  <svg
                    role="img"
                    aria-label="x"
                    className="social-svg"
                    viewBox="0 0 64 64"
                  >
                    <g className="social-svg-icon">
                      <path d="M0,0H64V64H0ZM16,17.5l10.1,0L33.1,26.8L41.2,17.5l4.9,0L35.4,29.8L48,46.5L38.1,46.5L30.4,36.4L21.5,46.5L16.6,46.5L28.1,33.4L16,17.5z" />
                    </g>
                    <g className="social-svg-mask x">
                      <path d="M0,0v64h64V0H0z M16,17.5l10.1,0L33.1,26.8L41.2,17.5l4.9,0L35.4,29.8L48,46.5L38.1,46.5L30.4,36.4L21.5,46.5L16.6,46.5L28.1,33.4L16,17.5z" />
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <i
            className={`material-symbols-outlined favorite-icon ${isFavorite ? "filled active" : ""}`}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            onClick={handleToggleFavorite}
            style={{ cursor: "pointer" }}
          >
            {isFavorite ? "favorite" : "favorite_border"}
          </i>
        </header>

        <div className="product-title-block">
          <h2 id="itemTitle">{name}</h2>
          <span className="sku">{id}</span>
        </div>

        <section className="product-container">
          <div className="product-images">
            <img
              src={selectedColor.image}
              alt={`${name} in ${selectedColor.name}`}
              className="main-image"
            />
          </div>

          <div className="product-details">
            <p className="price">${basePrice.toFixed(2)}</p>
            <p className="desc">{description}</p>

            <div className="color-section">
              <label>COLOR:</label>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    style={{ backgroundColor: color.hex }}
                    className={`color-swatch ${
                      selectedColor.name === color.name ? "selected" : ""
                    }`}
                    onClick={() => handleColorChange(color)}
                    title={color.name}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="size-section">
              <label>SIZE:</label>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <label htmlFor="quantity">QUANTITY:</label>
              <div className="quantity-wrapper">
                <button
                  className="quantity-btn-decrease"
                  onClick={handleDecrease}
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >
                  <i className="material-symbols-outlined">remove</i>
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 1;
                    setQuantity(Math.max(1, val));
                  }}
                  className="qty-input"
                />
                <button
                  className="quantity-btn-increase"
                  onClick={handleIncrease}
                  aria-label="Increase quantity"
                >
                  <i className="material-symbols-outlined">add</i>
                </button>
              </div>
            </div>

            <button 
              className="add-to-cart" 
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>

            <div className="notice-box warning">
              <header>
                <i className="material-symbols-outlined filled warning-icon">
                  warning
                </i>
                <h3 className="warning-text">PLEASE NOTE</h3>
              </header>
              <p className="onDemandMsg">
                <span>
                  This item is produced on-demand and takes longer to ship.
                  Please refer to the "Estimated Delivery" section below.
                </span>
                <span>
                  Please review the sizing chart before ordering as on-demand
                  items may not be returned unless defective. See our FAQ's page
                  for more information.
                </span>
              </p>
            </div>

            <div className="notice-box delivery formatted">
              <header>
                <i className="material-symbols-outlined filled delivery-icon">
                  local_shipping
                </i>
                <h3 className="delivery-text">ESTIMATED DELIVERY</h3>
              </header>
              <section className="delivery">
                <div>
                  <label>Processing:</label>
                  <p>1 Business Day</p>
                </div>
                <div>
                  <label>Production:</label>
                  <p>10 Business Days</p>
                </div>
                <div>
                  <label>Transit:</label>
                  <p>5 Business Days</p>
                </div>
              </section>

              <section className="calendar">
                <i className="material-symbols-outlined filled calendar-icon">
                  calendar_month
                </i>
                <div>
                  <h4>{deliveryDate.month}</h4>
                  <h1>{deliveryDate.day}</h1>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>

      {toastMessage && (
        <div className="toast-notification">
          <i className="material-symbols-outlined">check_circle</i>
          <span>{toastMessage}</span>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <div className="cart-summary-header">
            <h2 className="cart-summary-title">
              <i className="material-symbols-outlined">shopping_cart</i>
              Cart Summary ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
            </h2>
          </div>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={`${item.name} in ${item.color}`} />
                  <div
                    className="cart-item-color-indicator"
                    style={{ backgroundColor: item.colorHex }}
                    title={item.color}
                  ></div>
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-attributes">
                    <span className="cart-item-attribute">
                      <strong>Color:</strong> {item.color}
                    </span>
                    <span className="cart-item-attribute">
                      <strong>Size:</strong> {item.size}
                    </span>
                  </div>
                  <div className="cart-item-quantity-controls">
                    <label>Quantity:</label>
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => handleUpdateQuantity(index, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <i className="material-symbols-outlined">remove</i>
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleUpdateQuantity(index, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <i className="material-symbols-outlined">add</i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-delivery">
                    <i className="material-symbols-outlined">local_shipping</i>
                    <span>Est. Delivery: {deliveryDate.month} {deliveryDate.day}</span>
                  </div>
                </div>
                <div className="cart-item-price-section">
                  <div className="cart-item-unit-price">${item.price.toFixed(2)} each</div>
                  <div className="cart-item-price">${item.total.toFixed(2)}</div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => handleRemoveItem(index)}
                  aria-label="Remove item"
                  title="Remove item"
                >
                  <i className="material-symbols-outlined">delete_outline</i>
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary-footer">
            <div className="cart-total">
              <div className="cart-total-label">Grand Total:</div>
              <div className="cart-total-amount">${cartTotal.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
