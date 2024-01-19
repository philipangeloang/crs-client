import React, { useState } from "react";
import { Link } from "react-router-dom";


const Payment = () => {
  return (
    <div>Payment
    <Link to="payment-student">
            <button className="btn border p-2 bg-main-red text-white">
                Student Payment Status
            </button>
            </Link>
    </div>
  )
}

export default Payment