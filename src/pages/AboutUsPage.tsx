
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About JobHive</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          JobHive is a leading job marketplace dedicated to connecting talented professionals with 
          exceptional employment opportunities across various industries.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to empower careers and drive business growth by creating meaningful connections 
          between employers and job seekers. We believe in a world where everyone can find work that's 
          fulfilling and matches their unique skills and aspirations.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium text-job-blue-500 mb-2">Innovation</h3>
            <p>We constantly push boundaries to create better ways for people to find jobs and for employers to find talent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium text-job-blue-500 mb-2">Integrity</h3>
            <p>We're committed to honesty, transparency, and doing what's right for our users and partners.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium text-job-blue-500 mb-2">Inclusion</h3>
            <p>We believe in creating opportunities for everyone, regardless of background or circumstance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium text-job-blue-500 mb-2">Impact</h3>
            <p>We measure our success by the positive difference we make in people's lives and careers.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Team</h2>
        <p className="mb-6">
          Our diverse team of professionals is passionate about creating the best job search experience. 
          With backgrounds in technology, recruiting, and customer service, we bring a wealth of expertise 
          to help both job seekers and employers achieve their goals.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
