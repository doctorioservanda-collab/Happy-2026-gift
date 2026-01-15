function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🎁 Happy 2026 Gift</h1>
        <div className="flex gap-6">
          <span className="text-gray-600">Home</span>
          <span className="text-gray-600">Shop</span>
          <span className="text-gray-600">Cart</span>
        </div>
      </div>

      {/* HERO */}
      <div className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">
          Thoughtful Gifts for Every Moment 🎉
        </h2>
        <p className="text-gray-600 mb-6">
          Make your loved ones smile with special gifts
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Shop Now
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="px-6 pb-20">
        <h3 className="text-2xl font-bold mb-6">Featured Gifts</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Luxury Gift Box", price: "₦15,000" },
            { name: "Birthday Surprise", price: "₦10,000" },
            { name: "Love Package", price: "₦12,000" },
            { name: "New Year Hamper", price: "₦20,000" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4"
            >
              <div className="h-40 bg-gray-200 rounded mb-3"></div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-green-600 font-bold">{item.price}</p>
              <button className="mt-3 w-full bg-black text-white py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
