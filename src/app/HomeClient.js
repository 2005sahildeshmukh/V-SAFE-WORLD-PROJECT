'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Award, Users, CheckCircle, ChevronRight, Quote, Calendar, ArrowRight, GraduationCap } from 'lucide-react';
import styles from './page.module.css';
import heroBgImage from '@/assets/images/Background.jpg';
import healthWellnessImg from '@/assets/images/health and well-being.webp';
import auditsImg from '@/assets/images/audits and inspection.webp';
import defensiveDrivingImg from '@/assets/images/defensive-driving.webp';
import industrialSafetyImg from '@/assets/images/industrial safety.webp';
import fireSafetyImg from '@/assets/images/fire safety.webp';
import accidentInvestigationImg from '@/assets/images/trainings/Road Accident Investigation.webp';
import ppeImg from '@/assets/images/ppe.jpg';
import adaniLogo from '@/assets/images/Adani.webp';
import adityaBirlaLogo from '@/assets/images/Aditya birla logo.webp';
import cocaColaLogo from '@/assets/images/Coca-Cola_logo.svg.webp';
import ltLogo from '@/assets/images/L&T.webp';

export default function HomeClient({ testimonials }) {
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
            &ldquo;Your Trusted Partner in Health & Safety Excellence&rdquo;
          </h1>
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
              V-Safe World is committed to delivering high-quality Health &amp; Safety Training, Audits, Consultancy and PPE Solutions to ensure safe, compliant and sustainable workplaces.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Our mission is to protect lives and the workplace by proactively preventing harm. We combine deep expertise with a culture of continuous improvement to ensure safety excellence across every project we touch.
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
        <div className={styles.trainingsHeader}>
          <div className={styles.trainingsHeaderLeft}>
            <span className={styles.trainingsTag}><Shield size={14} /> Our Expertise</span>
            <h2 className={styles.trainingsHeading}>What We <span>Offer</span></h2>
          </div>
          <div className={styles.trainingsHeaderRight}>
            <p className={styles.trainingsDesc}>
              V-Safe World is your one-stop destination for health, safety, and disaster management solutions — delivering innovative, cutting-edge services for over 20 years.
            </p>
            <Link href="/contact" className={styles.enquireBtn}>
              Enquire Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.trainingsGrid}>
          <Link href="/trainings/health-wellness/first-aid-cpr-aed" className={`${styles.trainingCard} ${styles.trainingCardLarge}`} style={{ backgroundImage: `url("${healthWellnessImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>01</span>
              <div className={styles.trainingInfo}>
                <h3>Health & Wellness</h3>
                <p>Comprehensive CPR and First Aid programs to foster a safe and healthy workplace.</p>
                <ul className={styles.cardFeatures}>
                  <li>CPR & AED Certification</li>
                  <li>Emergency Response</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore Programs <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/trainings/fire-safety/fire-fighting-training" className={styles.trainingCard} style={{ backgroundImage: `url("${fireSafetyImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>02</span>
              <div className={styles.trainingInfo}>
                <h3>Fire Safety Training</h3>
                <p>Expert-led training on fire prevention, extinguisher usage, and evacuation drills.</p>
                <ul className={styles.cardFeatures}>
                  <li>Fire Warden Training</li>
                  <li>Mock Evacuation Drills</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/services/industrial-safety" className={styles.trainingCard} style={{ backgroundImage: `url("${industrialSafetyImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>03</span>
              <div className={styles.trainingInfo}>
                <h3>Industrial Safety</h3>
                <p>Specialized training for high-risk workplaces, including Work at Height and LOTO protocols.</p>
                <ul className={styles.cardFeatures}>
                  <li>LOTO Procedures</li>
                  <li>Confined Space Entry</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/services/audits-inspections" className={styles.trainingCard} style={{ backgroundImage: `url("${auditsImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>04</span>
              <div className={styles.trainingInfo}>
                <h3>Audits &amp; Inspections</h3>
                <p>Systematic safety evaluations and compliance audits with detailed professional reports.</p>
                <ul className={styles.cardFeatures}>
                  <li>Health & Safety Compliance</li>
                  <li>Electrical Safety Audits</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/trainings/accident-investigation/road-accident-investigation" className={styles.trainingCard} style={{ backgroundImage: `url("${accidentInvestigationImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>05</span>
              <div className={styles.trainingInfo}>
                <h3>Accident Investigation</h3>
                <p>Root cause analysis and professional reporting for workplace and transport accidents.</p>
                <ul className={styles.cardFeatures}>
                  <li>Root Cause Analysis</li>
                  <li>Incident Reporting</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/trainings/road-safety/road-safety-awareness" className={styles.trainingCard} style={{ backgroundImage: `url("${defensiveDrivingImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>06</span>
              <div className={styles.trainingInfo}>
                <h3>Road Safety</h3>
                <p>Comprehensive defensive driving and road safety programs to ensure safe transportation.</p>
                <ul className={styles.cardFeatures}>
                  <li>Defensive Driving</li>
                  <li>Vehicle Safety Checks</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/equipment" className={styles.trainingCard} style={{ backgroundImage: `url("${ppeImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>07</span>
              <div className={styles.trainingInfo}>
                <h3>Safety Equipment (PPE)</h3>
                <p>High-quality Personal Protective Equipment solutions for various industrial applications.</p>
                <ul className={styles.cardFeatures}>
                  <li>Industrial PPE</li>
                  <li>Safety Consultation</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
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
            <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <a href="https://maps.google.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '6px' }}>
                📍 View our physical office on Google Maps
              </a>
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Form integration ready! Please link your Google Form/App Script URL in the source code.');
            }}>
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
