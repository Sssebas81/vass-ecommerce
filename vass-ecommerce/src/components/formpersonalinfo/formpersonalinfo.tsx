import React, { useState } from "react";

const FormPersonalInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Información guardada correctamente ");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Tell us about yourself
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          We promise that your information is in good hands and that we will
          only use it to help you. Your data is safe with us!
        </p>
      </div>

      {/* Avatar */}
      <div className="relative mb-6">
        <img
          src={
            profileImage ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
        />

        <label
          htmlFor="profile-upload"
          className="absolute bottom-1 right-1 bg-black text-white text-sm rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-800"
        >
          +
        </label>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your full name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Name Last name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Abc@def.com"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Day phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="##########"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-200"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Your country"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Your city"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Full address, Neighbourhood"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="######"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-200"
            />
          </div>
        </div>

        <div className="col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-black text-white rounded-md px-6 py-2 hover:bg-gray-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPersonalInfo;
