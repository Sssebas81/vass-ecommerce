import { useState } from "react";
interface productDetailProps {
    name: string;
    price: string;
    description: string;
    detail:string;
    sku: string;
    category: string;
    tags: string[];
    colors: string[];
    images: string[];
}
function ProductDetail({name, price, detail, sku, category, tags, colors, images} : productDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("gray");
  const [mainImage, setMainImage] = useState("/img/ps5-main.png");

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* LEFT: Imagenes */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Miniaturas */}
        <div className="flex sm:flex-col gap-4 sm:w-1/5">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Vista ${index + 1}`}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 object-contain cursor-pointer rounded-lg border ${
                mainImage === img ? "border-black" : "border-gray-200"
              } hover:border-gray-400 transition`}
            />
          ))}
        </div>

        {/* Imagen principal */}
        <div className="flex-1 bg-gray-50 rounded-xl flex items-center justify-center p-6">
          <img
            src={images[0]}
            alt={name}
            className="object-contain max-h-[400px]"
          />
        </div>
      </div>

      {/* RIGHT: Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-semibold text-gray-900">
          {name}
        </h1>
        <p className="text-gray-500 text-xl mt-2">{price}</p>
        <p className="text-gray-600 text-sm mt-4 max-w-lg">{detail}</p>

        {/* Selector de color */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-2">Color</h4>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-black scale-110"
                    : "border-gray-300"
                } transition`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>

        {/* Cantidad y botones */}
        <div className="mt-6 flex items-center gap-4 flex-wrap">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={handleDecrease}
              className="px-3 py-1 hover:bg-gray-100 font-bold"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-3 py-1 hover:bg-gray-100 font-bold"
            >
              +
            </button>
          </div>

          <button className="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
            Add To Cart
          </button>

          <button className="px-6 py-2 border border-black rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition">
            {/* Icono chat SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Chat with seller
          </button>
        </div>

        {/* Detalles */}
        <div className="mt-8 text-sm text-gray-500 space-y-2">
          <p>
            <span className="font-semibold text-gray-700">SKU:</span>{" "}
            {sku}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Category:</span>{" "}
            {category}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Tags:</span>{" "}
            {tags.join(", ")}
          </p>
          <p className="flex items-center gap-3">
            <span className="font-semibold text-gray-700">Share:</span>
            <a href="#" className="hover:text-black">
              {/* Facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.93H8v-2.87h2V9.8c0-1.99 1.19-3.1 3-3.1.87 0 1.78.15 1.78.15v1.96h-1c-.99 0-1.3.62-1.3 1.26v1.52h2.21l-.35 2.87H12.5v6.93c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
            <a href="#" className="hover:text-black">
              {/* LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3H19ZM8.34 18V10.4H5.67V18H8.34ZM7 9.22A1.55 1.55 0 107 6.12A1.55 1.55 0 007 9.22ZM18.33 18V13.93C18.33 11.58 17.07 10.37 15.19 10.37C13.88 10.37 13.16 11.07 12.84 11.66H12.8V10.4H10.17V18H12.84V14.35C12.84 13.14 13.16 12 14.56 12C15.93 12 16.03 13.29 16.03 14.43V18H18.33Z" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
