import "../styles/Header.css";

export default function WishlistPanel({ wishlistItems, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="wishlist-panel">
      <div className="panel-header">
        <h3>Favorites</h3>
        <span className="panel-count">
          {wishlistItems.length}{" "}
          {wishlistItems.length === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="panel-items">
        {wishlistItems.length === 0 ? (
          <div className="panel-empty">
            <span className="material-symbols-outlined">favorite</span>
            <p>No favorites yet</p>
          </div>
        ) : (
          wishlistItems
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
                  </div>
                  <div className="panel-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
      {wishlistItems.length > 0 && (
        <div className="panel-footer">
          <button className="panel-view-all" disabled>View All Favorites</button>
        </div>
      )}
    </div>
  );
}
