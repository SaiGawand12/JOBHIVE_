
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, BookOpen, FileCheck, MessageCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

const CareerAdvicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Advice & Resources</h1>
        <p className="text-lg text-gray-600">
          Expert tips, guides, and resources to help you navigate your career journey, 
          from job searching to professional development.
        </p>
      </div>
      
      {/* Search section */}
      <div className="bg-job-blue-50 rounded-lg p-8 mb-12">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for career advice..."
              className="w-full px-4 py-3 pl-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-job-blue-500"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <Button variant="outline" className="text-sm bg-white">Resume Writing</Button>
            <Button variant="outline" className="text-sm bg-white">Interview Tips</Button>
            <Button variant="outline" className="text-sm bg-white">Salary Negotiation</Button>
            <Button variant="outline" className="text-sm bg-white">Career Change</Button>
            <Button variant="outline" className="text-sm bg-white">Remote Work</Button>
          </div>
        </div>
      </div>
      
      {/* Featured articles */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "How to Write a Resume That Gets Interviews",
            excerpt: "Learn the essential elements of a standout resume and avoid common mistakes that could cost you the job.",
            image: "bg-job-blue-100",
            icon: <FileCheck className="h-8 w-8 text-job-blue-500" />,
            category: "Resume Tips"
          },
          {
            title: "10 Questions You Should Be Asking in Job Interviews",
            excerpt: "Impress hiring managers and learn valuable information about potential employers with these strategic questions.",
            image: "bg-green-100",
            icon: <MessageCircle className="h-8 w-8 text-green-500" />,
            category: "Interview Prep"
          },
          {
            title: "Negotiating Your Salary: A Step-by-Step Guide",
            excerpt: "Maximize your earning potential with proven techniques for successful salary negotiations.",
            image: "bg-purple-100",
            icon: <Award className="h-8 w-8 text-purple-500" />,
            category: "Salary & Benefits"
          }
        ].map((article, index) => (
          <Card key={index} className="overflow-hidden">
            <div className={`h-40 ${article.image} flex justify-center items-center`}>
              {article.icon}
            </div>
            <div className="p-6">
              <span className="text-sm font-medium text-job-blue-500 mb-2 block">{article.category}</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <Link to="#" className="text-job-blue-500 hover:text-job-blue-600 font-medium inline-flex items-center">
                Read more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Career guides */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Guides</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "The Complete Guide to Career Change in 2025",
            description: "Whether you're looking for a new challenge or pivoting industries entirely, this comprehensive guide covers everything from assessing your transferable skills to landing your first role in a new field.",
            level: "Intermediate",
            time: "25 min read"
          },
          {
            title: "Mastering Remote Job Hunting",
            description: "Discover strategies for finding, applying to, and landing remote positions in today's competitive job market. Includes tips for virtual interviews and standing out online.",
            level: "Beginner",
            time: "18 min read"
          },
          {
            title: "Building Your Personal Brand Online",
            description: "Learn how to leverage social media, personal websites, and networking platforms to create a professional digital presence that attracts recruiters and opportunities.",
            level: "All levels",
            time: "15 min read"
          },
          {
            title: "Advancing Your Career: Moving from Individual Contributor to Manager",
            description: "Navigate the transition from doing the work to leading a team with insights on developing leadership skills and adapting to your new responsibilities.",
            level: "Advanced",
            time: "22 min read"
          }
        ].map((guide, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <BookOpen className="h-6 w-6 text-job-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-3">{guide.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4">Level: {guide.level}</span>
                  <span>{guide.time}</span>
                </div>
                <Link to="#" className="text-job-blue-500 hover:text-job-blue-600 font-medium inline-flex items-center">
                  Read guide <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Career resources */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Free Resources</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "Resume Templates",
            description: "Professional, ATS-friendly resume templates for various industries and experience levels.",
            buttonText: "Download Templates"
          },
          {
            title: "Interview Preparation Checklist",
            description: "A comprehensive checklist to ensure you're fully prepared for your next job interview.",
            buttonText: "Get Checklist"
          },
          {
            title: "Salary Calculator",
            description: "Research competitive compensation based on your role, experience, and location.",
            buttonText: "Calculate Salary"
          }
        ].map((resource, index) => (
          <div key={index} className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <Button className="bg-job-blue-500 hover:bg-job-blue-600 w-full">{resource.buttonText}</Button>
          </div>
        ))}
      </div>
      
      {/* Newsletter sign-up */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Career Tips in Your Inbox</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Join thousands of job seekers who receive our weekly newsletter packed with career advice,
          interview tips, and job search strategies.
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-job-blue-500"
          />
          <Button className="bg-job-blue-500 hover:bg-job-blue-600">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvicePage;
