function Savings() {
  return (
    <div className="container mx-auto mt-10">
      <form
        action="#"
        className="max-w-xl mx-auto 
                                bg-white p-8 rounded 
                                shadow-lg"
      >
        <div
          className="grid grid-cols-1 
                        md:grid-cols-2 gap-6"
        >
          <div>
            <h3
              className="text-lg font-semibold 
                               text-red-600 mb-4"
            >
              Billing Address
            </h3>
            <div className="mb-4">
              <label
                for="name"
                className="block text-sm 
                                      font-medium text-gray-700"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
                className="mt-1 block w-full 
                                      border-gray-300 rounded-md 
                                      shadow-sm focus:ring-red-500
                                      focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="email"
                className="block text-sm font-medium
                                      text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email ID"
                required
                className="mt-1 block w-full 
                                      border-gray-300
                                      rounded-md shadow-sm 
                                      focus:ring-red-500 
                                      focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="address"
                className="block text-sm font-medium
                                      text-gray-700"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your Address"
                required
                className="mt-1 block w-full border-gray-300
                                      rounded-md shadow-sm 
                                      focus:ring-red-500 
                                      focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="city"
                className="block text-sm font-medium 
                                      text-gray-700"
              >
                City:
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                required
                className="mt-1 block w-full 
                                      border-gray-300 rounded-md
                                      shadow-sm focus:ring-red-500
                                      focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="state"
                className="block text-sm font-medium
                                      text-gray-700"
              >
                State:
              </label>
              <input
                type="text"
                id="state"
                placeholder="Enter your state"
                required
                className="mt-1 block w-full 
                                      border-gray-300
                                      rounded-md shadow-sm
                                      focus:ring-red-500 
                                      focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="zip"
                className="block text-sm font-medium
                                      text-gray-700"
              >
                Zip code:
              </label>
              <input
                type="text"
                id="zip"
                placeholder="Enter your zip code"
                required
                className="mt-1 block w-full 
                                      border-gray-300 rounded-md 
                                      shadow-sm focus:ring-red-500
                                      focus:border-red-500"
              />
            </div>
          </div>
          <div>
            <h3
              className="text-lg font-semibold 
                               text-red-600 mb-4"
            >
              Payment
            </h3>
            <div className="mb-4">
              <label
                for="cardName"
                className="block text-sm font-medium
                                      text-gray-700"
              >
                Name On Card:
              </label>
              <input
                type="text"
                id="cardName"
                placeholder="Enter card name"
                required
                className="mt-1 block w-full 
                                      border-gray-300 rounded-md 
                                      shadow-sm focus:ring-red-500
                                      focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="cardNumber"
                className="block text-sm font-medium 
                                      text-gray-700"
              >
                Credit Card Number:
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Enter card number"
                required
                className="mt-1 block w-full 
                                      border-gray-300 rounded-md
                                      shadow-sm focus:ring-red-500
                                      focus:border-red-500"
              />
            </div>
            <div className="flex justify-between mb-4">
              <div className="w-1/2 mr-2">
                <label
                  for="expMonth"
                  className="block text-sm font-medium
                                          text-gray-700"
                >
                  Expiration Month:
                </label>
                <input
                  type="text"
                  id="expMonth"
                  placeholder="MM"
                  required
                  className="mt-1 block w-full 
                                          border-gray-300 rounded-md
                                          shadow-sm focus:ring-red-500
                                          focus:border-red-500"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  for="expYear"
                  className="block text-sm 
                                          font-medium 
                                          text-gray-700"
                >
                  Expiration Year:
                </label>
                <input
                  type="text"
                  id="expYear"
                  placeholder="YYYY"
                  required
                  className="mt-1 block w-full 
                                          border-gray-300 
                                          rounded-md shadow-sm
                                          focus:ring-red-500 
                                          focus:border-red-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                for="cvv"
                className="block text-sm 
                                      font-medium 
                                      text-gray-700"
              >
                CVV:
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="Enter CVV"
                required
                className="mt-1 block w-full 
                                      border-gray-300 rounded-md
                                      shadow-sm focus:ring-red-500
                                      focus:border-red-500"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Proceed to Checkout"
          id="checkoutBtn"
          className="mt-6 px-4 py-2 bg-red-600 text-white
                          rounded-md hover:bg-red-700"
        />
      </form>
    </div>
  );
}

export default Savings;
