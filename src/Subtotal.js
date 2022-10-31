import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                총액 ( 0 tiems) : <strong>0원</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" />
                체크박스입니다.
              </small>
            </>
          )}
          decimalSeparator={"2"}
          value={0}
          displayType={"text"}
          thousandsSeparator={true}
          prefix={"w"}
        />
        <button type="button">결제하기</button>
      </div>
    </div>
  );
}

export default Subtotal;
