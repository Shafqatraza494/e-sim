"use client";
import Image from "next/image";
import React, { useState } from "react";
import LeftCheckout from "../CheckOutDetailForm/LeftCheckout";
import { useAuth } from "@/Context/AuthContext";
import Form from "../CheckOutDetailForm/Form";
import { useCart } from "@/Context/CartContext";

const CheckOut = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState({ coupon: "", percent: "" });

  const { isAuthenticated } = useAuth();
  const { cartItems, cartProduct, increaseQuantity, decreaseQuantity } =
    useCart();

  // 🔹 API totals
  const summaryData = cartProduct?.data || {};
  const subtotal = summaryData.total_amount || 0;
  const discountAmount = summaryData.discount || 0;
  const balance = summaryData.balance || 0;
  const total =
    (summaryData.amount_deducted_from_card || 0) +
    (summaryData.amount_deducted_from_wallet || 0);

  const handleApply = () => {
    if (coupon) {
      setDiscount({ coupon: coupon, percent: "8" });
    }
  };

  return (
    <div className="flex flex-row gap-20">
      <div className="w-full lg:max-w-[600px]">
        {/* Order Summary Header */}
        <div className="flex flex-row gap-2 ">
          <Image
            className="mb-8"
            height={20}
            width={18}
            src="/checkout/Vector.svg"
            alt=""
          />
          <h1 className="lato-text font-[700] text-[22px] text-[#000000] mb-8">
            Order Summary
          </h1>
        </div>

        <div className="mb-20 w-full">
          {/* Header Row */}
          <ul className="grid grid-cols-4 font-[500] text-[16px] lato-text text-[#3C3C3C] text-center">
            <li className="text-left">Product</li>
            <li>Quantity</li>
            <li>Renew</li>
            <li className="text-right">Price</li>
          </ul>
          <div className="h-[0px] border-[1px] border-[#F2F2F2] mt-2"></div>

          {/* Product Rows */}
          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-4 items-center py-3">
              {/* Product */}
              <div className="flex flex-row gap-1 items-center text-left">
                <Image
                  height={19.83}
                  width={22.51}
                  src={item.countries?.[0]?.image_url || "/checkout/Group.svg"}
                  alt={item.name}
                />
                <p className="text-lato font-[400] text-[14px] text-[#3C3C3C]">
                  {item.title || item.name}
                </p>
              </div>

              {/* Quantity with controls */}
              <div className="flex justify-center">
                <div className="w-[87px] flex flex-row justify-between px-3 items-center rounded-[13.43px] border border-[#000000]">
                  {/* Decrease */}
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="text-[25px] leading-none"
                  >
                    -
                  </button>

                  {/* Count */}
                  <h1 className="text-[12px] font-extrabold">
                    {item.quantity}
                  </h1>

                  {/* Increase (max 5) */}
                  <button
                    onClick={() => {
                      if (item.quantity < 5) {
                        increaseQuantity(item.id);
                      }
                    }}
                    disabled={item.quantity >= 5}
                    className={`text-[25px] leading-none ${
                      item.quantity >= 5 ? "opacity-30 cursor-not-allowed" : ""
                    }`}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Renew */}
              <div className="flex justify-center">
                <input
                  type="checkbox"
                  className="accent-[#EB662B] w-[24px] h-[32px]"
                />
              </div>

              {/* Price */}
              <div className="flex justify-end">
                <button className="w-[64px] h-[32px] rounded-[6px] bg-[#EB662B] text-[#FFFFFF]">
                  ${(item.price * item.quantity).toFixed(2)}
                </button>
              </div>
            </div>
          ))}

          <div className="h-[0px] border-[1px] border-[#F2F2F2] mt-2"></div>

          {/* Pricing Section */}
          <div className="flex flex-row gap-2 mt-5">
            <Image
              height={14}
              width={20.01}
              src="/checkout/Vector (1).svg"
              alt=""
            />
            <h1 className="lato-text font-[700] text-[22px] text-[#000000]">
              Pricing
            </h1>
          </div>

          <div className="h-[31px] rounded-[10px] bg-[#F4F4F4] mt-4 flex flex-row justify-between px-4 items-center">
            <h1 className="text-[#EB662B]">Sub Total</h1>
            <h1 className="text-[#EB662B]">${subtotal.toFixed(2)}</h1>
          </div>

          {/* Discount + Coupon */}
          {discount.coupon && (
            <div className="flex flex-row mt-10 justify-between flex-wrap gap-4">
              <div className="flex flex-row gap-4 items-center">
                <h1 className="work Sans-text font-[500] text-[18px] text-[#000000]">
                  Coupon
                </h1>
                <div className="flex flex-row gap-2 items-center">
                  <button className="w-[98px] h-[30px] rounded-[6px] bg-[#000000] text-[#FFFFFF]">
                    {discount.coupon}
                  </button>
                  <Image
                    height={18}
                    width={18}
                    src="/checkout/Vector (2).svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <button className="w-[64px] h-[32px] rounded-[6px] bg-[#EB662B] text-[#FFFFFF]">
                  {discount.percent}% off
                </button>
              </div>
            </div>
          )}

          {/* Toggle Row */}
          <div
            className="flex flex-row justify-between items-center mt-6 cursor-pointer"
            onClick={() => setShowCoupon(!showCoupon)}
          >
            <div className="flex flex-row items-center gap-2">
              <Image height={24} width={24} src="/checkout/Frame.svg" alt="" />
              <h1 className="text-lato font-[700] text-[22px] text-[#000000]">
                Got a discount code?
              </h1>
            </div>

            <Image
              className={`ml-2 transform transition-transform duration-300 ${
                showCoupon ? "rotate-180" : "rotate-0"
              }`}
              height={12}
              width={12}
              src="/checkout/Vector (3).svg"
              alt=""
            />
          </div>

          {/* Expandable Coupon Section */}
          {showCoupon && (
            <div className="flex flex-row justify-between mt-5 gap-2 animate-fadeIn">
              <input
                className="font-[400] lato-text text-[14px] rounded-[10px] flex-1 h-[31px] bg-[#F4F4F4] px-3"
                type="text"
                placeholder="Enter Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                className="w-[96px] h-[31px] rounded-[10px] bg-[#000000] text-[#FFFFFF]"
                onClick={handleApply}
              >
                Apply
              </button>
            </div>
          )}

          <div className="h-[31px] rounded-[10px] bg-[#F4F4F4] mt-4 flex flex-row justify-between px-4 items-center border-1 border-[#EB662B]">
            <h1 className="text-[#EB662B]">Total</h1>
            <h1 className="text-[#EB662B]">${total.toFixed(2)}</h1>
          </div>

          {/* Checkout button */}
          <div>
            <button className="bg-[#EB662B] text-[#F4F4F4] w-full rounded-[18px] mt-[19px] h-[53px] flex flex-row justify-center gap-2 items-center">
              <Image
                width={24}
                height={24}
                src="/checkout/lock-keyhole-white.svg"
                alt=""
              />
              Go to Secure Checkout
            </button>
            <p className="lato-text font-[500] text-[14px] text-[#3C3C3C] mt-6">
              By clicking 'Go to Secure Checkout' you agree to our Terms of Use
              and Privacy Policy and will be redirected to Stripe for secure
              payment.
            </p>
          </div>
        </div>
      </div>

      {/* Left side form */}
      {isAuthenticated ? <LeftCheckout userBalance={balance} /> : <Form />}
    </div>
  );
};

export default CheckOut;
