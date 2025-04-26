
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-8">
          Last updated: April 9, 2025
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p>
            JobHive ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
            please do not access the site.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          
          <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Personal Data</h3>
          <p>
            When you register for an account, we collect personally identifiable information, such as your name, email address, 
            and other contact details. If you're an employer, we may collect company information. If you're a job seeker, 
            we may collect information about your work experience, education, and skills.
          </p>
          
          <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Usage Data</h3>
          <p>
            We may also collect information on how the service is accessed and used. This data may include information such as 
            your computer's IP address, browser type, pages visited, time spent on pages, and other diagnostic data.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p>We may use the information we collect from you for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create and maintain your account</li>
            <li>Connect job seekers with relevant job opportunities</li>
            <li>Allow employers to find suitable candidates</li>
            <li>Improve and personalize your experience</li>
            <li>Send you notifications about new jobs or candidates</li>
            <li>Respond to your customer service requests</li>
            <li>Communicate changes to our service</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclosure of Your Information</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Employers, if you are a job seeker</li>
            <li>Job seekers, if you are an employer</li>
            <li>Service providers who help us operate our platform</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access your personal data</li>
            <li>The right to rectify inaccurate information</li>
            <li>The right to delete your personal data</li>
            <li>The right to restrict processing of your data</li>
            <li>The right to data portability</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: privacy@jobhive.com<br />
            Address: 123 Career Lane, San Francisco, CA 94105, United States
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
