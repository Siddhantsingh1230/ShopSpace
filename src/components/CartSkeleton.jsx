const CartSkeleton = () => {
    return (
      <>
        <div className="cart-skeleton">
          <div className="cart-skeleton-img skeleton"></div>
          <div className="cart-skeleton-body">
            <h2 className="cart-skeleton-title skeleton"></h2>
            <p className="cart-skeleton-subtitle skeleton"></p>
          </div>
        </div>
      </>
    );
  };
  
  export default CartSkeleton;
  