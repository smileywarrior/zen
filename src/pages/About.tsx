
import { ArrowLeft, Users, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Kiruthika",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Visionary leadership quality in tech startups"
    },
    {
      name: "Abhishek",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Design expert passionate about user experiences"
    },
    {
      name: "Karthi",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Full-stack developer with AI/ML expertise"
    },
    {
      name: "Motheeshwaran K.",
      role: "CFO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Lead our financial planning and analysis, keeping the company aligned with its strategic goals."
    },
    {
      name: "Rathish",
      role: "COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Growth hacker with community building experience"
    },
    {
      name: "Arthi",
      role: "Technical Support Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Leads our support team to deliver fast, reliable solutions to every user."
    },
    {
      name: "Vishal",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "He shapes the brand’s vision through bold, creative storytelling"
    },
    {
      name: "Logesh",
      role: "Head of Product Designing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "He leads product design with a focus on user experience and innovation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-zenora-blue-light/20 to-zenora-purple-light/30 font-poppins">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => window.history.back()}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-zenora-blue to-zenora-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Zenora360</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-zenora-blue transition-colors">Home</a>
              <a href="/contact" className="text-gray-600 hover:text-zenora-blue transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            About <span className="bg-gradient-to-r from-zenora-blue to-zenora-purple bg-clip-text text-transparent">Zenora360</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-slide-up">
            We're on a mission to bridge the gap between brilliant ideas and the talented people who can bring them to life.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-zenora-blue to-zenora-purple rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="bg-gradient-to-r from-zenora-blue to-zenora-purple p-8 rounded-2xl text-white">
                <blockquote className="text-2xl font-semibold italic mb-4">
                  "To empower dreamers by connecting them with doers."
                </blockquote>
                <p className="text-blue-100 text-lg">
                  We believe that every great idea deserves the right team to make it happen. Our platform removes the barriers between visionaries and the skilled individuals who can help turn dreams into reality.
                </p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zenora-blue-light/50 to-zenora-purple-light/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-zenora-purple to-zenora-yellow rounded-full flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
          </div>
          
          <Card className="bg-white/80 backdrop-blur animate-slide-up">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Zenora360 was born from a personal frustration experienced by our founders during their college years. As computer science students with entrepreneurial dreams, they constantly witnessed brilliant startup ideas die in dorm rooms and coffee shops—not because the ideas weren't good enough, but because the idea owners couldn't find the right technical co-founders or skilled teammates to bring their visions to life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At the same time, they saw countless talented students struggling to find meaningful projects to work on—projects that would give them real-world experience, help them build impressive portfolios, and connect them with like-minded innovators. The disconnect was clear: dreamers needed doers, and doers needed meaningful dreams to pursue.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This realization sparked the creation of Zenora360—a platform designed to solve both problems simultaneously. We're not just another networking site; we're a bridge between ambition and ability, between vision and execution. Today, we're building the infrastructure that will power the next generation of startups by making team formation as simple as posting an idea and finding your perfect match.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-zenora-yellow to-zenora-blue rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a diverse group of builders, dreamers, and problem-solvers united by our passion for connecting people and empowering innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-zenora-blue font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zenora-purple-light/30 to-zenora-blue-light/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur hover:shadow-xl transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zenora-blue to-zenora-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community First</h3>
                <p className="text-gray-600">We believe in the power of community and authentic connections to drive innovation and success.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zenora-purple to-zenora-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in everything we do, from our platform to our user experience.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zenora-yellow to-zenora-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Empowerment</h3>
                <p className="text-gray-600">We empower individuals to pursue their dreams and create meaningful impact through collaboration.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zenora-blue to-zenora-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Mission?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the revolution that's changing how startup teams are formed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-zenora-blue hover:bg-gray-100 px-8 py-4 text-lg transition-all hover:scale-105"
              onClick={() => window.location.href = '/#join'}
            >
              Join Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-zenora-blue transition-all"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-zenora-blue to-zenora-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold">Zenora360</span>
          </div>
          <p className="text-gray-400 mb-6">Building the future of startup team formation, one connection at a time.</p>
          <div className="flex justify-center space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
