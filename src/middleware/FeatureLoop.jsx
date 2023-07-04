import React from "react";

const FeatureLoop = (props) => {
  const handleClick = () => {
    // Call the dispatch function
    props.propDispatch(props.value._id);
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
          <p className="yellowGreen mb-2">{props.value.promo}</p>
          <h6 className="card-title">{props.value.title} </h6>
          <p className="card-text footerTextColorGray">{props.value.for}</p>
          <span className="d-flex">
            <p className="card-text text-black me-2 ">${props.value.price}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureLoop;
