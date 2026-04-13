'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, Globe, Menu, X, Shield, ChevronDown } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import styles from './Header.module.css';

const trainingCategories = [
  {
    title: 'Health & Wellness',
    items: [
      'First Aid, CPR & AED Training',
      'POSH Awareness',
      'Women Health & Safety',
      'Diet & Nutrition',
      'Home Life Safety',
      'Work Life Balance',
      'Mental Health & Stress Management',
      'Ergonomics & Postures'
    ]
  },
  {
    title: 'Fire Safety Training',
    items: [
      'Fire Extinguisher Training',
      'Fire Fighting Training',
      'Evacuation Drills',
      'Emergency Response Team Training',
      'Fire Marshal Training'
    ]
  },
  {
    title: 'Road Safety - Defensive Driving',
    items: [
      'Two Wheeler Riders',
      'Light Motor Vehicle',
      'Heavy Motor Vehicle',
      'Ambulance & School Bus',
      'Forklift/MHE/Crane/Hydra',
      'Loaders & Tankers',
      'Hazards Vehicles Drivers',
      'Simulator Training (2W/4W/HMV)',
      'Mines Road Safety',
      'Fleet Audit Management',
      'Fuel Saving & Efficiency',
      'Journey Risk Management',
      'Vehicle Inspection',
      'Drunk Busters Activity',
      'Road Show Program'
    ]
  },
  {
    title: 'Industrial Safety',
    items: [
      'Industrial Safety Mela',
      'Behaviour Based Safety',
      'Work At Height',
      'Electrical Safety',
      'LOTO Training',
      'Confined Space',
      'Chemical Safety',
      'Workplace Safety',
      'Permit To Work',
      'HIRA',
      'Occupational Safety',
      'Scaffolding Safety',
      'Construction Safety'
    ]
  },
  {
    title: 'Disaster Management',
    items: [
      'Evacuation Drill',
      'Disaster Preparedness Training',
      'Search & Rescue',
      'Hurricane Safety',
      'Flood Safety',
      'Event Safety',
      'Home Safety',
      'Rescue From Highrise Building'
    ]
  }
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Trainings', href: '/trainings', hasMegaMenu: true },
  { label: 'Audits and Inspections', href: '/audits' },
  { label: 'Safety Equipment (PPEs)', href: '/equipment' },
  { label: 'Consultancy', href: '/consultancy' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header({ settings }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTrainingsOpen, setMobileTrainingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileTrainingsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Utility Bar */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityInner}>
          <div className={styles.utilityLeft}>
            <span className={styles.utilityItem}>
              <Mail /> {settings?.email || 'info@vsafeworld.com'}
            </span>
            <span className={styles.utilityItem}>
              <Phone /> {settings?.phone || '+91-XXXXXXXXXX'}
            </span>
          </div>
          <div className={styles.utilityRight}>
            <span className={styles.globeTag}>
              <Globe /> Services Across the Globe
            </span>
            <div className={styles.socialLinks}>
              {settings?.socialLinks?.facebook && <a href={settings.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>}
              {settings?.socialLinks?.instagram && <a href={settings.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>}
              {settings?.socialLinks?.linkedin && <a href={settings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>}
              {settings?.socialLinks?.youtube && <a href={settings.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>}
              {settings?.socialLinks?.twitter && <a href={settings.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter /></a>}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Shield size={24} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>V-Safe World</span>
              <span className={styles.logoSub}>Pvt Ltd</span>
            </div>
          </Link>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <div key={item.href} className={styles.navItemWrapper}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown size={14} style={{ marginLeft: 4 }} />}
                </Link>
                
                {item.hasMegaMenu && (
                  <div className={styles.megaMenu}>
                    <div className={styles.megaMenuInner}>
                      {trainingCategories.map((cat, idx) => (
                        <div key={idx} className={styles.megaColumn}>
                          <h4>{cat.title}</h4>
                          <ul>
                            {cat.items.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <Link href={`/trainings#${sub.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}>
                                  {sub}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.navCta}>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Get a Quote
            </Link>
          </div>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <div key={item.href} className={styles.mobileNavItemWrapper}>
              <div className={styles.mobileNavLinkWrapper}>
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
                {item.hasMegaMenu && (
                  <button 
                    onClick={() => setMobileTrainingsOpen(!mobileTrainingsOpen)} 
                    className={styles.mobileToggleBtn}
                  >
                    <ChevronDown size={18} className={mobileTrainingsOpen ? styles.rotate : ''} />
                  </button>
                )}
              </div>
              {item.hasMegaMenu && mobileTrainingsOpen && (
                <div className={styles.mobileMegaMenu}>
                  {trainingCategories.map((cat, idx) => (
                    <div key={idx} className={styles.mobileMegaColumn}>
                      <h4>{cat.title}</h4>
                      <ul>
                        {cat.items.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <Link 
                              href={`/trainings#${sub.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className={styles.mobileCta}>
          <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
