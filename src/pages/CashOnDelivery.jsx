// import React, { useState } from "react";
// import { styling } from "../../style/style.js";

// const CashOnDelivery = () => {
//   const [fullName, setFullName] = useState("");
//   const [address, setAddress] = useState("");
//   const [contactNumber, setContactNumber] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setFullName("");
//     setAddress("");
//     setContactNumber("");
//   };

//   return (
//     <div className="cod-form">
//       <h1>Cash on Delivery Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="fullName">Full Name:</label>
//         <input
//           type="text"
//           id="fullName"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           required
//         />

//         <label htmlFor="address">Address:</label>
//         <textarea
//           id="address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />

//         <label htmlFor="contactNumber">Contact Number:</label>
//         <input
//           type="text"
//           id="contactNumber"
//           value={contactNumber}
//           onChange={(e) => setContactNumber(e.target.value)}
//           required
//         />

//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default CashOnDelivery;
