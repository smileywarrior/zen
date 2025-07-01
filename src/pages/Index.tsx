import { useState } from "react";
import { ArrowRight, Users, Lightbulb, Rocket, Star, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Index = () => {
   const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });
  const { toast } = useToast();
    const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  
  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.role) {
    toast({
      title: "Please fill in all fields",
      variant: "destructive",
    });
    return;
  }

  try {
    await axios.post("/api/waitlist", formData); // 👈 Send data to backend

    toast({
      title: "Success 🎉",
      description: "You've been added to the waitlist!",
    });

    setFormData({ name: "", email: "", role: "" });
  } catch (err) {
    console.error("Waitlist submission error:", err);
    toast({
      title: "Error",
      description: "Failed to join the waitlist. Please try again.",
      variant: "destructive",
    });
  }
};

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-zenora-blue-light/20 to-zenora-purple-light/30 font-poppins">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-zenora-blue to-zenora-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zenora360</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-zenora-blue transition-colors">How It Works</button>
              <a href="/about" className="text-gray-600 hover:text-zenora-blue transition-colors">About</a>
              <a href="/contact" className="text-gray-600 hover:text-zenora-blue transition-colors">Contact</a>
              <Button onClick={() => scrollToSection('join')} className="bg-gradient-to-r from-zenora-blue to-zenora-purple text-white hover:opacity-90">
                Join Waitlist
              </Button>
              

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button onClick={() => scrollToSection('how-it-works')} className="block text-gray-600 hover:text-zenora-blue">How It Works</button>
              <a href="/about" className="block text-gray-600 hover:text-zenora-blue">About</a>
              <a href="/contact" className="block text-gray-600 hover:text-zenora-blue">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              India's Talent 
              <span className="block bg-gradient-to-r from-zenora-blue to-zenora-purple bg-clip-text text-transparent">
                Lachpad
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your Network, Your Growth. Connect idea owners with skilled teammates, join exciting projects, and build the next big thing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('join')}
                size="lg" 
                className="bg-gradient-to-r from-zenora-blue to-zenora-purple text-white px-8 py-4 text-lg hover:opacity-90 transition-all hover:scale-105"
              >
                Join Waitlist <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('how-it-works')}
                variant="outline" 
                size="lg" 
                className="border-2 border-zenora-blue text-zenora-blue px-8 py-4 text-lg hover:bg-zenora-blue hover:text-white transition-all"
              >
                Explore Projects
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="mt-20 relative">
            <div className="absolute top-10 left-10 animate-float">
              <div className="w-16 h-16 bg-zenora-yellow rounded-full flex items-center justify-center shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-zenora-purple rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="absolute bottom-10 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-14 h-14 bg-zenora-blue rounded-full flex items-center justify-center shadow-lg">
                <Rocket className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                The Problem We're Solving
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold">×</span>
                  </div>
                  <p className="text-gray-600 text-lg">Brilliant ideas die because founders can't find the right co-founders or teammates</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold">×</span>
                  </div>
                  <p className="text-gray-600 text-lg">Talented students struggle to find real-world projects to build their portfolio</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold">×</span>
                  </div>
                  <p className="text-gray-600 text-lg">Startups waste months trying to recruit the right talent through traditional channels</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold">×</span>
                  </div>
                  <p className="text-gray-600 text-lg">No Central Ecosystem: Startups, skilled talent, and job seekers lack a single trusted platform to connect — causing missed opportunities and scattered efforts.</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Solution
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 font-bold">✓</span>
                  </div>
                  <p className="text-gray-600 text-lg">1-Minute Pitch = 1 Dream Team:
Pitch your idea, and our smart system helps you form the right team — fast, focused, and ready to build.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 font-bold">✓</span>
                  </div>
                  <p className="text-gray-600 text-lg">Smart matching algorithm connects idea owners with skilled teammates based on skills, interests, and goals</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 font-bold">✓</span>
                  </div>
                  <p className="text-gray-600 text-lg">Students gain real experience working on meaningful projects while building their network</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zenora-blue-light/50 to-zenora-purple-light/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How Zenora360 Works</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">Three simple steps to build your dream team and launch your next big project</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-zenora-blue to-zenora-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Post Opportunities</h3>
                <p className="text-gray-600 text-lg">Share your vision, define the skills you need, and set your project goals.
Make your startup idea visible to talented individuals through your pitch.</p>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-zenora-purple to-zenora-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Find Teammates</h3>
                <p className="text-gray-600 text-lg">Our smart matching system and your pitch video connect you with talented individuals
whose skills and interests align with your project needs.</p>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-zenora-yellow to-zenora-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Grow Together</h3>
                <p className="text-gray-600 text-lg">Collaborate with your new teammates, track progress, and bring your startup vision to life with the right people by your side.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section id="users" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zenora-purple-light/30 to-zenora-blue-light/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Built for Innovators Like You</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">Whether you're an idea owner, skilled student, or growing startup, Zenora360 has something for you</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-zenora-blue to-zenora-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Idea Owners</h3>
                <p className="text-gray-600 text-lg mb-6">Turn your brilliant ideas into reality by finding the perfect co-founders and teammates who share your vision.</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2"></span>Let your idea live</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2"></span>Build your dream project</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2"></span>Attract skilled teammates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-zenora-purple to-zenora-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skilled Students</h3>
                <p className="text-gray-600 text-lg mb-6">Gain real-world experience, build your portfolio, and connect with like-minded innovators on exciting projects.</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2"></span>Get real project experience</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2"></span> Boost your resume</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2"></span> Learn and earn</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-zenora-yellow to-zenora-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growing Startups</h3>
                <p className="text-gray-600 text-lg mb-6">Scale your team efficiently by connecting with motivated, skilled individuals ready to contribute to your mission.</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2"></span> Curated talent pool</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2"></span> Fast recruitment</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2"></span> Cultural fit matching</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">What Future Users Are Saying</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-zenora-blue-light/50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zenora-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 italic">"I've been waiting for a platform like this! Can't wait to find the right technical co-founder for my fintech idea."</p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-zenora-blue to-zenora-purple rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-gray-500">Aspiring Entrepreneur</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-zenora-purple-light/50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zenora-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 italic">"As a CS student, I'm excited to work on real projects that will actually make a difference. This is game-changing!"</p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-zenora-purple to-zenora-yellow rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">Alex Rodriguez</p>
                  <p className="text-gray-500">Computer Science Student</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-zenora-yellow/30 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zenora-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 italic">"Traditional recruitment is broken. Zenora360's approach to finding passionate talent is exactly what startups need."</p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-zenora-yellow to-zenora-blue rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Park</p>
                  <p className="text-gray-500">Startup Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zenora-blue to-zenora-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Join thousands of innovators, students, and startups already on our waitlist. Be the first to experience the future of team building.</p>
          
          <Card className="bg-white/95 backdrop-blur">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 text-lg"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 text-lg"
                      required
                    />
                  </div>
                </div>
                
                <Select onValueChange={(value) => setFormData({ ...formData, role: value })}>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="I am a..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup-founder">Startup Founder</SelectItem>
                    <SelectItem value="skilled-individual">Skilled Individual</SelectItem>
                    <SelectItem value="recruiter">Recruiter</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-zenora-blue to-zenora-purple text-white h-12 text-lg hover:opacity-90 transition-all hover:scale-105"
                >
                  Join the Waitlist <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-gray-500 text-sm">No spam, ever. We'll only notify you about Zenora360 updates and launch.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-zenora-blue to-zenora-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold">Zenora360</span>
              </div>
              <p className="text-gray-400 mb-6">Building the future of startup team formation, one connection at a time.</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-zenora-blue transition-colors cursor-pointer">
                  <span className="text-sm font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-zenora-blue transition-colors cursor-pointer">
                  <span className="text-sm font-bold">L</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-zenora-blue transition-colors cursor-pointer">
                  <span className="text-sm font-bold">I</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400">
               <li> <a  className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For You</a></li>
                <li><a href="#join" className="hover:text-white transition-colors">Join Waitlist</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zenora360. All rights reserved. Built with ❤️ for innovators worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
