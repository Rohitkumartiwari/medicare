"use client"
import React, { useState } from 'react';
import axios, { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Form validation schema
const formSchema = z.object({
  patientName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().regex(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;
const Banner: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });



  const onSubmit: SubmitHandler<FormData> = async (data) => {


    try {
      const response = await axios.post('/api/send-query', data);
      toast.success(response.data?.message)
      reset()
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error?.response?.data?.message)
      }
    }

  };

  return (
    <main className="bg-gray-50 p-4 md:p-10">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6">
        {/* Left Content */}
        <article className="flex-1 space-y-4 w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Best Piles Treatment In Delhi NCR
          </h1>
          <section>
            <h2 className="sr-only">Key Benefits</h2>
            <ul className="space-y-2 text-gray-600" role="list">
              <li className="flex items-center">
                <span className="text-green-500 mr-2" aria-hidden="true">✔</span> Minimal Cut & Pain
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
            <ul className="space-y-1 text-gray-600 text-sm" role="list">
              <li><span className="font-medium" aria-hidden="true">✔</span> Low Cost Price</li>
              <li><span className="font-medium">✔</span> Proper Care</li>
              <li><span className="font-medium">✔</span> Good Facility</li>
              <li><span className="font-medium">✔</span> 24*7 Facility Available</li>
              <li><span className="font-medium">✔</span> Ambulance service available</li>
              <li><span className="font-medium">✔</span> All Types Gov. Medical Card & Pvt. Insurance Card Facility Available</li>
            </ul>
          </section>
        </article>

        {/* Right Content - Consultation Form */}
        <aside className="bg-blue-50 w-1/2 rounded-lg shadow p-6 mt-6 md:mt-0 md:ml-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Book Free Consultation</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} aria-label="Consultation booking form">
            <div>
              <label htmlFor="patientName" className="sr-only">Patient Name</label>
              <input
                id="patientName"
                type="text"
                placeholder="Patient Name"
                {...register('patientName')}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.patientName && (
                <p className="text-red-500 text-sm mt-1">{errors.patientName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register('email')}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="mobile" className="sr-only">Mobile Number</label>
              <input
                id="mobile"
                type="tel"
                placeholder="+91 Mobile Number"
                {...register('mobile')}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                {...register('message')}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              {isSubmitting ? 'Booking...' : 'Book Now'}
            </button>
          </form>
        </aside>
      </section>

      {/* Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
        <article className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-bold text-green-600">24 hr</h3>
          <p className="text-gray-600">Discharge</p>
        </article>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-bold text-green-600">3 Days</h3>
          <p className="text-gray-600">Recovery</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-bold text-green-600">98%</h3>
          <p className="text-gray-600">Patient Satisfaction</p>
        </div>
      </section>

      {/* Hospital Details Section */}
      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Hospital Details</h2>
        <ul className="list-disc pl-5 text-gray-600" role="list">
          <li>Apollo Hospital</li>
          <li>Max Hospital</li>
          <li>Fortis Hospital</li>
          <li>Sir Ganga Ram Hospital</li>
          <li>Jeevan Mala Hospital</li>
        </ul>
      </section>
    </main>
  );
};

export default Banner;
