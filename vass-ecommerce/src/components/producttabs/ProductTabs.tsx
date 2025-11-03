import { useState } from "react";

interface ProductTabsProps {
  description: string;
  reviews?: { user: string; comment: string; rating: number }[];
  images?: string[];
}

function ProductTabs({ description, reviews = [], images = [] }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");

  return (
    <div className="mt-12 max-w-6xl mx-auto px-6">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-300 mb-6">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === "description"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === "reviews"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Reviews [{reviews.length}]
        </button>
      </div>

      {/* Tabs Content */}
      <div className="text-gray-700 leading-relaxed">
        {activeTab === "description" && (
          <div>
            <p className="mb-6">{description}</p>

            {/* Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`product-${idx}`}
                  className="rounded-lg shadow-sm object-cover"
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            {reviews.length === 0 ? (
              <p>No reviews yet. Be the first to review this product!</p>
            ) : (
              <ul className="space-y-4">
                {reviews.map((review, idx) => (
                  <li key={idx} className="border-b border-gray-200 pb-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{review.user}</span>
                      <span className="text-yellow-500">
                        {"⭐".repeat(review.rating)}
                      </span>
                    </div>
                    <p className="text-sm mt-1 text-gray-600">{review.comment}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductTabs;
