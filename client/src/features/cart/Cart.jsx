import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
// import { increment, incrementAsync, selectCount } from "./cartSlice";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const Cart = () => {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      <Navbar/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10">
        <h1 className="text-3xl tracking-tight text-gray-900 font-bold py-5">
          Shopping Cart
        </h1>

        <div className="flex flex-col sm:flex-row gap-12">
          {/* Products section */}
          <div className="flex-1">
            <div className="py-5">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="mr-4 inline-block text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty
                          </label>
                          <select id="quantity" className="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order summary section */}
          <div className="flex-1">
            <div className="bg-white w-full sm:w-5/6 p-8 mx-auto sm:ml-16 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Order summary</h2>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-semibold">$99.00</span>
              </div>
              <div className="border-b border-gray-200 mb-3" />
              <div className="flex justify-between items-center mb-3">
                <span className="flex items-center text-gray-700">
                  Shipping estimate
                  <div className="ml-1 h-4 w-4 text-gray-400" />
                </span>
                <span className="font-semibold">$5.00</span>
              </div>
              <div className="border-b border-gray-200 mb-3" />
              <div className="flex justify-between items-center mb-3">
                <span className="flex items-center text-gray-700">
                  Tax estimate
                  <div className="ml-1 h-4 w-4 text-gray-400" />
                </span>
                <span className="font-semibold">$8.32</span>
              </div>
              <div className="border-b border-gray-200 mb-4"></div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-700 font-semibold">Order total</span>
                <span className="text-xl font-bold">$112.32</span>
              </div>
              <Link to="/checkout">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
              </Link>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <Link to="/">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => setOpen(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
