const SkeletonCard = () => {
  return (
    <>
      <div className="skeleton-card">
        <div className="skeleton-card-img skeleton"></div>
        <div className="skeleton-card-body">
          <h2 className="skeleton-card-title skeleton"></h2>
          <p className="skeleton-card-intro skeleton"></p>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
