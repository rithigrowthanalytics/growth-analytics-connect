
import { ArrowLeft, TrendingUp, LinkedinIcon, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const founders = [
    {
      name: "John Smith",
      position: "Co-Founder & CEO",
      bio: "John brings over 15 years of experience in data analytics and business intelligence. He has led digital transformation initiatives for Fortune 500 companies and has a proven track record of delivering measurable business results through data-driven strategies.",
      expertise: ["Data Strategy", "Business Intelligence", "Digital Transformation"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "john@growthanalytics.com.au"
    },
    {
      name: "Sarah Johnson",
      position: "Co-Founder & CTO",
      bio: "Sarah is a technology leader with deep expertise in artificial intelligence and machine learning. She has spent over 12 years developing innovative AI solutions for healthcare, finance, and retail sectors, helping organizations unlock the power of their data.",
      expertise: ["Artificial Intelligence", "Machine Learning", "Technical Architecture"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "sarah@growthanalytics.com.au"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Growth Analytics</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/our-work" className="text-gray-700 hover:text-blue-600 transition-colors">Our Work</Link>
              <Link to="/about" className="text-blue-600 font-medium">About</Link>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Growth Analytics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Founded by industry leaders with a passion for transforming businesses through data, we combine deep technical expertise with strategic business acumen to deliver exceptional results.
            </p>
            <Link to="/">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Growth Analytics was founded with a simple mission: to help Australian businesses harness the power of data to drive sustainable growth. We recognized that many organizations were sitting on goldmines of data but lacked the expertise to extract meaningful insights.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founders combined their decades of experience in data analytics, artificial intelligence, and business strategy to create a consultancy that bridges the gap between technical capability and business impact.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve clients across Australia and the Asia-Pacific region, helping them transform their operations and achieve measurable results through intelligent use of data and technology.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center" 
                alt="Growth Analytics team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving Growth Analytics forward and delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-center space-x-6 mb-6">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{founder.position}</p>
                        <div className="flex space-x-3">
                          <a href={founder.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                            <LinkedinIcon className="h-5 w-5" />
                          </a>
                          <a href={`mailto:${founder.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {founder.bio}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {founder.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Growth Analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, delivering solutions that exceed expectations and drive real business impact.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We believe in building long-term partnerships with our clients, working collaboratively to achieve shared success.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let's discuss how Growth Analytics can help transform your business through data-driven insights.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
            <Link to="/#contact">
              Get In Touch
            </Link>
          </Button>
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
                <li><Link to="/#services" className="hover:text-white transition-colors">Data Analytics</Link></li>
                <li><Link to="/#services" className="hover:text-white transition-colors">Business Intelligence</Link></li>
                <li><Link to="/#services" className="hover:text-white transition-colors">Artificial Intelligence</Link></li>
                <li><Link to="/#services" className="hover:text-white transition-colors">M&A Advisory</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/our-work" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
