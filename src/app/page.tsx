import Banner from "./_components/Banner";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Banner/>
      <div className="w-full h-screen relative">
        <Image 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
          alt="Medical team performing surgery in operating theater"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Thank you</h1>
        </div>
      </div>
    </>
  );
}
