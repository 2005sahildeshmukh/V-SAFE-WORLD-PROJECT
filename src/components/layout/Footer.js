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
import contentDevelopmentImg from '@/assets/images/content-development.webp';
import adaniLogo from '@/assets/images/Adani.webp';
import adityaBirlaLogo from '@/assets/images/Aditya birla logo.webp';
import cocaColaLogo from '@/assets/images/Coca-Cola_logo.svg.webp';
import ltLogo from '@/assets/images/L&T.webp';
import ppeImg from '@/assets/images/ppe.jpg';


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
              V-Safe World is committed to delivering high-quality Health &amp; Safety Training, Audits, Consultancy and PPE Solutions to ensure safe, compliant and sustainable workplaces.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We work to protect people, property and the environment by proactively preventing risks, incidents and injuries. Through our expertise, dedication and continuous improvement, we build a strong culture of safety excellence across all operations.
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
          <Link href="/services/health-wellness" className={`${styles.trainingCard} ${styles.trainingCardLarge}`} style={{ backgroundImage: `url("${healthWellnessImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>01</span>
              <div className={styles.trainingInfo}>
                <h3>Health &amp; Wellness</h3>
                <p>Comprehensive CPR, First Aid, POSH awareness, and mental health programs to foster a safe and healthy workplace environment.</p>
                <ul className={styles.cardFeatures}>
                  <li>Basic Life Support (BLS)</li>
                  <li>Workplace First Aid</li>
                  <li>Stress Management</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore Programs <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/services/fire-safety" className={styles.trainingCard} style={{ backgroundImage: `url("${fireSafetyImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>02</span>
              <div className={styles.trainingInfo}>
                <h3>Fire Safety</h3>
                <p>Expert-led training on fire prevention, extinguisher usage, and evacuation drills for maximum preparedness.</p>
                <ul className={styles.cardFeatures}>
                  <li>Fire Warden Training</li>
                  <li>Mock Evacuation Drills</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/services/road-safety" className={styles.trainingCard} style={{ backgroundImage: `url("${defensiveDrivingImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>03</span>
              <div className={styles.trainingInfo}>
                <h3>Defensive Driving</h3>
                <p>Advanced road safety workshops and vehicle handling techniques to reduce accident risks and improve driver behavior.</p>
                <ul className={styles.cardFeatures}>
                  <li>Hazard Anticipation</li>
                  <li>Technical Handling</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/services/industrial-safety" className={styles.trainingCard} style={{ backgroundImage: `url("${industrialSafetyImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>04</span>
              <div className={styles.trainingInfo}>
                <h3>Industrial Safety</h3>
                <p>Specialized training for high-risk environments, including Work at Height, LOTO, and confined space protocols.</p>
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
              <span className={styles.trainingNum}>05</span>
              <div className={styles.trainingInfo}>
                <h3>Audits &amp; Inspection</h3>
                <p>Systematic safety evaluations and compliance audits with detailed professional reports and recommendations.</p>
                <ul className={styles.cardFeatures}>
                  <li>EHS Compliance</li>
                  <li>Electrical Safety Audits</li>
                </ul>
                <span className={styles.trainingReadMore}>Explore <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
          <Link href="/services/safety-equipment" className={`${styles.trainingCard} ${styles.trainingCardWide}`} style={{ backgroundImage: `url("${ppeImg.src}")` }}>
            <div className={styles.trainingOverlay}>
              <span className={styles.trainingNum}>06</span>
              <div className={styles.trainingInfo}>
                <h3>Safety Equipment (PPE)</h3>
                <p>Professional guidance and supply of premium personal protective equipment tailored to specific industrial hazards.</p>
                <ul className={styles.cardFeatures}>
                  <li>Head & Eye Protection</li>
                  <li>Respiratory Gear</li>
                </ul>
                <span className={styles.trainingReadMore}>View Catalog <ArrowRight size={14} /></span>
              </div>
            </div>
          </Link>
        </div>
      </section>


      {/* Train the Trainer Section */}
      <section className={styles.trainTheTrainer}>
        <div className={styles.tttBg} style={{ backgroundImage: `url("/train-the-trainer-bg.png")` }} />
        <div className={styles.tttOverlay} />
        <div className={styles.tttInner}>
          <div className={styles.tttContent}>
            <span className={styles.tttSubLabel}>We Bring to You</span>
            <h2 className={styles.tttTitle}>&ldquo;TRAIN THE TRAINER&rdquo;</h2>
            <h3 className={styles.tttHeading}>Get Your Experts Future Ready</h3>
            <p className={styles.tttDesc}>Empower your safety leaders with advanced certification programs designed to multiply your organization&apos;s safety capabilities.</p>
          </div>

          <div className={styles.tttStats}>
            <div className={styles.tttStat}>
              <span className={styles.tttStatNum}>500+</span>
              <span className={styles.tttStatLabel}>Trainers Certified</span>
            </div>
            <div className={styles.tttStatDivider} />
            <div className={styles.tttStat}>
              <span className={styles.tttStatNum}>50+</span>
              <span className={styles.tttStatLabel}>Corporate Clients</span>
            </div>
            <div className={styles.tttStatDivider} />
            <div className={styles.tttStat}>
              <span className={styles.tttStatNum}>20+</span>
              <span className={styles.tttStatLabel}>Years Experience</span>
            </div>
          </div>

          <div className={styles.tttCards}>
            <div className={styles.tttCard}>
              <div className={styles.tttCardNum}>01</div>
              <div className={styles.tttCardIcon}><GraduationCap size={24} /></div>
              <h4>Professional Trainings</h4>
              <p>2-3 days of intensive classroom trainings and practical assessments by certified expert trainers.</p>
              <Link href="/contact" className={styles.tttCardLink}>Learn More <ArrowRight size={14} /></Link>
            </div>
            <div className={styles.tttCard}>
              <div className={styles.tttCardNum}>02</div>
              <div className={styles.tttCardIcon}><Users size={24} /></div>
              <h4>Who is it for</h4>
              <p>Managers, Trainers, and safety professionals looking to sharpen their expertise and lead the way.</p>
              <Link href="/contact" className={styles.tttCardLink}>Learn More <ArrowRight size={14} /></Link>
            </div>
            <div className={styles.tttCard}>
              <div className={styles.tttCardNum}>03</div>
              <div className={styles.tttCardIcon}><Award size={24} /></div>
              <h4>Personal Toolkit</h4>
              <p>Personal assessment sheets, comprehensive Trainers kit, certification, and much more included.</p>
              <Link href="/contact" className={styles.tttCardLink}>Learn More <ArrowRight size={14} /></Link>
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
          {[
            { name: 'Adani', logo: adaniLogo.src },
            { name: 'Aditya Birla', logo: adityaBirlaLogo.src },
            { name: 'Coca-Cola', logo: cocaColaLogo.src },
            { name: 'Larsen & Toubro', logo: ltLogo.src },
            { name: 'Adani', logo: adaniLogo.src },
            { name: 'Aditya Birla', logo: adityaBirlaLogo.src },
            { name: 'Coca-Cola', logo: cocaColaLogo.src },
            { name: 'Larsen & Toubro', logo: ltLogo.src },
            { name: 'Adani', logo: adaniLogo.src },
            { name: 'Aditya Birla', logo: adityaBirlaLogo.src },
            { name: 'Coca-Cola', logo: cocaColaLogo.src },
            { name: 'Larsen & Toubro', logo: ltLogo.src },
            { name: 'Adani', logo: adaniLogo.src },
            { name: 'Aditya Birla', logo: adityaBirlaLogo.src },
            { name: 'Coca-Cola', logo: cocaColaLogo.src },
            { name: 'Larsen & Toubro', logo: ltLogo.src },
          ].map((client, i) => (
            <div key={i} className={styles.logoItem}>
              <img
                src={client.logo}
                alt={client.name}
                style={{ maxWidth: '100px', maxHeight: '45px', objectFit: 'contain', transition: 'transform 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
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
