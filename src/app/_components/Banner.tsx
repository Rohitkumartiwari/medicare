import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Best Piles Treatment In Delhi NCR
          </h1>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Minimal Cut & Pain
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Quick Recovery
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Expert Surgeons
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Pay Later Facility
            </li>
          </ul>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><span className="font-medium">✔</span> Low Cost Price</li>
            <li><span className="font-medium">✔</span> Proper Care</li>
            <li><span className="font-medium">✔</span> Good Facility</li>
            <li><span className="font-medium">✔</span> 24*7 Facility Available</li>
            <li><span className="font-medium">✔</span> Ambulance service available</li>
            <li><span className="font-medium">✔</span> All Types Gov. Medical Card & Pvt. Insurance Card Facility Available</li>
          </ul>
        </div>

        {/* Right Content - Consultation Form */}
        <div className="bg-blue-50 rounded-lg shadow p-6 mt-6 md:mt-0 md:ml-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Book Free Consultation</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name (Optional)"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="+91 Mobile Number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-bold text-green-600">24 hr</h3>
          <p className="text-gray-600">Discharge</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-bold text-green-600">3 Days</h3>
          <p className="text-gray-600">Recovery</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-bold text-green-600">98%</h3>
          <p className="text-gray-600">Patient Satisfaction</p>
        </div>
      </div>

      {/* Hospital Details Section */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Hospital Details</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Apollo Hospital</li>
          <li>Max Hospital</li>
          <li>Fortis Hospital</li>
          <li>Sir Ganga Ram Hospital</li>
          <li>Jeevan Mala Hospital</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
