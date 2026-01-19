import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContextCard } from "../../hooks/CartContext";
import { toast } from "react-toastify/unstyled";
import { ToastContainer } from "react-toastify";

const OrderPage = () => {
  const { cart, increase, decrease } = useContext(CartContextCard);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [adress, setAdress] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [cash, setCash] = useState("");
  const [venmo, setVenmo] = useState("");
  const [paypal, setPaypal] = useState("");
  const [amazon, setAmazon] = useState("");
  const [credit, setCredit] = useState("");
  const [oncard, setOnCard] = useState("");
  const [cardnum, setCardNum] = useState("");
  const [date, setDate] = useState("");
  const [cvs, setCvs] = useState("");
  const [order, setOrder] = useState("");
  const [country, setCountry] = useState("");

  const payload = {
    name: name,
    lastname: lastname,
    company: company,
    adress: adress,
    region: region,
    city: city,
    code: code,
    email: email,
    phone: phone,
    cash: cash,
    venmo: venmo,
    paypal: paypal,
    amazon: amazon,
    credit: credit,
    oncard: oncard,
    cardnum: cardnum,
    date: date,
    cvs: cvs,
    order: order,
  };

  let message =
    `Sizga buyurtma keldi!!!\n` +
    `Ism: ${payload.name}\n` +
   `Familiya: ${payload.lastname}\n` +
    `Telefon: ${payload.phone}\n` +
   `Hudud: ${payload.region}\n`;

  const CHAT_ID = `7355610086`;
  const CHAT_TOKEN = `8351817805:AAF10ApcYWfTvoe9adM6iGbfBRmyUoBsjRQ`;

  async function sendTelegram() {
    const message =
      `Sizga buyurtma keldi!!!\n` +
      `Ism: ${payload.name}\n` +
      `Familiya: ${payload.lastname}\n` +
      `Telefon: ${payload.phone}\n` +
      `Hudud: ${payload.region}\n`;

    const CHAT_ID = `7355610086`;
    const CHAT_TOKEN = `8351817805:AAF10ApcYWfTvoe9adM6iGbfBRmyUoBsjRQ`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${CHAT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!res.ok) throw new Error("Telegram API error");

      toast.success("Successfully sent to Telegram");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send to Telegram");
    }
  }
  return (
    <section>
      <div className="container mx-auto p-5 pt-[60px] gap-5 max-w-[1400px] w-full ">
        <div className="flex flex-col lg:flex-row gap-15 p-5 max-w-[1400px] mx-auto">
          {/* LEFT: Checkout Form */}
          <div className="w-full lg:w-2/2 flex flex-col gap-8">
            {/* Billing Information */}
            <div className="grid grid-cols-3 gap-5">
              <input
                required
                placeholder="First Name"
                className="border p-2 rounded-lg text-[20px]"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                placeholder="Last Name"
                className="border p-2 rounded-lg text-[20px] "
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                required
                placeholder="Company Name (Optional)"
                className="border p-2 rounded-lg text-[20px]"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <input
              required
              placeholder="Address"
              className="border p-2 rounded-lg w-full text-[20px]"
              onChange={(e) => setAdress(e.target.value)}
            />

            <div className="grid grid-cols-4 gap-5">
              <select
                className="border p-2 rounded-lg text-[20px]"
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>Country</option>
              </select>
              <select
                className="border p-2 rounded-lg text-[20px]"
                onChange={(e) => setRegion(e.target.value)}
                required
              >
                <option>Region/State</option>
                <option value="">Beketmir</option>
                <option value="">Yunusobod</option>
              </select>
              <select
                className="border p-2 rounded-lg text-[20px] "
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option>City</option>
                <option value="">Toshkent</option>
                <option value="">Qashqadaryo</option>
              </select>
              <input
                required
                placeholder="Zip Code"
                className="border p-2 rounded-lg text-[20px]"
                onChange={(e) => setCode(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <input
                placeholder="Email"
                required
                className="border p-2 rounded-lg text-[20px]"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required
                placeholder="Phone Number"
                className="border p-2 rounded-lg text-[20px]"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                required
                type="checkbox"
                onChange={(e) => setCheckbox(e.target.value)}
              />
              <span>Ship to a different address</span>
            </div>

            <div className="mt-5">
              <h2 className="text-lg font-bold mb-3">Payment Option</h2>
              <div className="flex gap-5">
                <div className="flex flex-col items-center w-[160px] h-[120px] border p-4 rounded-lg">
                  <span className="text-2xl text-orange-500">$</span>
                  <span>Cash on Delivery</span>
                  <input
                    type="radio"
                    onChange={(e) => setCash(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-center border w-[160px] h-[120px] border p-4 rounded-lg">
                  <img
                    className="w-20"
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/85/d4/b0/85d4b098-70fc-e496-5694-a68d48582d20/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png"
                    alt="Venmo"
                  />
                  <span>Venmo</span>
                  <input
                    type="radio"
                    onChange={(e) => setVenmo(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-center border w-[160px] h-[120px] border p-2 rounded-lg">
                  <img
                    className="w-15"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKdzp1L_SBTZINlnxIl-xW35rFCApuAXKHw&s"
                    alt="Paypal"
                  />
                  <span>Paypal</span>
                  <input
                    type="radio"
                    onChange={(e) => setPaypal(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-center border w-[160px] h-[120px] border p-4 rounded-lg">
                  <img
                    className="w-12"
                    src="https://p7.hiclipart.com/preview/723/352/942/amazon-com-amazon-pay-computer-icons-online-shopping-amazon-logo-thumbnail.jpg"
                    alt="Amazon Pay"
                  />
                  <span>Amazon Pay</span>
                  <input
                    type="radio"
                    onChange={(e) => setAmazon(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-center border w-[160px] h-[120px] border p-4 rounded-lg">
                  <span className="text-xl">💳</span>
                  <span className="text-center">Credit/Debit Card</span>
                  <input
                    type="radio"
                    onChange={(e) => setCredit(e.target.value)}
                  />
                </div>
              </div>

              {/* Card Details */}
              <div className="mt-4 grid grid-cols-2 gap-5">
                <input
                  required
                  placeholder="Name on Card"
                  className="border p-2 rounded-lg w-full text-[20px]"
                  onChange={(e) => setOnCard(e.target.value)}
                />
                <input
                  required
                  placeholder="Card Number"
                  className="border p-2 rounded-lg w-full text-[20px]"
                  onChange={(e) => setCardNum(e.target.value)}
                />
                <input
                  required
                  placeholder="Expire Date MM/YY"
                  className="border p-2 rounded-lg w-full text-[20px]"
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  required
                  placeholder="CVC"
                  className="border p-2 rounded-lg w-full"
                  onChange={(e) => setCvs(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-lg font-bold mb-2">Additional Information</h2>
              <textarea
                required
                placeholder="Order Notes (Optional)"
                className="border p-2 rounded-lg w-full h-32 text-[20px]"
                onChange={(e) => setOrder(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/1 flex flex-col gap-5 sticky">
            <h2 className="text-lg font-bold">Order Summary</h2>
            {cart?.map((el) => (
              <div
                key={el.id}
                className="flex items-center border p-3 rounded-lg gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <img
                      className="w-25 mb-2"
                      src={el.thumbnail}
                      alt={el.title}
                    />
                    <span className="font-bold text-[20px]">{el.title}</span>
                  </div>

                  <div className="flex items-center gap-4 ml-20 ">
                    <span className="font-bold text-[20px]">{el.qty}x</span>
                    <span className="text-orange-500 font-bold text-[20px]">
                      $ {(el.price * el.qty).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="border p-3 rounded-lg flex flex-col gap-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  $
                  {cart
                    .reduce((sum, el) => sum + el.price * el.qty, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>$24</span>
              </div>
              <div className="flex justify-between font-bold text-orange-500">
                <span>Total</span>
                <span>
                  $
                  {cart
                    .reduce((sum, el) => sum + el.price * el.qty, 0)
                    .toFixed(2)}
                </span>
              </div>

              <button
                onClick={sendTelegram}
                className="bg-orange-500 text-white py-2 rounded-lg mt-2 cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
