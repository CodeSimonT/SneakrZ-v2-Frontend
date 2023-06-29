import React from "react";

const ShoesLoopMen = (props) => {
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
          <h6 className="card-title">{props.value.title} </h6>
          <p className="card-text footerTextColorGray">{props.value.for}</p>
          <p className="card-text footerTextColorGray">${props.value.price}</p>
          <p className="card-text text- footerTextColorGray">
            {props.value.sale}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoesLoopMen;
