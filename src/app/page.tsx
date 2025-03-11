'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Navigation from './components/Navigation';
import TopNav from './components/TopNav';
import AchievementsPopup from './components/AchievementsPopup';
import ExperiencePopup from './components/ExperiencePopup';
import { useState } from 'react';

const Section = ({ children, id, className = "" }: { children: React.ReactNode; id: string; className?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} className={`min-h-screen flex items-center justify-center ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl w-full px-8 py-16"
      >
        {children}
      </motion.div>
    </section>
  );
};

const businessCards = [
  {
    id: 1,
    image: '/assets/collabshop.png',
    title: 'Collabshop | Blinkit case study',
    subtitle: 'E-commerce market overview and new ideas',
    link: 'https://drive.google.com/file/d/13aBr03ZDKpm1uaE8h0YAiixq6xd0AsXv/view?usp=sharing'
  },
  {
    id: 2,
    image: '/assets/housing.png',
    title: 'Housing.com',
    subtitle: 'Referral flow for the Housing Pay Rent app',
    link: 'https://drive.google.com/file/d/1_PN728W7aj-DpPfkLeyEilH8H12o4x-B/view?usp=sharing'
  },
  {
    id: 3,
    image: '/assets/hult.png',
    title: 'Hult Prize 2020',
    subtitle: 'Food Security model placed 2nd out of 44 teams in campus round at Hult Prize Global Accelerator',
    link: 'https://docs.google.com/document/d/1CYeTjZUo7qo1oGc3Jqti24eWBaNCCg35xpuq9QiFIaw/edit?usp=sharing'
  },
  {
    id: 4,
    image: '/assets/airport.png',
    title: 'Google Airport',
    subtitle: 'Develop a product for users/industry of your choice to increase user demand',
    link: 'https://drive.google.com/file/d/1aLSEgaQWTn0tM-kJm5tAqiJpaqkRVZ7j/view?usp=sharing'
  },
  {
    id: 5,
    image: '/assets/ambitionbox.png',
    title: 'AmbitionBox Case Study',
    subtitle: '10 key problems and solutions to make the existing product better',
    link: 'https://drive.google.com/file/d/14J3Mh9YooYDQoNd-MrHN-PZHwlelbLlv/view?usp=sharing'
  },
  {
    id: 6,
    image: '/assets/restro.png',
    title: 'Restro App Design',
    subtitle: 'Restaurant booking and order at table app design',
    link: 'https://drive.google.com/drive/folders/1mO1rEba4NvGXbv5maEfTY5QuWyCgXhzw?usp=drive_link'
  },
  {
    id: 7,
    image: '/assets/zime.png',
    title: 'Dashboard Design',
    subtitle: 'The dashboard demonstrates all the analytics that get the clients to buy your machines',
    link: 'https://drive.google.com/drive/folders/1vc2NcVwoPiCpI2oiYS9JRKQm9ugM3QQ6?usp=sharing'
  }
];

export default function Home() {
  const [showAchievements, setShowAchievements] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('business');

  const experienceContent = {
    zomato: (
      <div className="space-y-4">
        <p className="mb-4">Executing and solving for growth as a part of central supply core revenue teams: Restaurant Commissions and Restaurant Ads</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Achieved 35% ads revenue growth by building central processes/tools enabling consistent tracking & decisions across 30+ city teams</li>
          <li>Designed a centralized Superset Dashboard with the adoption of &gt;70%, ensuring consistent tracking, secure access & bandwidth unlock</li>
          <li>Automated KAM performance tracking with daily reports/alerts,reducing weekend drops by 20% & boosting response time to key issues</li>
          <li>Created AdsTube to cut sales tactical queries by 30% by creating video-based learning modules with AI avatars & performance tracking</li>
          <li>Tripled (3X) BrandTile product revenue via real-time tracking, slot booking alerts, and city leaderboards, boosting slot coverage by 40%</li>
          <li>Led diverse team, fostering collaboration among designers, analysts, developers to deliver automation and performance tracking tools</li>
          <li>Drove 5% MoM revenue growth in various cities by optimizing ad performance using strategies based on market, product & enablement</li>
          <li>Increased 25% merchant sales by boosting the search rank, improving ad strategy & conversion rates with BoS & targeted campaigns</li>
          <li>Facilitated cross-team communications and product executions, ensuring timely delivery that boosted product adoption, and revenue</li>
        </ul>
        <div className="mt-8 rounded-xl overflow-hidden mx-auto w-fit">
          <Image
            src="/assets/ads.jpg"
            alt="Zomato Ads Dashboard"
            width={200}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
    ),
    savein: (
      <div className="space-y-4">
        <p className="mb-4">Ideating and implementing expansion and growth strategies as a part of Savein's core strategy team</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Saved 500+ hrs/yr by implementing a field force management tool for sales which will help in activation of 3000+ merchants across India</li>
          <li>Delivered 10+ functionalities to the 'admin panel - in-house resource management system' in response to the needs of different teams</li>
          <li>Building new B2B fintech application for doctors from scratch with a goal to increasing the partner network, as a part of series A journey</li>
        </ul>
      </div>
    ),
    zostel: (
      <div className="space-y-4">
        <p className="mb-4">Worked in the Zo World team of Zostel in the founder's office on the web3 space and launched India's first travel NFTs on opensea marketplace</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Ideated the Non-Fungible Tokens (NFTs) that includes 6 different traits covering different aspects of travel; starting 0.5 ETH floor price</li>
          <li>Launched the website for Zo World that enabled minting of 195+ Zo world founder Non-Fungible Tokens (NFTs); day 1 traffic 1L+ users</li>
          <li>Increased discord community size by 25% through increasing the reach of community by implementing different go to market strategies</li>
        </ul>
      </div>
    ),
    drively: (
      <div className="space-y-4">
        <p className="mb-4">Founded and led Drively.in, India's first technology company for driver's education</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Conceptualised and founded a B2B2C start-up - Drively.in, India's first and only technology company for driver's education in July 2022</li>
          <li>Interviewed 100+ stakeholders and pitched to 50+ prospective clients & partners as the CEO; built team of 15 members from ground up</li>
          <li>Attracted 30+ customers and 5+ partners in Delhi/NCR with fleet of 20+ cars resulting in a revenue of INR 75K+, with zero marking cost</li>
        </ul>
        <div className="mt-8 pt-6 border-t border-[#ffc876]/20">
          <h4 className="text-[#ffc876] font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a 
                href="https://docs.google.com/presentation/d/1dn07-DgR1Hk4iFWAZKPtzHxnwCJNYz8xlrRYT0VfMkk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                Drively Deck
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://docs.google.com/presentation/d/1tGbKclW8rZ7JtkeQk7ym5BgvSiDEdpaHvP0IZ5peexw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                Drively Website PRD
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://docs.google.com/document/d/1tMvkxzMDDRn6IKSzB2cQzfUyxM7pE3BQJE1G5c8qCLw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                Drively One Pager
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <main>
      <TopNav />
      <Navigation />
      
      {/* About Section */}
      <Section id="about" className="bg-[#1e1e2a] text-white relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1e1e2a]/60 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[3rem] opacity-45"
          >
            <source src="/assets/bgvideo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative z-20">
          {/* Left side - Image */}
          <div className="w-64 h-64 md:w-[400px] md:h-[400px] relative">
            <div className="absolute inset-0 border-[16px] border-[#f5f5f5] rounded-full"></div>
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/assets/profile.jpg"
                alt="Kartik Verma"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="flex flex-col items-center md:items-start space-y-4 max-w-xl">
            <div className="space-y-2 w-full text-center md:text-left">
              <p className="uppercase tracking-wider text-sm font-semibold"><span className="text-white">Hello</span><span className="text-[#ffc876]"> I'm</span></p>
              <h1 className="text-6xl font-bold mb-4">
                <span className="text-[#ffc876]">KARTIK</span> VERMA
              </h1>
              <h2 className="text-3xl font-bold text-white mb-2">Generalist - Product & Growth</h2>
              <p className="text-xl text-gray-300">Ex Zomato | IIT KGP'23</p>
            </div>
            
            <div className="flex gap-6 mt-8 justify-center md:justify-start w-full">
              <a
                href="mailto:kartikverma.iitkgp@gmail.com"
                className="w-8 h-8 hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/gmail.png"
                  alt="Gmail"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="https://wa.me/918059324262"
                className="w-8 h-8 hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/whatsapp.png"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kartik-verma-b05406184/"
                className="w-8 h-8 hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/linkedin.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/kartikkkk.verma/"
                className="w-8 h-8 hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="https://yt.openinapp.co/x4p21"
                className="w-8 h-8 hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/youtube.png"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Academic Profile Section */}
      <Section id="academic" className="bg-[#1a1a1a] text-white">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-24 h-[2px] bg-[#ffc876]"></div>
            <h2 className="text-3xl font-bold text-[#ffc876]">ACADEMICS</h2>
            <div className="w-24 h-[2px] bg-[#ffc876]"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Timeline Container */}
            <div className="relative flex-1">
              {/* Horizontal Line */}
              <div className="absolute top-[60px] md:top-[100px] left-0 w-full h-[2px] bg-white"></div>
              
              {/* Timeline Items */}
              <div className="flex flex-row justify-between relative gap-0 mb-16">
                {/* 2016 */}
                <div className="flex flex-col items-center w-1/3">
                  <div className="mb-4 md:mb-8">
                    <div className="text-base sm:text-xl md:text-4xl font-bold">2016</div>
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full relative z-10"></div>
                  </div>
                  <div className="mt-4 md:mt-8 text-center">
                    <p className="font-semibold text-[#ffc876] text-xs sm:text-sm md:text-base">Class X (CBSE)</p>
                  </div>
                </div>

                {/* 2018 */}
                <div className="flex flex-col items-center w-1/3">
                  <div className="mb-4 md:mb-8">
                    <div className="text-base sm:text-xl md:text-4xl font-bold">2018</div>
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full relative z-10"></div>
                  </div>
                  <div className="mt-4 md:mt-8 text-center">
                    <p className="font-semibold text-[#ffc876] text-xs sm:text-sm md:text-base">Class XII (CBSE)</p>
                  </div>
                </div>

                {/* 2023 */}
                <div className="flex flex-col items-center w-1/3">
                  <div className="mb-4 md:mb-8">
                    <div className="text-base sm:text-xl md:text-4xl font-bold">2023</div>
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full relative z-10"></div>
                  </div>
                  <div className="mt-4 md:mt-8 text-center">
                    <p className="font-semibold text-[#ffc876] text-xs sm:text-sm md:text-base">IIT Kharagpur</p>
                    <p className="font-semibold text-[#ffc876] text-xs sm:text-sm md:text-base">Dual Degree 5Y</p>
                  </div>
                </div>
              </div>

              {/* View More Button */}
              <div className="flex justify-center mt-8 md:mt-12">
                <button
                  onClick={() => setShowAchievements(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ffc876] text-black font-semibold rounded-lg hover:bg-[#ffb84d] transition-colors w-48"
                >
                  View More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Graduation Image */}
            <div className="w-full md:w-[300px] h-[400px] relative rounded-2xl overflow-hidden border-4 border-white p-1">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image
                  src="/assets/graduation.jpg"
                  alt="Graduation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <AchievementsPopup
          isOpen={showAchievements}
          onClose={() => setShowAchievements(false)}
        />
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-[#1e1e2a] text-white">
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-[2px] bg-[#ffc876]"></div>
            <h2 className="text-3xl font-bold text-[#ffc876] text-center">EXPERIENCE</h2>
            <div className="w-24 h-[2px] bg-[#ffc876]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Zomato Card */}
            <button
              onClick={() => setSelectedExperience('zomato')}
              className="group bg-[#1a1a1a] rounded-xl p-6 border border-[#ffc876]/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ffc876]/20 w-full text-left cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="p-4">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-xl overflow-hidden p-2 bg-white transform transition-transform group-hover:scale-105">
                    <Image
                      src="/assets/zomato.png"
                      alt="Zomato"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-white">Generalist</h3>
                  <p className="text-gray-400 text-center text-sm">1 Yr 8 Mo | Aug 2023 - March 2025</p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#ffc876] text-black font-semibold rounded-lg group-hover:bg-[#ffb84d] transition-colors">
                    Know More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {/* SaveIN Card */}
            <button
              onClick={() => setSelectedExperience('savein')}
              className="group bg-[#1a1a1a] rounded-xl p-6 border border-[#ffc876]/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ffc876]/20 w-full text-left cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="p-4">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-xl overflow-hidden p-2 bg-white transform transition-transform group-hover:scale-105">
                    <Image
                      src="/assets/savein.jpg"
                      alt="SaveIN"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-white">Associate Product Manager</h3>
                  <p className="text-gray-400 text-center text-sm">Intern | Dec 2022 - Mar 2023</p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#ffc876] text-black font-semibold rounded-lg group-hover:bg-[#ffb84d] transition-colors">
                    Know More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {/* Zostel Card */}
            <button
              onClick={() => setSelectedExperience('zostel')}
              className="group bg-[#1a1a1a] rounded-xl p-6 border border-[#ffc876]/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ffc876]/20 w-full text-left cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="p-4">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-xl overflow-hidden p-2 bg-white transform transition-transform group-hover:scale-105">
                    <Image
                      src="/assets/zo.png"
                      alt="Zostel"
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-white">Founder's Office</h3>
                  <p className="text-gray-400 text-center text-sm">Intern | Jan 2022 – Feb 2022</p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#ffc876] text-black font-semibold rounded-lg group-hover:bg-[#ffb84d] transition-colors">
                    Know More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <ExperiencePopup
          isOpen={selectedExperience === 'zomato'}
          onClose={() => setSelectedExperience(null)}
          title="Zomato"
          content={experienceContent.zomato}
        />
        <ExperiencePopup
          isOpen={selectedExperience === 'savein'}
          onClose={() => setSelectedExperience(null)}
          title="SaveIN (YC W22)"
          content={experienceContent.savein}
        />
        <ExperiencePopup
          isOpen={selectedExperience === 'zostel'}
          onClose={() => setSelectedExperience(null)}
          title="Zostel (Zo World)"
          content={experienceContent.zostel}
        />
      </Section>

      {/* Entrepreneurial Experiences Section */}
      <Section id="entrepreneurial" className="bg-[#1a1a1a] text-white">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-[2px] bg-[#ffc876]"></div>
            <h2 className="text-3xl font-bold text-[#ffc876] text-center">
              ENTREPRENEURIAL<br className="md:hidden" /> EXPERIENCES
            </h2>
            <div className="w-24 h-[2px] bg-[#ffc876]"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Drively Card */}
            <button
              onClick={() => setSelectedExperience('drively')}
              className="group bg-[#1a1a1a] rounded-xl p-6 border border-[#ffc876]/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ffc876]/20 w-full text-left cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="p-4">
                  <div className="w-full h-48 mx-auto mb-6 rounded-xl overflow-hidden bg-white transform transition-transform group-hover:scale-105">
                    <Image
                      src="/assets/drively.jpg"
                      alt="Drively"
                      width={320}
                      height={160}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-white">Founder and CEO</h3>
                  <p className="text-gray-400 text-center text-sm">Explore the best driving school in your vicinity and book a driving class</p>
                </div>
                <div className="mt-auto pt-4 flex justify-center">
                  <div className="flex items-center justify-center gap-2 w-40 px-4 py-2 bg-[#ffc876] text-black font-semibold rounded-lg group-hover:bg-[#ffb84d] transition-colors">
                    Know More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <ExperiencePopup
          isOpen={selectedExperience === 'drively'}
          onClose={() => setSelectedExperience(null)}
          title="Drively.in"
          content={experienceContent.drively}
        />
        <ExperiencePopup
          isOpen={selectedExperience === 'zomato'}
          onClose={() => setSelectedExperience(null)}
          title="Zomato"
          content={experienceContent.zomato}
        />
      </Section>

      {/* Extracurricular Activities Section */}
      <section id="extracurricular" className="min-h-screen bg-[#1e1e2a] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Matching other sections */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-24 h-[2px] bg-[#ffc876]"></div>
            <h2 className="text-3xl font-bold text-[#ffc876] text-center">
              EXTRACURRICULAR<br className="md:hidden" /> ACTIVITIES
            </h2>
            <div className="w-24 h-[2px] bg-[#ffc876]"></div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-start md:justify-center mb-12 overflow-x-auto hide-scrollbar">
            <div className="inline-flex gap-4 md:gap-8 text-lg font-semibold px-4 md:px-0 min-w-max">
              <button 
                onClick={() => setActiveTab('business')}
                className={`pb-2 transition-all duration-300 whitespace-normal text-center min-w-[120px] md:min-w-[150px] ${
                  activeTab === 'business' 
                    ? 'text-[#ffc876] border-b-2 border-[#ffc876]' 
                    : 'text-gray-400 hover:text-[#ffc876]'
                }`}
              >
                Business<br className="md:hidden" /> Competitions
              </button>
              <button 
                onClick={() => setActiveTab('filmmaking')}
                className={`pb-2 transition-all duration-300 whitespace-normal text-center min-w-[120px] md:min-w-[150px] ${
                  activeTab === 'filmmaking' 
                    ? 'text-[#ffc876] border-b-2 border-[#ffc876]' 
                    : 'text-gray-400 hover:text-[#ffc876]'
                }`}
              >
                Filmmaking &<br className="md:hidden" /> Photography
              </button>
              <button 
                onClick={() => setActiveTab('sports')}
                className={`pb-2 transition-all duration-300 whitespace-normal text-center min-w-[120px] md:min-w-[150px] ${
                  activeTab === 'sports' 
                    ? 'text-[#ffc876] border-b-2 border-[#ffc876]' 
                    : 'text-gray-400 hover:text-[#ffc876]'
                }`}
              >
                Sports
              </button>
            </div>
          </div>
          
          {/* Business Competitions */}
          <div className={activeTab === 'business' ? 'block' : 'hidden'}>
            <div className="mb-20">
              <p className="text-white mb-12 text-center px-4">Checkout business and product case studies</p>
              
              {/* Card Container */}
              <div className="relative max-w-[1000px] mx-auto overflow-hidden">
                {/* Left Arrow */}
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#252533] p-3 rounded-full text-white hover:bg-[#ffc876] transition-colors z-10"
                  onClick={() => {
                    const container = document.getElementById('card-container');
                    if (container) {
                      container.scrollLeft -= window.innerWidth < 768 ? 260 : 324; // Adjust scroll amount for mobile
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div 
                  id="card-container"
                  className="flex overflow-hidden py-4 px-16 hide-scrollbar"
                >
                  <div className="animate-scroll">
                    {[...businessCards, ...businessCards, ...businessCards].map((card, index) => (
                      <div 
                        key={`${card.id}-${index}`}
                        onClick={() => window.open(card.link, '_blank')}
                        className="flex-shrink-0 w-[260px] md:w-[300px] bg-[#252533] rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={300}
                          height={200}
                          className="w-full h-[180px] md:h-[200px] object-cover"
                        />
                        <div className="p-6">
                          <h4 className="text-white font-bold mb-3">{card.title}</h4>
                          <p className="text-gray-400 text-sm mb-6">{card.subtitle}</p>
                          <div className="flex justify-end">
                            <button className="text-[#ffc876] font-medium hover:underline flex items-center gap-2">
                              Know more
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#252533] p-3 rounded-full text-white hover:bg-[#ffc876] transition-colors z-10"
                  onClick={() => {
                    const container = document.getElementById('card-container');
                    if (container) {
                      container.scrollLeft += window.innerWidth < 768 ? 260 : 324; // Adjust scroll amount for mobile
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Filmmaking and Photography */}
          <div className={activeTab === 'filmmaking' ? 'block' : 'hidden'}>
            <div className="mb-20">
              <p className="text-white mb-12 text-center">Checkout my photography instagram page</p>
              <div className="instagram-embed w-full max-w-3xl mx-auto">
                <iframe
                  src="https://www.instagram.com/__tartik__/embed"
                  className="w-full h-[600px] hide-scrollbar"
                  frameBorder="0"
                  scrolling="yes"
                  allowTransparency={true}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Sports */}
          <div className={activeTab === 'sports' ? 'block' : 'hidden'}>
            <div className="mb-20">
              <p className="text-white text-center mb-12">
                Part of the Basketball Championship as member of the Rajendra Prasad Hall, assisting the team in numerous ways
              </p>
              <div className="max-w-2xl mx-auto p-4 border-4 border-white rounded-3xl overflow-hidden">
                <Image
                  src="/assets/basketball.jpg"
                  alt="Basketball Championship"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 text-center py-8 px-4">
        <p>Copyright © 2025 March Kartik Verma. All Rights Reserved.</p>
      </footer>
    </main>
  );
} 