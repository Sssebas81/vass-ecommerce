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


        </div>
      </div>
    </section>
  );
};

export default ContactSection;
