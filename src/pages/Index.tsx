import { ArrowRight, BarChart3, Brain, Building2, CheckCircle, Globe, Mail, MapPin, Phone, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        toast({
          title: "Enquiry Submitted",
          description: "Thank you for your interest. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your enquiry. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Growth Analytics</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <Link to="/our-work" className="text-gray-700 hover:text-blue-600 transition-colors">Our Work</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Button className="bg-blue-600 hover:bg-blue-700"onClick={scrollToContact}>Contact</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Accelerate Your Growth with 
                <span className="text-blue-600"> Data-Driven Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Growth Analytics is a boutique consulting firm specialising in data analytics, artificial intelligence, and mergers & acquisitions. We transform complex data into strategic advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" onClick={scrollToContact}>
                  Contact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                  <Link to="/our-work">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center" 
                alt="Data Analytics Dashboard"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Average Growth</p>
                    <p className="text-2xl font-bold text-gray-900">247%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive solutions across three core areas, helping Australian businesses unlock their full potential through data and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analytics & BI</h3>
                <p className="text-gray-600 mb-6">
                  Transform raw data into actionable insights with advanced analytics, business intelligence, and data visualisation solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data Strategy & Governance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced Analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dashboard Development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Code AI Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Harness the power of AI and machine learning to cleanse and transform data, and identify thematic insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    AI Software as a Service
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cleanse & Transform Data
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Deep Thematic Insights
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">M&A Advisory</h3>
                <p className="text-gray-600 mb-6">
                  Navigate complex mergers and acquisitions with data-driven due diligence and strategic planning support.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Due Diligence Analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Valuation Modeling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Integration Planning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center" 
                alt="Professional team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Australian Leaders
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience in the Australian market and overseas, Growth Analytics has helped multiple organisations transform their operations and grow their business through intelligent use of data and technology.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
                  <div className="text-gray-600">Value Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Industry Verticals</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Serving clients across Australia and the Asia-Pacific region</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Enquiry Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Let's Discuss Your Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to unlock your organization's potential? Get in touch with our experts for a confidential consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+61 400 939 129</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@growthanalytics.com.au</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose Growth Analytics?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Australian-owned and operated
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Deep local market expertise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Proven track record of success
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    End-to-end solution delivery
                  </li>
                </ul>
              </div>
            </div>

            {/* Enquiry Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us an Enquiry</h3>
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  {/* Hidden input for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Honeypot field for spam protection */}
                  <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="ABC Corporation"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+61 400 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="analytics">Analytics & Business Intelligence</option>
                      <option value="ai">No Code AI</option>
                      <option value="ma">Mergers & Acquisitions</option>
                      <option value="other">Other/Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full"
                      placeholder="Tell us about your requirements and how we can help..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Send Enquiry
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Growth Analytics</span>
              </div>
              <p className="text-gray-400 mb-4">
                Boutique consulting firm specialising in data analytics, artificial intelligence, and mergers & acquisitions services.
              </p>
              <p className="text-sm text-gray-400">
                © 2025 Growth Analytics Pty Ltd. All rights reserved.<br />
                ABN: 15 637 610 363
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artificial Intelligence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">M&A Advisory</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
