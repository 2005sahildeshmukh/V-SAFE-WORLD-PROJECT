import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, ChevronRight, Send } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Brand Column */}
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <span className={styles.footerLogoText}>V-Safe World</span>
          </div>
          <p>
            V-Safe World Pvt Ltd is your trusted partner for comprehensive EHS training, 
            safety audits, premium safety equipment, and expert consultancy services. 
            Building safer workplaces, one organization at a time.
          </p>
          <div className={styles.footerSocial}>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <div className={styles.footerLinks}>
            <Link href="/"><ChevronRight size={14} /> Home</Link>
            <Link href="/about"><ChevronRight size={14} /> About Us</Link>
            <Link href="/trainings"><ChevronRight size={14} /> Trainings</Link>
            <Link href="/audits"><ChevronRight size={14} /> Audits and Inspections</Link>
            <Link href="/equipment"><ChevronRight size={14} /> Safety Equipment (PPEs)</Link>
            <Link href="/gallery"><ChevronRight size={14} /> Gallery</Link>
            <Link href="/contact"><ChevronRight size={14} /> Contact Us</Link>
          </div>
        </div>

        {/* Services */}
        <div className={styles.footerColumn}>
          <h4>Our Services</h4>
          <div className={styles.footerLinks}>
            <Link href="/trainings"><ChevronRight size={14} /> EHS Training</Link>
            <Link href="/trainings"><ChevronRight size={14} /> Fire Safety Training</Link>
            <Link href="/trainings"><ChevronRight size={14} /> Industrial Safety</Link>
            <Link href="/audits"><ChevronRight size={14} /> Audits and Inspections</Link>
            <Link href="/equipment"><ChevronRight size={14} /> Safety Equipment (PPEs)</Link>
          </div>
        </div>

        {/* Contact */}
        <div className={styles.footerColumn}>
          <h4>Contact Us</h4>
          <div className={styles.contactItem}>
            <Phone /> <span>+91 XXXXXXXXXX</span>
          </div>
          <div className={styles.contactItem}>
            <Mail /> <span>info@vsafeworld.com</span>
          </div>
          <div className={styles.contactItem}>
            <MapPin /> <span>Your Company Address Here</span>
          </div>
          <div className={styles.newsletter}>
            <p>Subscribe to our Newsletter</p>
            <form className={styles.newsletterForm} action="#">
              <input type="email" placeholder="Your email address" />
              <button type="submit"><Send size={14} /></button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <span>© {new Date().getFullYear()} V-Safe World Pvt Ltd. All rights reserved.</span>
          <div className={styles.footerBottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
