import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ethers } from "ethers";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

const CheckoutForm = ({ priceUSD, priceETH, ethWallet }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  // Stripe (fiat) payment
  const handleFiatCheckout = async () => {
    setLoading(true);
    const { clientSecret } = await fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: priceUSD * 100 }),
    }).then(r => r.json());

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name: "Customer Name" },
      },
    });

    setLoading(false);
    if (result.error) alert(result.error.message);
    else if (result.paymentIntent.status === "succeeded") alert("Payment successful!");
  };

  // Ethereum (crypto) payment
  const handleCryptoCheckout = async () => {
    if (!window.ethereum) return alert("Please install MetaMask!");
    setLoading(true);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const tx = await signer.sendTransaction({
      to: ethWallet,
      value: ethers.parseEther(priceETH.toString()),
    });

    await tx.wait();
    setLoading(false);
    alert("Crypto payment successful! Tx: " + tx.hash);
  };

  return (
    <div className="flex flex-col gap-4">
      <CardElement className="p-4 border rounded" />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleFiatCheckout}
        disabled={loading}
      >
        Pay ${priceUSD}
      </button>
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded"
        onClick={handleCryptoCheckout}
        disabled={loading}
      >
        Pay {priceETH} ETH
      </button>
    </div>
  );
};

export default function Checkout({ priceUSD, priceETH, ethWallet }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm priceUSD={priceUSD} priceETH={priceETH} ethWallet={ethWallet} />
    </Elements>
  );
}