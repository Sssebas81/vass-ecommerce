function Heropagepersonalinfo() {
  return (
    <div
      className="relative flex items-center justify-center h-72 bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/HeroPageShop.png')",
      }}
    >
      {/* Overlay gris */}
      <div className="absolute inset-0 bg-gray/10 backdrop-brightness-50"></div>

      {/* Imagen de fondo con baja opacidad */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/img/personalinfo.jpg"
          alt="Fondo personal info"
          className="w-full h-full object-cover opacity-20" // opacidad baja
        />
      </div>

      {/* Contenido centrado */}
      <div className="relative text-center text-white z-10">
        <h1 className="text-4xl font-bold mb-2">personalinfo</h1>
        <p className="text-sm opacity-90">
          Home <span className="mx-2">›</span> personalinfo
        </p>
      </div>
    </div>
  );
}

export default Heropagepersonalinfo;
