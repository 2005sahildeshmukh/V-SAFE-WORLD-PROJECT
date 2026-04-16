'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Award, Users, CheckCircle, ChevronRight, Quote, Calendar, ArrowRight } from 'lucide-react';
import styles from './page.module.css';
import heroBgImage from '@/assets/images/Hero Background.jpeg';
import healthWellnessImg from '@/assets/images/health and well-being.webp';
import auditsImg from '@/assets/images/audits and inspection.webp';
import defensiveDrivingImg from '@/assets/images/defensive-driving.webp';
import industrialSafetyImg from '@/assets/images/industrial safety.webp';
import fireSafetyImg from '@/assets/images/fire safety.webp';
import contentDevelopmentImg from '@/assets/images/content-development.webp';
import ehsTrainingBlogImg from '@/assets/images/ehs_training_blog.png';
import fireSafetyBlogImg from '@/assets/images/fire_safety_blog.png';
import safetyWeekBlogImg from '@/assets/images/safety_week_blog.png';


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
          <h1 className={styles.heroTitle}>
            &ldquo;One-stop shop for all health and safety training needs&rdquo;
          </h1>
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
              <span className={styles.badgeText}>National Safety<br />Council Member</span>
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
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
              alt="V-Safe World safety professionals in the field"
              className={styles.aboutImg}
            />
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

      {/* Trainings Section */}
      <section className={`${styles.trainingsSection} reveal`}>
        <div className={styles.trainingsTop}>
          <div className={styles.trainingsText}>
            <h2 className={styles.trainingsHeading}>SAFER WORKPLACE</h2>
            <h3 className={styles.trainingsSubheading}>Keeping People safe, injury-free,<br />and productive.</h3>
            <p className={styles.trainingsDesc}>
              V-Safe World is a one-stop shop for all health, safety, and disaster management-related products, services, and solutions. Providing solutions globally for the last 20 years that match the pace of this era that is innovative, cutting-edge, and reliable, we are enveloping the complete suite of Health and Safety training and products for all domains to prevent accidents, incidents, or injuries. Protecting you, your loved ones, and your assets are the prime drivers of our business.
            </p>
            <Link href="/contact" className={styles.enquireBtn}>
              Enquire Now
            </Link>
          </div>
          <div className={styles.trainingsCardsTop}>
            <div className={styles.trainingCard} style={{ backgroundImage: `url("${healthWellnessImg.src}")` }}>
              <div className={styles.trainingOverlay}>
                <h3>HEALTH &amp; WELLNESS</h3>
                <Link href="/trainings" className={styles.trainingReadMore}>
                  READ MORE <ChevronRight size={14} />
                </Link>
              </div>
            </div>
            <div className={styles.trainingCard} style={{ backgroundImage: `url("${industrialSafetyImg.src}")` }}>
              <div className={styles.trainingOverlay}>
                <h3>INDUSTRIAL SAFETY</h3>
                <Link href="/trainings" className={styles.trainingReadMore}>
                  READ MORE <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.trainingsCardsBottom}>
          <div className={styles.trainingCard} style={{ backgroundImage: `url("${defensiveDrivingImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <h3>DEFENSIVE DRIVING</h3>
              <Link href="/trainings" className={styles.trainingReadMore}>
                READ MORE <ChevronRight size={14} />
              </Link>
            </div>
          </div>
          <div className={styles.trainingCard} style={{ backgroundImage: `url("${fireSafetyImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <h3>FIRE SAFETY</h3>
              <Link href="/trainings" className={styles.trainingReadMore}>
                READ MORE <ChevronRight size={14} />
              </Link>
            </div>
          </div>
          <div className={styles.trainingCard} style={{ backgroundImage: `url("${auditsImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <h3>AUDITS &amp; INSPECTION</h3>
              <Link href="/audits" className={styles.trainingReadMore}>
                READ MORE <ChevronRight size={14} />
              </Link>
            </div>
          </div>
          <div className={styles.trainingCard} style={{ backgroundImage: `url("https://images.unsplash.com/photo-1544485547-759b66236df7?auto=format&fit=crop&q=80&w=600&h=400")` }}>
            <div className={styles.trainingOverlay}>
              <h3>PPE</h3>
              <Link href="/equipment" className={styles.trainingReadMore}>
                READ MORE <ChevronRight size={14} />
              </Link>
            </div>
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
            <div key={i} className={styles.logoItem}>
              <img src={`https://placehold.co/150x60/f8f9fa/a0aec0?text=Logo+${(i % 6) + 1}`} alt={`Client ${(i % 6) + 1}`} style={{ borderRadius: '8px' }} />
            </div>
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

      {/* Blog section removed as requested */}
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
