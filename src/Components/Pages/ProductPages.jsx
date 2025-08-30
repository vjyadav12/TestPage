

// import jacket from "../../assets/jacket.png"
const products = [
  {
    id: 1,
    title: "This is where the product title goes",
    subtitle: "(Brand) - Green Jacket",
    price: "000,000₩",
    installment: "Installment: 6 months",
    colors: ["black", "gray", "yellow", "yellow", "yellow", "yellow", "yellow"],
    image:
      'https://res.cloudinary.com/dnfqytupo/image/upload/v1756583257/Jacket_p7sudk.png', 
  },
  {
    id: 2,
    title: "This is where the product title goes",
    subtitle: "(Brand) - Green Jacket",
    price: "000,000₩",
    installment: "Installment: 6 months",
    colors: ["black", "gray", "yellow", "yellow", "yellow", "yellow", "yellow"],
    image:
     'https://res.cloudinary.com/dnfqytupo/image/upload/v1756583257/Jacket_p7sudk.png',
  },
  {
    id: 3,
    title: "This is where the product title goes",
    subtitle: "(Brand) - Green Jacket",
    price: "000,000₩",
    installment: "Installment: 6 months",
    colors: ["black", "gray", "yellow", "yellow", "yellow", "yellow", "yellow"],
    image:
      'https://res.cloudinary.com/dnfqytupo/image/upload/v1756583257/Jacket_p7sudk.png',
  },
  {
    id: 4,
    title: "This is where the product title goes",
    subtitle: "(Brand) - Green Jacket",
    price: "000,000₩",
    installment: "Installment: 6 months",
    colors: ["black", "gray", "yellow", "yellow", "yellow", "yellow", "yellow"],
    image:
      'https://res.cloudinary.com/dnfqytupo/image/upload/v1756583257/Jacket_p7sudk.png',
  },
];

export default function ProductGrid() {
  return (
    <div className="py-10 max-w-6xl mx-auto">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold">This is where the title goes</h2>
        <p className="text-gray-500">
          If a subtitle is needed, it will go here.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition flex flex-col"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover rounded-xl"
            />

            {/* Product Info */}
            <div className="mt-4 flex flex-col flex-grow">
              <h3 className="text-sm font-semibold text-gray-800 truncate">
                {product.title}
              </h3>
              <p className="text-xs text-gray-500">{product.subtitle}</p>

              {/* Color Options */}
              <div className="flex space-x-2 mt-2">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>

              {/* Price Section */}
              <div className="mt-auto pt-3">
                <p className="text-xs text-yellow-600">
                  {product.installment}
                </p>
                <p className="text-lg font-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
