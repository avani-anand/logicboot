import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from 'react';
import SectionWrapper from "../components/SectionWrapper";
import ContactFormModal from '../components/ContactFormModal';
import { CategoryList } from '../components/ui/category-list';
import { Card, CardContent } from "../components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../components/ui/carousel";

// Import all Lucide icons needed for all products
import {
  Stethoscope, Bot, Microscope, Rocket, Zap, Wind, Clock, Leaf, Hand,
  Battery, Map, Volume2, Ruler, Scale, Wifi, Smartphone, HeartPulse,
  Brain, TestTube, Package, Shield, Infinity, Database, Calendar,
  Thermometer, Users, Target, Recycle, FlaskConical, MousePointer, Cloud
} from "lucide-react";

// Icon map to render icons from string names in productData
const iconMap = {
  // Product Icons
  Stethoscope: <Stethoscope size={44} color="#ffffff" />,
  Bot: <Bot size={44} color="#ffffff" />,
  Microscope: <Microscope size={44} color="#ffffff" />,
  Rocket: <Rocket size={44} color="#ffffff" />,
  
  // Benefit & Spec Icons (small)
  Zap: <Zap className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Hand: <Hand className="w-5 h-5" />,
  Battery: <Battery className="w-5 h-5" />,
  Map: <Map className="w-5 h-5" />,
  Volume2: <Volume2 className="w-5 h-5" />,
  Ruler: <Ruler className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
  Wifi: <Wifi className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  TestTube: <TestTube className="w-5 h-5" />,
  Package: <Package className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Infinity: <Infinity className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  Thermometer: <Thermometer className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Recycle: <Recycle className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  MousePointer: <MousePointer className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
};


const ProductDetail = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // === UPDATED DATA STRUCTURE ===
  const productData = {
    "robotic-vacuum": {
      title: "AI-Powered Robotic Vacuum Cleaners",
      subtitle: "Smart Home Cleaning with Advanced AI Navigation",
      backgroundVideo: "/images/vacuum-background.mp4",
      gallery: [
        "/images/vaccum.mp4",
        "/images/img5.jpeg",
        "/images/img2.jpeg",
        "/images/img4.jpeg",
      ],
      description: "Our AI-powered robotic vacuum cleaners represent the next generation of smart home cleaning, combining cutting-edge robotics with intelligent navigation and automation.",
      longDescription: `These advanced robotic vacuum cleaners utilize sophisticated AI algorithms to navigate complex home environments, learning from each cleaning session to optimize performance. The system features advanced obstacle detection, room mapping, and adaptive cleaning patterns that ensure thorough coverage while avoiding potential hazards.`,
      features: ["AI-powered navigation and mapping", "Advanced obstacle detection and avoidance", "Adaptive cleaning patterns", "Smart home integration", "Remote monitoring and control", "Long battery life with auto-charging", "HEPA filtration system", "Customizable cleaning schedules"],
      specifications: [
        { label: 'Battery Life', value: 'Up to 120 minutes', icon: 'Battery' },
        { label: 'Coverage Area', value: 'Up to 2000 sq ft', icon: 'Map' },
        { label: 'Noise Level', value: '<65 dB', icon: 'Volume2' },
        { label: 'Dimensions', value: '13.8" x 13.8" x 3.6"', icon: 'Ruler' },
        { label: 'Weight', value: '6.5 lbs', icon: 'Scale' },
        { label: 'Connectivity', value: 'Wi-Fi, Bluetooth', icon: 'Wifi' },
        { label: 'App Support', value: 'iOS & Android', icon: 'Smartphone' }
      ],
      benefits: [
        { title: 'Effortless cleaning automation', subtitle: 'Set it and forget it with intelligent scheduling', icon: 'Zap' },
        { title: 'Improved indoor air quality', subtitle: 'HEPA filters capture 99.97% of allergens', icon: 'Wind' },
        { title: 'Time-saving convenience', subtitle: 'Reclaim hours of your week for what matters', icon: 'Clock' },
        { title: 'Energy-efficient operation', subtitle: 'Smart power management reduces energy costs', icon: 'Leaf' },
        { title: 'Reduced manual cleaning effort', subtitle: 'Less work for you, cleaner floors guaranteed', icon: 'Hand' }
      ],
      icon: "Bot",
      color: "from-green-500 to-green-600", 
//       ctaBg: "bg-purple-300", 
    },
    "ai-stethoscope": {
      title: "AI-Powered Stethoscope",
      subtitle: "Revolutionary Digital Auscultation with AI Diagnosis",
      backgroundVideo:"/images/sthethoscope-background.mp4", 
      gallery: [
        "/images/i1.jpeg",
        "/images/i4.jpeg",
        "/images/i3.jpeg",
        "/images/i5.jpeg",
      ],
      description: "Our AI-powered stethoscope transforms traditional auscultation into a digital, intelligent diagnostic tool that provides real-time analysis and remote monitoring capabilities.",
      longDescription: `This revolutionary device combines high-fidelity audio capture with advanced AI algorithms to analyze heart, lung, and other bodily sounds in real-time. The AI system can detect subtle abnormalities, compare findings with extensive medical databases, and provide preliminary diagnostic suggestions to healthcare professionals.`,
      features: ["High-fidelity audio capture", "Real-time AI analysis", "Remote monitoring capabilities", "Cloud-based data storage", "Integration with EMR systems", "Multi-frequency analysis", "Patient data encryption", "Mobile app compatibility"],
      specifications: [
        { label: 'Audio Frequency', value: '20Hz - 20kHz', icon: 'Volume2' },
        { label: 'Battery Life', value: 'Up to 8 hours', icon: 'Battery' },
        { label: 'Connectivity', value: 'Bluetooth 5.0, Wi-Fi', icon: 'Wifi' },
        { label: 'Storage', value: '32GB internal + cloud', icon: 'Database' },
        { label: 'Compatibility', value: 'iOS, Android, Windows', icon: 'Smartphone' },
        { label: 'Weight', value: '180g', icon: 'Scale' },
        { label: 'Water Resistance', value: 'IPX4', icon: 'Shield' }
      ],
      benefits: [
        { title: 'Enhanced diagnostic accuracy', subtitle: 'AI detects subtle abnormalities', icon: 'HeartPulse' },
        { title: 'Remote patient assessment', subtitle: 'Monitor patients from anywhere', icon: 'Users' },
        { title: 'Improved healthcare accessibility', subtitle: 'Expert analysis for rural areas', icon: 'Map' },
        { title: 'Comprehensive patient monitoring', subtitle: 'Track conditions over time', icon: 'Calendar' },
        { title: 'Reduced healthcare costs', subtitle: 'Early detection saves money', icon: 'Leaf' }
      ],
      icon: "Stethoscope",
      color: "from-red-500 to-red-600",
//       ctaBg: "bg-purple-300",
    },
    "nanobots-cancer": {
      title: "Nanobots for Cancer Treatment",
      subtitle: "Precision Medicine with Targeted Drug Delivery",
      backgroundVideo: "/images/nanobots-background.mp4",
      gallery: [
        "/images/im2.jpeg",
        "/images/im1.jpeg",
        "/images/im3.jpeg",
        "/images/im4.jpeg",
      ],
      description: "Our nanobots represent a breakthrough in cancer treatment, offering precise, targeted drug delivery that minimizes side effects while maximizing therapeutic effectiveness.",
      longDescription: `These microscopic robots are designed to navigate the bloodstream, identify cancer cells with remarkable precision, and deliver therapeutic agents directly to the target site. The nanobots utilize advanced AI algorithms to distinguish between healthy and cancerous cells, ensuring minimal damage to surrounding tissue.`,
      features: ["Precise cancer cell targeting", "Real-time monitoring capabilities", "Programmable drug delivery", "Minimal side effects", "Multiple treatment modalities", "Biodegradable materials", "Advanced imaging compatibility", "Personalized treatment protocols"],
      specifications: [
        { label: 'Size', value: '50-100 nanometers', icon: 'Ruler' },
        { label: 'Material', value: 'Biodegradable polymers', icon: 'Recycle' },
        { label: 'Navigation', value: 'Magnetic guidance', icon: 'MousePointer' },
        { label: 'Detection', value: 'AI-powered recognition', icon: 'Brain' },
        { label: 'Payload Capacity', value: 'Variable', icon: 'Package' },
        { label: 'Biocompatibility', value: 'ISO 10993 certified', icon: 'Shield' },
        { label: 'Clearance', value: 'Renal excretion', icon: 'TestTube' }
      ],
      benefits: [
        { title: 'Targeted treatment delivery', subtitle: 'Only attacks cancer cells', icon: 'Target' },
        { title: 'Reduced treatment side effects', subtitle: 'Spares healthy tissue', icon: 'Hand' },
        { title: 'Improved patient outcomes', subtitle: 'Higher efficacy, better quality of life', icon: 'HeartPulse' },
        { title: 'Personalized medicine approach', subtitle: 'Treatment tailored to the patient', icon: 'Users' },
        { title: 'Enhanced treatment monitoring', subtitle: 'Real-time data from inside the body', icon: 'Database' }
      ],
      icon: "Microscope",
      color: "from-purple-500 to-purple-600",
//       ctaBg: "bg-purple-300",
    },
    placeholder: {
      title: "Coming Soon",
      subtitle: "Innovation in Development",
      backgroundVideo: null,
      gallery: [
//         "/images/placeholder-1.jpg",
//         "/images/placeholder-2.jpg",
      ],
      description: "We are working on exciting new products that will further revolutionize healthcare and household automation.",
      longDescription: `Our research and development team is constantly exploring new frontiers in AI and robotics. We're developing cutting-edge solutions that address emerging challenges in healthcare, automation, and beyond.`,
      features: ["Advanced AI algorithms", "Cutting-edge robotics", "Innovative applications", "Industry-leading technology", "Patent-pending solutions"],
      specifications: [
        { label: 'Status', value: 'In Development', icon: 'Clock' },
        { label: 'Timeline', value: 'TBA', icon: 'Calendar' },
        { label: 'Technology', value: 'AI + Robotics', icon: 'Brain' },
        { label: 'Applications', value: 'Healthcare & Automation', icon: 'TestTube' },
        { label: 'Innovation Level', value: 'Breakthrough', icon: 'Rocket' }
      ],
      benefits: [
        { title: 'Future-ready solutions', subtitle: 'Get ready for what\'s next', icon: 'Zap' },
        { title: 'Industry innovation', subtitle: 'Leading the charge in new tech', icon: 'Leaf' },
        { title: 'Competitive advantage', subtitle: 'Stay ahead of the curve', icon: 'Infinity' },
        { title: 'Technology leadership', subtitle: 'Defining the future', icon: 'Rocket' }
      ],
      icon: "Rocket",
      color: "from-gray-500 to-gray-600",
      ctaBg: "bg-gray-400",
    },
  };

  // Use 'placeholder' data if the id is not found
  const data = productData[id] || productData.placeholder;

  // --- Start of New Layout (from RoboticVacuum.js) ---
  return (
    <div className="min-h-screen pt-16">
      
      {/* === DYNAMIC HERO === */}
      <div className="relative bg-gray-800 h-[80vh] flex items-center justify-center">
        {data.backgroundVideo ? (
          <video
            src={data.backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
          />
        ) : (
          <img
            src={data.gallery[0]}
            alt={`${data.title} background`}
            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
          />
        )}
        
        <div className="absolute inset-0 z-10" />

        <SectionWrapper className="relative z-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {data.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto px-4">
                {data.subtitle}
              </p>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      {/* === DYNAMIC Product Overview Section === */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-6">Product Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              {data.description}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {data.longDescription}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* === DYNAMIC Key Features Section === */}
      <SectionWrapper className="bg-white ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4">Key Features</h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Advanced capabilities that make {data.title} stand out
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 ">
            {data.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex justify-center items-center p-4 sm:p-6 bg-gray-200 rounded-xl border border-gray-100"
              >
                <span className="text-gray-600 text-center font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* === DYNAMIC Gallery Section === */}
      <div className="relative py-12">
        <Carousel className="w-full max-w-lg mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {data.gallery.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {item.endsWith('.mp4') ? (
                        <video
                          src={item}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={item}
                          alt={`Gallery item ${index + 1}`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-primary/80" />
          <CarouselNext className="bg-primary text-primary-foreground hover:bg-primary/80" />
        </Carousel>
        <div className="sm:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center px-3 py-2 rounded-full shadow-md bg-purple-800">
          <span className="sr-only">Swipe to view gallery</span>
          <span aria-hidden className="w-2 h-2 rounded-full bg-white opacity-90 inline-block mr-2" />
          <span aria-hidden className="w-3 h-3 rounded-full bg-amber-400 inline-block animate-pulse shadow-md" />
          <span aria-hidden className="w-2 h-2 rounded-full bg-white opacity-90 inline-block ml-2" />
        </div>
      </div>

      {/* === DYNAMIC Specifications and Key Benefits === */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 ">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <CategoryList
                title="Technical Specification"
                categories={data.specifications.map((spec, index) => ({
                  id: `${spec.label}-${index}`,
                  title: (
                    <>
                      <span>{spec.label}</span>
                      <span className="text-gray-500 font-normal"> - {spec.value}</span>
                    </>
                  ),
                  subtitle: undefined,
                  icon: iconMap[spec.icon] || <span className="w-5 h-5 inline-block">ℹ️</span>,
                  onClick: () => {},
                }))}
                className="bg-white"
              />
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
					<CategoryList
						title="Key Benefits"
						categories={data.benefits.map((benefit, index) => ({
							id: index,
							title: (
								<span className="text-gray-200">{benefit.title}</span>
							),
							subtitle: (
								<span className="text-gray-500">{benefit.subtitle}</span>
							),
							icon: iconMap[benefit.icon] || <span className="w-5 h-5 inline-block">✅</span>,
							onClick: () => {},
						}))}
						className="bg-white " 
					/>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* === DYNAMIC Call to Action === */}
			<SectionWrapper noPadding className={`relative min-h-[160px]  sm:min-h-[260px] md:min-h-[400px] overflow-hidden border border-gray-600`}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="relative text-center max-w-xl sm:max-w-3xl mx-auto px-4 sm:px-0"
				>
					<h2 className="font-geist text-lg sm:text-2xl md:text-3xl font-bold text-white dark:text-gray-600 mb-2 sm:mb-4">
						Ready to Experience {data.title}?
				</h2>
					<p className="font-manrope text-xs sm:text-sm md:text-base text-white/80 dark:text-gray-600 mb-2 sm:mb-4 leading-relaxed">
						Join us in revolutionizing {id === "placeholder" ? "future technology" : "healthcare and automation"} with our cutting-edge AI-powered solutions.
					</p>
					<div className="font-geist flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
						<button
							onClick={() => setIsModalOpen(true)}
							className="btn-secondary bg-white text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 py-1.5 px-3 text-xs sm:py-2 sm:px-4 sm:text-sm rounded-md"
						>
							Get in Touch
						</button>
						<Link
							to="/about"
							className="btn-secondary bg-transparent text-white border-2 border-white hover:bg-white/10 dark:bg-white dark:text-gray-600 dark:hover:bg-gray-100 dark:border-gray-200 py-1.5 px-3 text-xs sm:py-2 sm:px-4 sm:text-sm rounded-md"
						>
							Learn More About Us
						</Link>
					</div>
				</motion.div>
			</SectionWrapper>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProductDetail;