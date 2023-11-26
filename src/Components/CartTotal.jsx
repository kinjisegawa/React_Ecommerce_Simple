import React from "react";

const CartTotal = ({ cart }) => {
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>
      {cart.length > 0 && (
        <>
          <tr>
            <td colSpan="6">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="4" className="text-right">
              Total Product
            </td>
            <td>{total}</td>
          </tr>
          <tr>
            <td colSpan="4" className="text-right">
              Total Shipping
            </td>
            <td>$2.00</td>
          </tr>
          <tr>
            <td colSpan="4" className="text-right">
              <strong>Total</strong>
            </td>
            <td>{total * 2}</td>
          </tr>
        </>
      )}
    </>
  );
};

export default CartTotal;
