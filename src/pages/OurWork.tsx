
import { ArrowLeft, ArrowRight, Building2, TrendingUp, Users, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const OurWork = () => {
  const caseStudies = [
    {
      title: "Data Analytics & Strategy",
      client: "Major Australian University",
      industry: "Education",
      challenge: "Lack of insights on profitability and conversion.",
      solution: "Analysed and implemented comprehensive data strategy increasing profitability and funnel conversion.",
      results: [
        "2x uplift in conversion",
        "20% improvement in profitability",
        "Enabled ongoing live performance view"
      ],
      technologies: ["Power BI", "Python", "SQL Server"],
      icon: Building2
    },
    {
      title: "No Code AI Complex Data Compare",
      client: "Customers Comparing Building Quotes",
      industry: "Construction",
      challenge: "Customers struggle to make an informed building decision due to inconsistent quotes and hidden costs.",
      solution: "AI delivered easy-to-understand quote comparison report highlighting hidden costs empowering customers to make informed decisions.",
      results: [
        "~$30k average savings per customer",
        "50% reduction in time to compare quotes",
        "From build to go-to-market in < 3 months"
      ],
      technologies: ["LLM", "TBC"],
      icon: TrendingUp
    },
     {
      title: "No Code AI Thematic Insights",
      client: "Researchers Analysing Survey Data",
      industry: "Government",
      challenge: "Users swivel chair across multiple systems to cleanse and transform qualititative data and draw meaningful, deep thematic insights.",
      solution: "AI delivered easy-to-use to use tool empowering users to easily cleanse and transform data providing deep, thematic insights to support better decision making.",
      results: [
        "50% reduction in time taken to cleanse and transform data",
        "Tailored thematic insights not previously available",
        "From build to go-to-market in < 3 months"
      ],
      technologies: ["Azure", "GPT", "Python"],
      icon: TrendingUp
    },
    {
      title: "M&A Advisory & Due Diligence Success",
      client: "Global Online Education Business",
      industry: "Online Education",
      challenge: "Complex acquisition requiring rapid financial and operational analysis of target being sold.",
      solution: "Comprehensive due diligence analytics including financial modeling and risk assessment.",
      results: [
        "35% increase in exit valuation for seller",
        "40% reduction in due diligence timeline",
        "Successful acquisition completed"
      ],
      technologies: ["Excel", "Data Room", "Financial Modeling"],
      icon: Users
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
              <Link to="/our-work" className="text-blue-600 font-medium">Our Work</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
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

    

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join the growing list of Australian businesses that have transformed their operations with Growth Analytics.
          </p>
          <Button size="lg" variant="outline" className="border-white text-blue-600:bg-white hover:text-blue-600" asChild>
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
