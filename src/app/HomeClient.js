'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Award, Users, CheckCircle, GraduationCap, ClipboardCheck, HardHat, Flame, Briefcase, ChevronRight, Quote, Calendar, ArrowRight, BookOpen, Search, HeartPulse, Image as ImageIcon } from 'lucide-react';
import styles from './page.module.css';
import heroBgImage from '@/assets/images/Hero Background.jpeg';




export default function HomeClient({ testimonials, blogs }) {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.heroSlide} ${styles.active}`}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroBg} style={{ backgroundImage: `url("${heroBgImage.src}")` }} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Your Safety Partner</p>
          <h1 className={styles.heroTitle}>
            {'One-stop shop for all health and safety training needs'.split(' ').map((word, i) =>
              ['safety', 'training', 'audits'].includes(word.toLowerCase())
                ? <span key={i}>{word} </span>
                : word + ' '
            )}
          </h1>
          <p className={styles.heroDesc}>Comprehensive EHS training, safety audits, premium equipment, and expert consultancy — delivered with excellence.</p>
          <div className={styles.heroActions}>
            <Link href="/contact" className="btn btn-accent btn-lg">National Safety Week 2024 — Book Now!</Link>
          </div>
        </div>



        <div className={styles.heroBadges}>
          <div className={styles.heroBadgesInner}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}><Award size={18} /></div>
              <span className={styles.badgeText}>DISH Approved</span>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}><Shield size={18} /></div>
              <span className={styles.badgeText}>National Safety<br/>Council Member</span>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}><Users size={18} /></div>
              <span className={styles.badgeText}>50+ Trusted Clients</span>
            </div>
          </div>
        </div>
      </section>



      {/* About Preview */}
      <section className={`${styles.aboutPreview} reveal`}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <div className={styles.aboutImagePlaceholder}>
              <ImageIcon size={48} />
              <span>Company Image</span>
            </div>
          </div>
          <div className={styles.aboutText}>
            <h2>About <span>V-Safe World</span></h2>
            <p>
              V-Safe World Pvt Ltd is a leading provider of comprehensive Environment, Health, and Safety (EHS) solutions. 
              We specialize in delivering world-class safety training programs, conducting thorough audits and inspections, 
              supplying premium safety equipment, and providing expert consultancy services.
            </p>
            <div className={styles.aboutFeatures}>
              <div className={styles.aboutFeature}><CheckCircle size={18} /> Certified Trainers</div>
              <div className={styles.aboutFeature}><CheckCircle size={18} /> Industry Expertise</div>
              <div className={styles.aboutFeature}><CheckCircle size={18} /> Custom Programs</div>
              <div className={styles.aboutFeature}><CheckCircle size={18} /> Pan India Presence</div>
            </div>
            <Link href="/about" className="btn btn-primary">Learn More About Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>


      {/* Client Logos */}
      <section className={styles.clientLogos}>
        <div className={styles.clientLogosTitle}>
          <h2>Our Prestigious Clients</h2>
        </div>
        <div className={styles.logosTrack}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.logoItem}>Client {(i % 6) + 1}</div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} reveal`}>
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Trusted by leading organizations across industries</p>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}><Quote size={20} /></div>
              <blockquote>{t.quote}</blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.author[0]}</div>
                <div className={styles.authorInfo}>
                  <strong>{t.author}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className={`${styles.blogPreview} reveal`}>
        <div className="section-title">
          <h2>Latest Articles</h2>
          <p>Stay updated with the latest in workplace safety</p>
        </div>
        <div className={styles.blogGrid}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.blogCard}>
              <div className={styles.blogThumb}><BookOpen size={32} /></div>
              <div className={styles.blogBody}>
                <div className={styles.blogDate}><Calendar size={12} /> {blog.publishDate}</div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <span className={styles.blogReadMore}>Read More <ArrowRight size={14} /></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry + Map */}
      <section className={`${styles.enquiry} reveal`}>
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Have a question? Send us a message and we will get back to you shortly</p>
        </div>
        <div className={styles.enquiryGrid}>
          <div className={styles.enquiryForm}>
            <h3>Send Us an Enquiry</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="your@email.com" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-input" placeholder="+91-XXXXXXXXXX" />
                </div>
                <div className="form-group">
                  <label className="form-label">Service Interest</label>
                  <select className="form-select">
                    <option value="">Select a service</option>
                    <option value="training">Training Programs</option>
                    <option value="audits">Audits & Inspections</option>
                    <option value="equipment">Safety Equipment</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell us about your requirements..." rows={4}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Send Enquiry <ArrowRight size={16} />
              </button>
            </form>
          </div>
          <div className={styles.enquiryMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="V-Safe World Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
