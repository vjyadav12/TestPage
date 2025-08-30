

export default function SeasonSelection() {
const products = [
  {
    img: 'https://res.cloudinary.com/dnfqytupo/image/upload/v1756583256/74775730-cd51-4787-ab01-35ccc07f1120_ru1dfi.webp',
    title: "Anorak that can be worn comfortably without burden in any season",
    categories: ["Category 1", "Category 2", "Category 3"],
  },
  {
    img: 'https://res.cloudinary.com/dnfqytupo/image/upload/v1756583264/asian-teenager-standing-with-book-park_gvvhsl.jpg',
    title: "Lightweight vest that maintains warmth",
    categories: ["Category 1", "Category 2", "Category 3"],
  },
  {
    img: 'https://res.cloudinary.com/dnfqytupo/image/upload/v1756583264/man-winter-outfit-posing-outdoors-front-gate_rlcsfq.jpg',
    title: "Perfect fleece when cozy warmth is needed",
    categories: ["Category 1", "Category 2", "Category 3"],
  },
  {
    img: 'https://res.cloudinary.com/dnfqytupo/image/upload/v1756583261/man-navy-jacket-shorts-streetwear_altxin.jpg',
    title: "A jacket that's popular when the chilly wind blows in autumn",
    categories: ["Category 1", "Category 2", "Category 3"],
  },
];


  return (
    <div className="py-10 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-xl font-bold mb-6">
        Season Selection: Style and Practicality All in One
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <p className="text-sm font-medium mb-3">{item.title}</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              {item.categories.map((cat, i) => (
                <span key={i}>{cat}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
