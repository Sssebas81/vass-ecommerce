import React, { type FormEvent } from "react";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Get In Touch With Us
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            For More Information About Our Product & Services, Please Feel Free To Drop Us
            <br />
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <img
                src="/img/Location.svg"
                alt="Location icon"
                className="w-6 h-6 mt-1"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Address</h3>
                <p className="text-gray-600 text-sm">
                  236 5th St Avenue,
                  <br />
                  Santiago de Cali, Valle del Cauca, Colombia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src="/img/phone.svg"
                alt="Phone icon"
                className="w-6 h-6 mt-1"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Phone</h3>
                <p className="text-gray-600 text-sm">
                  Mobile: (+57) 3213234567
                  <br />
                  Hotline: (+57) 3013261549
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src="/img/clock.svg"
                alt="Clock icon"
                className="w-6 h-6 mt-1"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Working Time
                </h3>
                <p className="text-gray-600 text-sm">
                  Monday–Friday: 9:00 – 22:00
                  <br />
                  Saturday–Sunday: 9:00 – 21:00
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Abc@def.com"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Optional"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I'd like to ask about..."
                rows={3}
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
