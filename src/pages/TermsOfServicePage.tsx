
import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-8">
          Last updated: April 9, 2025
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern your use of the JobHive website and services. 
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, 
            you may not access the service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accounts</h2>
          <p>
            When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. 
            Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your account and password, including but not limited to restricting access to your computer and/or account. 
            You agree to accept responsibility for any and all activities that occur under your account and/or password.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Listings and Applications</h2>
          <p>
            <strong>For Employers:</strong> You are solely responsible for the content of job listings you post. 
            Job listings must accurately describe the position and must not contain discriminatory requirements or language. 
            JobHive reserves the right to remove any job listing that violates these Terms or applicable laws.
          </p>
          <p>
            <strong>For Job Seekers:</strong> You are responsible for the accuracy of information provided in your profile and job applications. 
            You agree not to misrepresent your qualifications, experience, or identity.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of JobHive. 
            The service is protected by copyright, trademark, and other intellectual property laws.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason, 
            including but not limited to a breach of the Terms.
          </p>
          <p>
            All provisions of the Terms which by their nature should survive termination shall survive termination, 
            including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
          <p>
            In no event shall JobHive, nor its directors, employees, partners, agents, suppliers, or affiliates, 
            be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
            loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your access to or use of or inability to access or use the service;</li>
            <li>Any conduct or content of any third party on the service;</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
            Changes are effective immediately upon posting on the website.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            Email: legal@jobhive.com<br />
            Address: 123 Career Lane, San Francisco, CA 94105, United States
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
