'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const CustomerHeader = (props) => {
  // console.log(props);

  const cartStorage = localStorage.getItem && JSON.parse(localStorage.getItem('cart'));
  const [cartNumber, SetCartNumber] = useState(cartStorage?.length);
  const [cartItem, setCartItem] = useState(cartStorage);

  useEffect(() => {
    if (props.cartData) {
      if (cartNumber) {
        if (cartItem[0].resto_id != props.cartData.resto_id) {
          localStorage.removeItem('cart');
          setCartItem(props.cartData);
          localStorage.setItem('cart', JSON.stringify([props.cartData]));
          SetCartNumber(1);
        } else {
          let localCartItem = cartItem;
          localCartItem.push(JSON.parse(JSON.stringify(props.cartData)));
          setCartItem(localCartItem);
          SetCartNumber(cartNumber + 1);
          localStorage.setItem('cart', JSON.stringify(localCartItem));
        }
      } else {
        SetCartNumber(1);
        setCartItem(props.cartData);
        localStorage.setItem('cart', JSON.stringify([props.cartData]));
      }
    }
  }, [props.cartData]);



  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          style={{ width: 70 }}
          src="https://th.bing.com/th/id/OIP.fWD_FPKA3yY_iKzf6gkMBgAAAA?w=225&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Login</Link>
        </li>
        <li>
          <Link href="/">Signup</Link>
        </li>
        <li>
          <Link href="/">Cart{cartNumber? cartNumber:0}</Link>
        </li>
        <li>
          <Link href="/">Add Restaurant</Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomerHeader;
