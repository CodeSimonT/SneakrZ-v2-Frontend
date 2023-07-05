import React from "react";

const ShoesLoopMen = (props) => {
  const price = parseFloat(props.value.price);
  const salePercentage = parseFloat(props.value.sale);

  const handleClick = () => {
    // Call the dispatch function
    props.propDispatch(props.value._id);
  };

  const applySale = (price, salePercentage) => {
    const discount = (price * salePercentage) / 100;
    return price - discount.toFixed(0).replace(/\.?0+$/, "");
  };
  return (
    <div
      className="col-12 col-md-6 col-lg-4 mb-4 pointer "
      // key={item._id}
      onClick={handleClick}
    >
      <div className="card w-100 cardShadow urbanist">
        <img src={props.value.image} className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title">{props.value.title} </h6>
          <p className="card-text footerTextColorGray">{props.value.for}</p>
          <span className="d-flex">
            <p className="card-text text-black me-2 ">
              ${applySale(price, salePercentage)}
            </p>
            <p className="card-text footerTextColorGray crossedOut">
              ${props.value.price}
            </p>
          </span>
          <p className="card-text yellowGreen">{props.value.sale}% Off</p>
        </div>
      </div>
    </div>
  );
};

export default ShoesLoopMen;
