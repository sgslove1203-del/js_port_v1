/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  Calendar, 
  User, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Linkedin,
  ExternalLink,
  Target,
  BarChart3,
  PenTool,
  TrendingUp,
  Award,
  BookOpen,
  MailCheck
} from "lucide-react";

const SectionHeader = ({ title, badge }: { title: string; badge?: string }) => (
  <div className="flex flex-col items-center mb-12 text-center">
    {badge && (
      <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-brand-orange/10 text-brand-orange rounded-full mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
    <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full" />
  </div>
);

const ExperienceCard = ({ title, period, role, items, tools, colorClass, delay = 0, link }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`p-8 rounded-3xl border border-slate-100 ${colorClass} h-full flex flex-col`}
  >
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm font-medium opacity-70 italic">{period}</p>
      </div>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-white/50 p-2 rounded-xl shadow-sm hover:bg-white transition-colors"
        >
          <ArrowRight className="w-5 h-5 text-slate-600" />
        </a>
      ) : (
        <div className="bg-white/50 p-2 rounded-xl shadow-sm">
          <ArrowRight className="w-5 h-5 text-slate-600" />
        </div>
      )}
    </div>
    
    <div className="flex-grow">
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block font-semibold text-brand-orange mb-4 hover:underline underline-offset-4 decoration-2"
        >
          {role}
        </a>
      ) : (
        <p className="font-semibold text-brand-orange mb-4">{role}</p>
      )}
      <ul className="space-y-2 mb-6">
        {items.map((item: string, i: number) => (
          <li key={i} className="text-sm flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 shrink-0" />
            <span className="opacity-80">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="pt-4 border-t border-slate-900/10">
      <div className="flex flex-wrap gap-2">
        {tools.map((tool: string, i: number) => (
          <span key={i} className="px-3 py-1 bg-white/40 text-[10px] font-bold uppercase tracking-wider rounded-md">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const experiences = [
    {
      title: "인스탁스",
      period: "2025.03 ~ Present",
      role: "SNS 트위터 채널 운영 (100%)",
      items: [
        "VOC 분석 및 유저 반응 기반 콘텐츠 개선",
        "팬덤(K-POP 등) 트렌드 반영 콘텐츠 기획",
        "유저 반응 분석을 통한 콘텐츠 참여도 증가"
      ],
      tools: ["Google Sheets"],
      colorClass: "bg-brand-purple",
      link: "https://x.com/instax_korea"
    },
    {
      title: "콘텐츠 퍼포먼스 개선 프로젝트",
      period: "2023.12 ~ 2024.01",
      role: "콘텐츠 기획 및 제작 (100%)",
      items: [
        "콘텐츠 성과 +83.09% 증가 달성",
        "KPI 달성 및 콘텐츠 효율 개선",
        "데이터 기반 인사이트 도출 및 방향성 재정립"
      ],
      tools: ["Word", "PowerPoint", "Figma"],
      colorClass: "bg-brand-pink"
    },
    {
      title: "사조대림",
      period: "2024.06 ~ 2024.09",
      role: "SNS 인스타그램 채널 운영 (100%)",
      items: [
        "KPI 18.39% 상승 및 참여율 증가",
        "1030 타겟 비율 53.6% 확보",
        "채널 성과 분석 및 퍼포먼스 개선 (80%)"
      ],
      tools: ["PowerPoint", "Meta Ads Manager"],
      colorClass: "bg-brand-green",
      link: "https://www.instagram.com/sajodaerim_official/"
    }
  ];

  const educations = [
    { date: "2026. 04", text: "AI 컨텐츠 크리에이터 교육 수료" },
    { date: "2023.07 - 2025.05", text: "광고대행사 AE 실무 경험 기반 커리어 확장" },
    { date: "2023.04 - 2023.05", text: "콘텐츠 기획 및 제작 관련 교육 수료" },
    { date: "2022.06 - 2022.07", text: "실무 중심 마케팅 프로젝트 참여" },
    { date: "2021.04", text: "디자인 및 콘텐츠 제작 교육 이수" },
    { date: "2020.01 - 2020.06", text: "마케팅 및 콘텐츠 관련 교육 수료" }
  ];

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-lavender">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-display font-bold">Ji-su Seo</div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Experience', 'Skills', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium hover:text-brand-orange transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:sgsgh@naver.com" className="p-2 border border-slate-200 rounded-full hover:bg-slate-50">
              <Mail className="w-4 h-4" />
            </a>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider hover:bg-slate-800 transition-colors">
              HIRE ME
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 bg-brand-lavender relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-xs font-bold text-slate-500 mb-8 border border-slate-100">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              AVAILABLE FOR PROJECTS
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-[1.2] mb-10">
              데이터로 사람들의 반응을 읽고, <br />
              콘텐츠로 브랜드의 성과를 만드는 <br />
              <span className="text-brand-orange underline underline-offset-8 decoration-4">콘텐츠 마케터, 서지수</span>입니다.
            </h1>
            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                View My Experience
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="bg-white px-8 py-4 rounded-2xl font-bold border border-slate-200 hover:border-brand-orange transition-all">
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Arched Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:flex justify-center relative"
          >
            <div className="relative w-[400px] h-[550px] bg-brand-orange rounded-t-full flex items-center justify-center overflow-hidden border-[12px] border-white shadow-2xl">
              <img 
                src="https://github.com/sgslove1203-del/js_port_v1/raw/f98dbd2faea15301fa684841e1f4c2163abe9db2/ChatGPT%20Image%202026%EB%85%84%203%EC%9B%94%207%EC%9D%BC%20%EC%98%A4%EC%A0%84%2002_16_05.png" 
                alt="Ji-su Seo"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 right-8">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 animate-spin-slow">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            {/* Decals */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <p className="text-xl font-bold">+83%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Performance Growth</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute top-20 right-10 opacity-10 rotate-12">
          <BookOpen className="w-64 h-64" />
        </div>
        <div className="absolute bottom-10 left-10 text-slate-300 transform -rotate-12 select-none pointer-events-none text-9xl font-black opacity-10 uppercase">
          Ji-su
        </div>
      </main>

      {/* Profile Section */}
      <section id="about" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
             <div className="w-full aspect-square bg-brand-lavender rounded-3xl overflow-hidden relative border border-slate-100 flex items-center justify-center">
                <img 
                  src="https://github.com/sgslove1203-del/js_port_v1/raw/f98dbd2faea15301fa684841e1f4c2163abe9db2/ChatGPT%20Image%202026%EB%85%84%203%EC%9B%94%207%EC%9D%BC%20%EC%98%A4%EC%A0%84%2002_16_05.png" 
                  alt="Working" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  initial={{ rotate: -15, scale: 0.8 }}
                  whileInView={{ rotate: -10, scale: 1 }}
                  className="absolute inset-20 bg-white shadow-2xl rounded-2xl p-6 flex flex-col justify-center gap-4"
                >
                  <div className="flex items-center gap-3">
                    <User className="text-brand-orange" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Name</p>
                      <p className="font-bold">서지수</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-brand-orange" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Birth</p>
                      <p className="font-bold">1999.12.03</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-brand-orange" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact</p>
                      <p className="font-bold">010-3522-6967</p>
                    </div>
                  </div>
                </motion.div>
             </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-brand-lavender text-slate-600 rounded-full mb-6 inline-block">
              About Me
            </span>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              콘텐츠로 성과를 증명하는 <br /> 
              전문 마케터입니다.
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>SNS 채널 운영 및 VOC 분석을 기반으로 사용자의 핵심 니즈를 파악하고, 이를 반영하여 실제적인 성과를 만들어내는 것에 집중합니다.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "SNS 채널 운영 및 콘텐츠 최적화",
                  "VOC 분석 기반 개선 제안",
                  "트렌드 및 팬덤 문화 기획",
                  "브랜드 가치 전달 콘텐츠"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 group">
                    <div className="w-2 h-2 rounded-full bg-brand-orange group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Working experience" badge="Experiences" />
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} {...exp} delay={i * 0.1} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
             >
                <div className="flex items-center gap-3 mb-6">
                  <PenTool className="text-brand-orange" />
                  <h3 className="text-xl font-bold">POPPLY(자사 플랫폼)</h3>
                </div>
                <div className="space-y-4">
                  <a 
                    href="https://www.popply.co.kr/magazine/2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-brand-lavender/30 flex justify-between items-center group cursor-pointer hover:bg-brand-lavender/50 transition-all"
                  >
                    <div>
                      <p className="font-bold">웹 매거진 콘텐츠 작성</p>
                      <p className="text-xs text-slate-500">팝플리 (Popply) | 2023</p>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <div className="p-4 rounded-2xl bg-brand-lavender/30 group cursor-pointer hover:bg-brand-lavender/50 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-bold">개인 SNS 채널 운영</p>
                        <p className="text-xs text-slate-500">콘텐츠 실험 및 성과 분석 | 2025 ~ ing</p>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-slate-200">
                      <video 
                        controls 
                        className="w-full h-auto aspect-video object-cover"
                        poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop"
                      >
                        <source src="https://github.com/sgslove1203-del/js_port_v1/raw/9874475b9c45c6e5649c49d60cc7612f4f442ca7/0423%20%EC%8B%A4%EC%8A%B5_%EC%B9%9C%ED%99%98%EA%B2%BD%20%EB%B8%8C%EB%9E%9C%EB%93%9C%20%EC%98%81%EC%83%81(%EB%B7%B0%ED%8B%B0).mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="p-8 rounded-3xl bg-slate-900 text-white"
             >
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="text-brand-orange" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="space-y-6 relative border-l-2 border-slate-700 ml-3 pl-8">
                  {educations.map((edu, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-brand-orange border-4 border-slate-900" />
                      <p className="text-xs font-bold text-slate-400 mb-1">{edu.date}</p>
                      <p className="text-sm font-medium">{edu.text}</p>
                    </div>
                  ))}
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Expertise & Tools" badge="Skills" />
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Target className="text-brand-orange" />
                Key Skills
              </h3>
              <div className="space-y-4">
                {[
                  { name: "콘텐츠 기획 및 제작", score: "95%" },
                  { name: "SNS 채널 운영", score: "90%" },
                  { name: "데이터 분석 (VOC 기반)", score: "85%" },
                  { name: "퍼포먼스 마케팅 이해", score: "80%" }
                ].map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                      <span>{skill.name}</span>
                      <span className="text-brand-orange">{skill.score}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.score }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-brand-orange"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl border border-slate-100 bg-brand-blue/30 h-full">
                <h3 className="text-xl font-bold mb-6">Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Google Analytics", "Photoshop", "Figma", 
                    "PowerPoint", "Meta Ads", "Google Sheets", "Word"
                  ].map((tool, i) => (
                    <span key={i} className="px-5 py-2.5 bg-white rounded-2xl shadow-sm text-sm font-bold flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-3xl border border-slate-100 bg-brand-orange/5 h-full">
                <h3 className="text-xl font-bold mb-6">Certifications</h3>
                <div className="space-y-4">
                  {[
                    { name: "컴퓨터 활용능력 2급", sub: "대한상공회의소" },
                    { name: "GTQ Photoshop 1급", sub: "한국산업인력공단" },
                    { name: "Google Analytics", sub: "Certificate" },
                    { name: "OPIC IM2", sub: "Language" }
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{cert.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{cert.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Key Message */}
      <section className="py-32 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-5" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="flex justify-center mb-8">
            <MailCheck className="w-16 h-16 text-brand-orange opacity-50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            “데이터로 사람들의 반응을 읽고, <br />
            콘텐츠로 브랜드의 성과를 만드는 마케터”
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-brand-lavender/50 rounded-[40px] p-8 md:p-16 border border-brand-lavender relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Got a project in mind?</h2>
            <p className="text-slate-600">콘텐츠와 성과가 만나는 지점, 함께 고민해 드립니다.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-3xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Email</label>
                <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-3xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Message</label>
              <textarea placeholder="Tell me about your project" rows={4} className="w-full px-6 py-4 rounded-3xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium resize-none" />
            </div>
            <button className="w-full bg-slate-900 text-white py-5 rounded-3xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
              Send Message
            </button>
          </form>

          {/* Social connections */}
          <div className="mt-12 pt-12 border-t border-slate-200 flex flex-col items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Direct Contact</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-brand-orange" />
                </div>
                <span className="font-bold text-sm">sgsgh@naver.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-orange" />
                </div>
                <span className="font-bold text-sm">010-3522-6967</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-display font-bold mb-2">Ji-su Seo</div>
            <p className="text-xs text-slate-400">© 2026 Ji-su Seo. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
             <a href="#" className="p-3 bg-brand-lavender rounded-xl hover:bg-brand-orange transition-all hover:text-white group">
               <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="p-3 bg-brand-lavender rounded-xl hover:bg-brand-orange transition-all hover:text-white group">
               <Twitter className="w-5 h-5" />
             </a>
             <a href="#" className="p-3 bg-brand-lavender rounded-xl hover:bg-brand-orange transition-all hover:text-white group">
               <Linkedin className="w-5 h-5" />
             </a>
          </div>
          <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-300">
            Design Inspired by Meelo
          </div>
        </div>
      </footer>
    </div>
  );
}
