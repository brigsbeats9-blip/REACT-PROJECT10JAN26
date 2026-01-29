/*import React from "react";
//, { useState, useEffect } 
const Cart = ({ cart, changeQuantitiy }) => {
  const total = () => {
  //const [total, setTotal] = useState();
  //useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += +(
         (item.salePrice || item.originalPrice) * item.quantity
      ).toFixed(2);

    });
    //setTotal(price);
  //}, [cart, cart.quantity]);
  return price;
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={book.url}
                          className="cart__book--img"
                          alt=""
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            $
                            {Number(
                              book.salePrice ?? book.originalPrice,
                            ).toFixed(2)}
                          </span>
                          <button className="cart__book--remove">Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          class="cart__input"
                          value={book.quantity}
                          onChange={(event) =>
                            changeQuantitiy(book, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          (book.salePrice || book.originalPrice) * book.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>$9.00</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>$1.00</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() =>
                  alert(
                    `Checkout currently unavailable TIMESTAMP 6:10 Module 5: React Rocketship 2.15 Add To Cart MUST CONFIGURE THIS ON MY OWN`,
                  )
                }
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default Cart;*/

import React, { useMemo } from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantitiy, removeItem }) => {
  // 1️⃣ Calculate subtotal
  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + (item.salePrice || item.originalPrice) * item.quantity;
    }, 0);
  }, [cart]);

  // 2️⃣ Calculate tax (example: 10%)
  const TAX_RATE = 0.1;
  const tax = subtotal * TAX_RATE;

  // 3️⃣ Calculate total
  const total = subtotal + tax;

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              <div className="cart__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item" key={book.id}>
                      <div className="cart__book">
                        <img
                          src={book.url}
                          className="cart__book--img"
                          alt=""
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            $
                            {Number(
                              book.salePrice ?? book.originalPrice,
                            ).toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(book)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(event) =>
                            changeQuantitiy(book, event.target.value)
                          }
                        />
                      </div>

                      <div className="cart__total">
                        $
                        {(
                          (book.salePrice || book.originalPrice) * book.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any books in your cart!</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>

            {/* ✅ ORDER SUMMARY */}
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  className="btn btn__checkout"
                  onClick={() => alert("Checkout currently unavailable")}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
