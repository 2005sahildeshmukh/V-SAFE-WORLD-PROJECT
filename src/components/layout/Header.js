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
    slug: 'health-wellness',
    items: [
      'First Aid, CPR & AED',
      'POSH Awareness',
      'Women Health & Safety',
      'Diet & Nutrition',
      'Work Life Balance',
      'Mental Health & Stress Management',
      'Ergonomics & Postures'
    ]
  },
  {
    title: 'Fire Safety Training',
    slug: 'fire-safety',
    items: [
      'Fire Fighting Training',
      'Evacuation Drills',
      'Fire Mock Drill',
      'Emergency Response Team',
      'Fire Marshal Training'
    ]
  },
  {
    title: 'Road Safety',
    slug: 'road-safety',
    items: [
      'Road Safety Awareness',
      'Defensive Driving Training (2W/4W/HMV)',
      'Emergency Vehicle Training',
      'Hazardous Material Vehicles Training',
      'MHE Training (Forklift / BOPT / Reach Truck / EOT / Crane / Hydra)',
      'Simulator & VR Training',
      'Journey Risk Management',
      'Road Show Program',
      'Road Accident Mock Drill',
      'Engagement Activity (Drunk Busters / Plant Safety Mela)'
    ]
  },
  {
    title: 'Industrial Safety',
    slug: 'industrial-safety',
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
      'Risk Assessment - HIRA & EA&I',
      'Occupational Safety',
      'Scaffolding Safety',
      'Construction Safety'
    ]
  },
  {
    title: 'Disaster Management',
    slug: 'disaster-management',
    items: [
      'Evacuation Drills',
      'Disaster Preparedness',
      'Search & Rescue',
      'Mock Drill (Earthquake / Flood / Hurricane)',
      'Rescue From Highrise Building'
    ]
  },
  {
    title: 'Accident Investigation',
    slug: 'accident-investigation',
    items: [
      'Road Accident Investigation',
      'Workplace Accident Investigation (Industries / Warehouse / Construction)'
    ]
  }
];

const auditCategories = [
  {
    title: 'Compliance & Management',
    slug: 'compliance-management',
    items: ['ISO 9001 - Quality Management', 'ISO 14001 - Environmental Management', 'ISO 45001 - Occupational Health & Safety', 'Health & Safety Audits', 'Workplace Safety Audit', 'School Audits']
  },
  {
    title: 'Specialized Safety',
    slug: 'specialized-safety',
    items: ['Fire Safety Audit', 'Electrical Safety Audit', 'Warehouse Safety Audit', 'Emergency Preparedness Audit']
  },
  {
    title: 'Transportation & Logistics',
    slug: 'transportation-logistics',
    items: ['2W/4W/HMV Vehicles Audit', 'Journey Risk Management', 'Forklift/Crane Inspection']
  },
  {
    title: 'Site & Field Inspections',
    slug: 'site-field-inspections',
    items: ['Confined Space Inspection', 'Construction Site Inspection', 'Scaffolding Inspection']
  }
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Trainings', href: '/trainings', hasMegaMenu: true, categories: trainingCategories, slug: 'trainings' },
  { label: 'Audits and Inspections', href: '/audits', hasMegaMenu: true, categories: auditCategories, slug: 'audits' },
  { label: 'Safety Equipment (PPEs)', href: '/equipment' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header({ settings }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState({}); // Track multiple submenus
  const [scrolled, setScrolled] = useState(false);
  const [forceCloseMegaMenu, setForceCloseMegaMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileMenuOpen({});
  }, [pathname]);

  const handleMegaMenuClick = () => {
    setForceCloseMegaMenu(true);
    setTimeout(() => {
      setForceCloseMegaMenu(false);
    }, 200);
  };

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
              <Phone /> {settings?.phone || '+91 XXXXXXXXXX'}
            </span>
          </div>
          <div className={styles.utilityRight}>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Shield size={28} strokeWidth={2.5} color="var(--color-white)" />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>V-Safe World</span>
              <span className={styles.logoSub}>Pvt Ltd</span>
              <span className={styles.logoTagline}>Your Safety Partner</span>
            </div>
          </Link>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <div key={item.href} className={styles.navItemWrapper}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                  onClick={item.hasMegaMenu ? handleMegaMenuClick : undefined}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown size={14} style={{ marginLeft: 4 }} />}
                </Link>

                {item.hasMegaMenu && (
                  <div className={styles.megaMenu} style={forceCloseMegaMenu ? { display: 'none' } : undefined}>
                    <div className={styles.megaMenuInner}>
                      {item.categories.map((cat, idx) => {
                        return (
                          <div key={idx} className={styles.megaColumn}>
                            <h4>{cat.title}</h4>
                            <ul>
                              {cat.items.map((sub, sIdx) => {
                                const subSlug = sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                                return (
                                  <li key={sIdx}>
                                    <Link 
                                      href={`/${item.slug}/${cat.slug}/${subSlug}`}
                                      onClick={handleMegaMenuClick}
                                    >
                                      {sub}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA removed */}

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
                    onClick={() => setMobileMenuOpen(prev => ({ ...prev, [item.slug]: !prev[item.slug] }))}
                    className={styles.mobileToggleBtn}
                  >
                    <ChevronDown size={18} className={mobileMenuOpen[item.slug] ? styles.rotate : ''} />
                  </button>
                )}
              </div>
              {item.hasMegaMenu && mobileMenuOpen[item.slug] && (
                <div className={styles.mobileMegaMenu}>
                  {item.categories.map((cat, idx) => {
                    return (
                      <div key={idx} className={styles.mobileMegaColumn}>
                        <h4>{cat.title}</h4>
                        <ul>
                          {cat.items.map((sub, sIdx) => {
                            const subSlug = sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                            return (
                              <li key={sIdx}>
                                <Link
                                  href={`/${item.slug}/${cat.slug}/${subSlug}`}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {sub}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* Mobile CTA removed */}
      </div>
    </>
  );
}
