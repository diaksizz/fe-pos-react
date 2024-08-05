import "./ProductCard.css";

const ProductCard = ({ rectangle415, productName, mainPrice }) => {
  return (
    <div className="product-card">
      <div className="rectangle-parent2">
        <img className="rectangle-icon" alt="" src={rectangle415} />
        <div className="duotone-button">
          <img
            className="hand-thumbs-up-icon"
            loading="lazy"
            alt=""
            src="/handthumbsup.svg"
          />
        </div>
      </div>
      <div className="product-card-inner">
        <div className="product-name-parent">
          <div className="product-name">{productName}</div>
          <div className="star-parent">
            <img className="star-icon" loading="lazy" alt="" src="/star.svg" />
            <div className="discount">
              <div className="km">3 KM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-card-child">
        <div className="frame-parent18">
          <div className="pricing-wrapper">
            <div className="pricing">
              <b className="main-price">{mainPrice}</b>
            </div>
          </div>
          <div className="primary-button-parent">
            <button className="primary-button4">
              <b className="primary-button5">Sewa</b>
            </button>
            <div className="primary-button6">
              <img className="iconheart" alt="" src="/iconheart.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
