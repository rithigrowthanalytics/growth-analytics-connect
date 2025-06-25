
import { ArrowLeft, ArrowRight, Building2, TrendingUp, Users, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const OurWork = () => {
  const caseStudies = [
    {
      title: "Retail Chain Digital Transformation",
      client: "Major Australian Retailer",
      industry: "Retail",
      challenge: "Legacy systems and disconnected data sources were hindering growth and customer insights.",
      solution: "Implemented comprehensive BI dashboard and AI-powered customer segmentation system.",
      results: [
        "47% increase in customer retention",
        "32% improvement in inventory turnover",
        "$2.8M additional revenue in first year"
      ],
      technologies: ["Power BI", "Azure ML", "SQL Server"],
      icon: Building2
    },
    {
      title: "Healthcare Analytics Platform",
      client: "Regional Health Network",
      industry: "Healthcare",
      challenge: "Patient data scattered across multiple systems, limited visibility into operational efficiency.",
      solution: "Built integrated analytics platform with real-time dashboards and predictive analytics.",
      results: [
        "25% reduction in patient wait times",
        "18% improvement in resource utilization",
        "Enhanced patient satisfaction scores"
      ],
      technologies: ["Tableau", "Python", "AWS"],
      icon: TrendingUp
    },
    {
      title: "M&A Due Diligence Success",
      client: "Private Equity Firm",
      industry: "Financial Services",
      challenge: "Complex acquisition requiring rapid financial and operational analysis of target company.",
      solution: "Comprehensive due diligence analytics including financial modeling and risk assessment.",
      results: [
        "Identified $5M in cost synergies",
        "Reduced due diligence timeline by 40%",
        "Successful acquisition completed"
      ],
      technologies: ["Excel", "R", "Financial Modeling"],
      icon: Users
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "Chief Technology Officer",
      company: "RetailCorp Australia",
      content: "Growth Analytics transformed our approach to data. Their team didn't just deliver analytics - they provided strategic insights that directly impacted our bottom line. The 47% increase in customer retention speaks for itself.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      position: "CEO",
      company: "HealthNet Regional",
      content: "The analytics platform Growth Analytics built for us has been game-changing. We now have real-time visibility into our operations and can make data-driven decisions that improve patient outcomes.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      position: "Partner",
      company: "Capital Growth Partners",
      content: "Their M&A advisory services are exceptional. The team's ability to quickly analyze complex financial data and identify key insights was crucial to our successful acquisition. Highly recommended.",
      rating: 5
    },
    {
      name: "David Kim",
      position: "Operations Director",
      company: "Manufacturing Solutions Ltd",
      content: "Working with Growth Analytics was seamless. They understood our business needs immediately and delivered solutions that exceeded our expectations. The ROI was evident within the first quarter.",
      rating: 5
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
              <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <Link to="/our-work" className="text-blue-600 font-medium">Our Work</Link>
              <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="/#contact">Contact</a>
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
              Our Work & Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how we've helped Australian businesses transform their operations, unlock growth, and achieve measurable results through data-driven solutions.
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

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've delivered measurable value across different industries.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                            {study.industry}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                        <p className="text-gray-600 mb-6">{study.client}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12 flex flex-col justify-center">
                        <h4 className="font-semibold text-gray-900 mb-4 text-xl">Key Results</h4>
                        <ul className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-700">
                              <div className="bg-green-500 rounded-full p-1 mr-3">
                                <ArrowRight className="h-3 w-3 text-white" />
                              </div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders across Australia say about working with Growth Analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4">
                    <Quote className="h-8 w-8 text-blue-200" />
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join the growing list of Australian businesses that have transformed their operations with Growth Analytics.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
            <a href="/#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
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
                <li><a href="/#services" className="hover:text-white transition-colors">Data Analytics</a></li>
                <li><a href="/#services" className="hover:text-white transition-colors">Business Intelligence</a></li>
                <li><a href="/#services" className="hover:text-white transition-colors">Artificial Intelligence</a></li>
                <li><a href="/#services" className="hover:text-white transition-colors">M&A Advisory</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><Link to="/our-work" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurWork;
