import { useState, useEffect } from "react";

type Review = {
    user: string;
    comment: string;
    rating: number;
};

interface ProductTabsProps {
    productId: string | number;
    description: string;
    reviews?: Review[];
    images?: string[];
}

function ProductTabs({ productId, description, reviews = [], images = [] }: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");

    const [userName, setUserName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const [localReviews, setLocalReviews] = useState<Review[]>(() => {
        const saved = localStorage.getItem(`reviews_${productId}`);
        return saved ? JSON.parse(saved) : reviews;
    });

    useEffect(() => {
        localStorage.setItem(`reviews_${productId}`, JSON.stringify(localReviews));
    }, [localReviews]);

    const handleSubmit = () => {
        if (!userName || !comment || rating === 0) return;

        const newReview: Review = { user: userName, comment, rating };

        setLocalReviews([...localReviews, newReview]);
        console.log(reviews);
        
        setUserName("");
        setComment("");
        setRating(0);
    };

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
                    Reviews [{localReviews.length}]
                </button>
            </div>

            {/* Tabs Content */}
            <div className="text-gray-700 leading-relaxed">
                {activeTab === "description" && (
                    <div>
                        <p className="mb-6">{description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {images.map((img, idx) => (
                                <div key={idx} className="w-full h-64 overflow-hidden rounded-lg shadow-sm">
                                    <img
                                        src={img}
                                        alt={`product-${idx}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "reviews" && (
                    <div className="max-w-3xl">
                        {/* FORMULARIO */}
                        <div className="mb-10 p-6 border rounded-lg shadow-sm bg-gray-50">
                            <h3 className="text-lg font-semibold mb-4">Write a Review</h3>

                            <input
                                type="text"
                                placeholder="Your name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full mb-3 p-2 border rounded-md"
                            />

                            <textarea
                                placeholder="Write a review..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full mb-3 p-2 border rounded-md h-24"
                            />

                            {/* ⭐ Estrellas con Hover */}
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`text-2xl cursor-pointer ${
                                            (hoverRating || rating) >= star
                                                ? "text-yellow-500"
                                                : "text-gray-400"
                                        }`}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                            >
                                Submit Review
                            </button>
                        </div>

                        {/* LISTA DE RESEÑAS */}
                        {localReviews.length === 0 ? (
                            <p>No reviews yet. Be the first to review this product!</p>
                        ) : (
                            <ul className="space-y-6">
                                {localReviews.map((review, idx) => (
                                    <li key={idx} className="border-b border-gray-200 pb-4">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">{review.user}</span>
                                            <span className="text-yellow-500 text-lg">
                                                {"★".repeat(review.rating)}
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




