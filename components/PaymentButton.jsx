import { API } from "@/lib/api";
import { useState } from "react";
import { toast } from "react-toastify";

const PaymentButton = ({ createOrder, price }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const orderData = {
        provider: "razorpay",
        gigId: "1",
        amount: "3",
        description: "Gig Payment",
        metadata: {
          title: "Gig Order",
        },
      };

      const response = await API.createOrder(orderData);

      console.log("Payment Order Response:", response);

      if (response && (response.payment_url || response.url)) {
        window.location.href = response.payment_url || response.url; // Redirect to payment link
      } else {
        throw new Error("Invalid payment response: Missing payment URL");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error(error.message || "Payment failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={createOrder}
      disabled={loading}
      className="bg-500 text-black border-black border-2 px-8 py-4 rounded"
    >
      {loading ? "Processing..." : `Order For $${price}`}
    </button>
  );
};

export default PaymentButton;
