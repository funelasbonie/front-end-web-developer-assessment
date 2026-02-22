import { useState, useEffect, useCallback } from "react";

export function useFavorite(productId, productName, basePrice, selectedColor, wishlistItems, setWishlistItems) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isInWishlist = wishlistItems.some((item) => item.id === productId);
    setIsFavorite(isInWishlist);
  }, [wishlistItems, productId]);

  const handleToggleFavorite = useCallback(() => {
    const item = {
      id: productId,
      name: productName,
      color: selectedColor.name,
      image: selectedColor.image,
      price: basePrice,
    };

    if (isFavorite) {
      setWishlistItems((prev) => prev.filter((w) => w.id !== productId));
      setIsFavorite(false);
    } else {
      setWishlistItems((prev) => [...prev, item]);
      setIsFavorite(true);
    }
  }, [isFavorite, productId, productName, basePrice, selectedColor, setWishlistItems]);

  return { isFavorite, handleToggleFavorite };
}
