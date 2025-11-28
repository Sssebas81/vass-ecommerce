
function ContactHero() {// Componente de héroe para la página de contacto
  return (
    <div
      className="relative flex items-center justify-center h-72 bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/ContactHeroIMG.jpg')",
      }}
    >
      {/* Overlay con blur y fade de color */}
      <div className="absolute inset-0 bg-gray/10 backdrop-brightness-50"></div>

      {/* Contenido centrado */}
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="text-sm opacity-90">
          Home <span className="mx-2">›</span> Contact
        </p>
      </div>
    </div>
  );
}

export default ContactHero;