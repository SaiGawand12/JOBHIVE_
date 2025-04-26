
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the right plan for your hiring needs. Post jobs, find candidates, and grow your team.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter Plan */}
        <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-600 mb-4">Perfect for small businesses just getting started</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-900">$49</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <Button className="w-full bg-job-blue-500 hover:bg-job-blue-600">Get Started</Button>
          </div>
          <div className="border-t p-6">
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>3 job posts</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Basic candidate filtering</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>30-day listings</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Email support</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Professional Plan - Highlight this one */}
        <div className="border-2 border-job-blue-500 rounded-lg overflow-hidden shadow-md bg-white relative">
          <div className="absolute top-0 right-0 bg-job-blue-500 text-white text-xs font-bold px-3 py-1 uppercase">
            Most Popular
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
            <p className="text-gray-600 mb-4">For growing companies with active hiring needs</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <Button className="w-full bg-job-blue-500 hover:bg-job-blue-600">Get Started</Button>
          </div>
          <div className="border-t p-6">
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>10 job posts</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Advanced candidate filtering</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>60-day listings</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Priority email support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Applicant tracking system</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Featured job listings</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Enterprise Plan */}
        <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-4">Custom solutions for large organizations</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-gray-900">$299</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <Button className="w-full bg-job-blue-500 hover:bg-job-blue-600">Contact Sales</Button>
          </div>
          <div className="border-t p-6">
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Unlimited job posts</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Premium candidate filtering</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>90-day listings</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Advanced reporting & analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>API access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Custom integrations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg border">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Can I change plans later?</h3>
            <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will take effect in the next billing cycle.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Do you offer discounts for annual payments?</h3>
            <p className="text-gray-600">Yes, we offer a 15% discount for all annual subscriptions across all our plans.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Can I try JobHive before purchasing?</h3>
            <p className="text-gray-600">Contact our sales team for a personalized demo and trial period tailored to your company's needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
