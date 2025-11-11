function CartHero() {
  return (
    <div
      className="relative flex items-center justify-center h-72 bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/CartHero.jpg')",
      }}
    >
      {/* Overlay con blur y fade de color */}
      <div className="absolute inset-0 bg-gray/10 backdrop-brightness-50"></div>

      {/* Contenido centrado */}
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Cart</h1>
        <p className="text-sm opacity-90">
          Home <span className="mx-2">›</span> Cart
        </p>
      </div>
    </div>
  );
}

export default CartHero;