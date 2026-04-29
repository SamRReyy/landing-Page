import type { CSSProperties, ComponentType } from 'react';
import { useEffect, useState } from 'react';
import { TrendingUp, Download, DollarSign, PieChart, CheckSquare, BarChart3, FileText, CloudRain, Moon, Sun } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const APK_DOWNLOAD_URL = 'https://github.com/SamRReyy/-BusinessTrackerJava/releases/download/v1.0.0/BusinessTracker_v1.0.apk';
const APK_VERSION = 'v1.0.0';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        background:
          'radial-gradient(circle at top, var(--page-glow) 0%, transparent 28%), linear-gradient(180deg, var(--page-bg-top) 0%, var(--page-bg-bottom) 100%)',
        color: 'var(--foreground)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Navigation isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <Hero />
      <StatsBar />
      <Features />
      <AppPreview />
      <HowItWorks />
      <DownloadCTA />
      <Footer />
    </div>
  );
}

function Navigation({ isDark, onToggleTheme }: { isDark: boolean; onToggleTheme: () => void }) {
  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{ backgroundColor: 'var(--nav-surface)', borderColor: 'var(--border-soft)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3 gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20"
              style={{ background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))' }}
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span
              className="font-bold text-lg sm:text-xl truncate"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                backgroundImage: 'linear-gradient(135deg, var(--title-gradient-start), var(--title-gradient-end))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Business Tracker
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--card-elevated)', border: '1px solid var(--border-soft)' }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" style={{ color: 'var(--accent-warm)' }} /> : <Moon className="w-5 h-5" style={{ color: 'var(--navy)' }} />}
            </button>

            <a
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="px-5 sm:px-6 py-2.5 rounded-xl text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))', fontFamily: 'DM Sans, sans-serif' }}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download APK</span>
              <span className="sm:hidden">APK</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border"
            style={{
              backgroundColor: 'var(--badge-bg)',
              borderColor: 'var(--border-soft)',
              color: 'var(--primary-green)',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            <PieChart className="w-4 h-4" />
            Free Android App
          </div>

          <h1 className="text-5xl lg:text-7xl tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, lineHeight: 1 }}>
            <span className="block" style={{ color: 'var(--heading-text)' }}>
              Track Every Peso.
            </span>
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--title-gradient-start), var(--title-gradient-end))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Grow Every Business.
            </span>
          </h1>

          <p className="text-lg lg:text-xl max-w-2xl" style={{ color: 'var(--body-text)' }}>
            Log expenses, manage budgets, assign tasks, and monitor revenue with a landing page that now matches your app&apos;s dark, focused business look.
          </p>

          <div className="space-y-4">
            <a
              href={APK_DOWNLOAD_URL}
              download
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-white flex items-center justify-center gap-3 text-lg pulse-ring hover:opacity-90 transition-opacity shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))',
                fontFamily: 'DM Sans, sans-serif',
                boxShadow: '0 20px 40px var(--cta-shadow)',
              }}
            >
              <Download className="w-5 h-5" />
              Download Now - Free APK
            </a>
            <p className="text-sm" style={{ color: 'var(--body-text)' }}>
              Android - No sign-up required - {APK_VERSION}
            </p>
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--body-text)' }}>
              <span className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4" style={{ color: 'var(--primary-green)' }} />
                PDF Export Ready
              </span>
              <span className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4" style={{ color: 'var(--primary-green)' }} />
                Google Sign-In
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 relative">
          <div
            className="rounded-[2rem] p-6 md:p-8 border relative overflow-hidden"
            style={{ backgroundColor: 'var(--showcase-surface)', borderColor: 'var(--border-soft)', boxShadow: '0 30px 80px var(--surface-shadow)' }}
          >
            <div
              className="absolute inset-x-8 top-0 h-24 blur-3xl opacity-70"
              style={{ background: 'linear-gradient(90deg, transparent, var(--page-glow), transparent)' }}
            />
            <div className="relative z-10 flex gap-4 justify-center">
              <div className="transform rotate-[-6deg]" style={{ filter: 'drop-shadow(0 18px 40px var(--phone-shadow))' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
                  alt="Login Screen"
                  className="w-40 sm:w-48 h-80 sm:h-96 object-cover rounded-[2rem] border-4"
                  style={{ borderColor: 'var(--phone-frame)' }}
                />
              </div>
              <div className="transform rotate-[6deg] mt-8" style={{ filter: 'drop-shadow(0 18px 40px var(--phone-shadow))' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=600&fit=crop"
                  alt="Dashboard Screen"
                  className="w-40 sm:w-48 h-80 sm:h-96 object-cover rounded-[2rem] border-4"
                  style={{ borderColor: 'var(--phone-frame)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center rounded-[2rem] px-6 py-8 border"
          style={{ backgroundColor: 'var(--card-elevated)', borderColor: 'var(--border-soft)', boxShadow: '0 20px 60px var(--surface-shadow)' }}
        >
          <StatItem label="5+" value="Core Business Tools" />
          <StatItem label="1-Tap" value="PDF Export" />
          <StatItem label="100%" value="Free to Download" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <div className="text-3xl lg:text-4xl" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: 'var(--heading-text)' }}>
        {label}
      </div>
      <div className="text-lg" style={{ color: 'var(--body-text)' }}>
        {value}
      </div>
    </div>
  );
}

function Features() {
  const features = [
    { icon: DollarSign, title: 'Expense Tracking', description: 'Record and categorize every business cost' },
    { icon: PieChart, title: 'Budget Planning', description: 'Set budgets and monitor spending in real time' },
    { icon: CheckSquare, title: 'Task Management', description: 'Assign and track business tasks with status' },
    { icon: BarChart3, title: 'Revenue Monitoring', description: 'Track incoming revenue vs. total expenses' },
    { icon: FileText, title: 'PDF Export', description: 'Generate clean reports with one tap' },
    { icon: CloudRain, title: 'Financial Summary', description: 'See profit/loss, budget, and spending at a glance' },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--primary-green)', fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            WHAT IT DOES
          </p>
          <h2 className="text-3xl lg:text-5xl" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: 'var(--heading-text)' }}>
            Everything Your Business Needs In One App
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  title: string;
  description: string;
}) {
  return (
    <div
      className="p-6 rounded-[1.5rem] border transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundColor: 'var(--card-surface)', borderColor: 'var(--border-soft)', boxShadow: '0 20px 50px var(--surface-shadow)' }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ background: 'linear-gradient(135deg, var(--icon-bg), var(--badge-bg))' }}
      >
        <Icon className="w-6 h-6" style={{ color: 'var(--dark-green)' }} />
      </div>
      <h3 className="mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: 'var(--heading-text)' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--body-text)' }}>{description}</p>
    </div>
  );
}

function AppPreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl text-center mb-12" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: 'var(--heading-text)' }}>
          See It In Action
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <PreviewPhone image="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=600&fit=crop" caption="Sign in securely" />
          <PreviewPhone image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=600&fit=crop" caption="Full financial overview" />
          <PreviewPhone image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=600&fit=crop" caption="Track every record" />
        </div>
      </div>
    </section>
  );
}

function PreviewPhone({ image, caption }: { image: string; caption: string }) {
  return (
    <div
      className="flex flex-col items-center rounded-[1.75rem] border p-5"
      style={{ backgroundColor: 'var(--showcase-surface)', borderColor: 'var(--border-soft)' }}
    >
      <div className="mb-4" style={{ filter: 'drop-shadow(0 10px 30px var(--phone-shadow))' }}>
        <ImageWithFallback
          src={image}
          alt={caption}
          className="w-64 h-auto object-cover rounded-[2rem] border-4"
          style={{ borderColor: 'var(--phone-frame)' }}
        />
      </div>
      <p className="text-center" style={{ color: 'var(--body-text)', fontFamily: 'DM Sans, sans-serif' }}>
        {caption}
      </p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl text-center mb-16" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: 'var(--heading-text)' }}>
          Get Started in 3 Steps
        </h2>

        <div className="space-y-8">
          <Step number={1} title="Download the APK" description="Install directly on your Android device" />
          <div className="flex justify-center">
            <div className="w-px h-12 border-l-2 border-dashed" style={{ borderColor: 'var(--primary-green)' }} />
          </div>
          <Step number={2} title="Add Your Business Data" description="Input expenses, budgets, and revenue" />
          <div className="flex justify-center">
            <div className="w-px h-12 border-l-2 border-dashed" style={{ borderColor: 'var(--primary-green)' }} />
          </div>
          <Step number={3} title="Export & Review" description="Generate PDF reports and track your growth" />
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div
      className="flex items-center gap-6 rounded-[1.5rem] border p-6"
      style={{ backgroundColor: 'var(--card-surface)', borderColor: 'var(--border-soft)', boxShadow: '0 16px 40px var(--surface-shadow)' }}
    >
      <div
        className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
        style={{ background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))', fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}
      >
        {number}
      </div>
      <div>
        <h3 className="mb-1" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: 'var(--heading-text)' }}>
          {title}
        </h3>
        <p style={{ color: 'var(--body-text)' }}>{description}</p>
      </div>
    </div>
  );
}

function DownloadCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center rounded-[2rem] px-6 py-12 border overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, var(--cta-bg-start), var(--cta-bg-end))',
            borderColor: 'var(--cta-border)',
            boxShadow: '0 30px 80px var(--cta-shadow)',
          }}
        >
          <div className="absolute -top-16 -right-10 w-48 h-48 rounded-full opacity-25 blur-3xl" style={{ backgroundColor: 'var(--page-glow)' }} />
          <div className="relative">
            <h2 className="text-3xl lg:text-5xl text-white mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
              Your Business Deserves Better Tracking.
            </h2>
            <p className="text-lg lg:text-xl text-white/85 mb-8">
              Download Business Tracker free today and take control of your finances.
            </p>
            <a
              href={APK_DOWNLOAD_URL}
              download
              className="px-10 py-4 rounded-xl text-lg inline-flex items-center gap-3 mx-auto transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: 'white', color: 'var(--navy)', fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}
            >
              <Download className="w-5 h-5" />
              Download APK Now
            </a>
            <p className="text-white/80 text-sm mt-4">Free - Android - No account needed - {APK_VERSION}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t" style={{ borderColor: 'var(--border-soft)', backgroundColor: 'var(--footer-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))' }}
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
                Business Tracker
              </div>
              <div className="text-white/70 text-sm">Built for business owners who mean business.</div>
            </div>
          </div>
          <div className="flex gap-6 text-white/70 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
            <span>&copy; 2025 Business Tracker</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
