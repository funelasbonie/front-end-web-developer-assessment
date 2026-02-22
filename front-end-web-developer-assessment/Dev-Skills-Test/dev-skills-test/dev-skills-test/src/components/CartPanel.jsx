import "../styles/Header.css";

export default function CartPanel({ cartItems, isOpen }) {
  if (!isOpen) return null;

  const grandTotal = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="cart-panel">
      <div className="panel-header">
        <h3>Recent Cart Items</h3>
        <span className="panel-count">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="panel-items">
        {cartItems.length === 0 ? (
          <div className="panel-empty">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p>Your cart is empty</p>
          </div>
        ) : (
          cartItems
            .slice(-5)
            .reverse()
            .map((item, index) => (
              <div key={index} className="panel-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="panel-item-image"
                />
                <div className="panel-item-details">
                  <h4 className="panel-item-name">{item.name}</h4>
                  <div className="panel-item-info">
                    <span>{item.color}</span>
                    <span>•</span>
                    <span>Size {item.size}</span>
                    <span>•</span>
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <div className="panel-item-price">${item.total.toFixed(2)}</div>
                </div>
              </div>
            ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="panel-footer">
          <div className="panel-total">
            <span>Total:</span>
            <strong>${grandTotal.toFixed(2)}</strong>
          </div>
          <button className="panel-view-all" disabled>View Full Cart</button>
        </div>
      )}
    </div>
  );
}
