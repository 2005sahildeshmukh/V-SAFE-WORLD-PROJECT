'use client';

import PageHero from '@/components/sections/PageHero';
import Link from 'next/link';
import { CheckCircle, ArrowRight, BookOpen, ShieldCheck, HeartPulse, Flame, Car, HardHat, Siren, Image as ImageIcon, Clock, Users, Award, Target, Lightbulb } from 'lucide-react';
import styles from './trainingDetail.module.css';
import { assetPath } from '@/lib/assetPath';

const iconMap = {
  'heart-pulse': <HeartPulse size={48} />,
  'flame': <Flame size={48} />,
  'car': <Car size={48} />,
  'hard-hat': <HardHat size={48} />,
  'siren': <Siren size={48} />,
};

const categoryLabels = {
  'health-wellness': 'Health & Wellness',
  'fire-safety': 'Fire Safety',
  'road-safety': 'Road Safety',
  'industrial-safety': 'Industrial Safety',
  'disaster-management': 'Disaster Management',
  'accident-investigation': 'Accident Investigation',
};

export default function TrainingDetail({ training }) {
  const icon = iconMap[training.icon] || <BookOpen size={48} />;
  const modules = training.modules || ['Theoretical Foundations','Practical Exercises','Hazard Anticipation & Response','Post-Incident Reporting','Regulatory Compliance Basics'];
  const learningOutcomes = training.learningOutcomes || [];
  const targetAudience = training.targetAudience || [];
  const duration = training.duration || null;
  const certification = training.certification || null;
  const methodology = training.methodology || [];
  const whyImportant = training.whyImportant || `Industrial benchmarks underscore the vital importance of ${training.title.toLowerCase()}. Equipping your workforce with precise knowledge not only complies with national and international health and safety legislation but inherently cultivates a proactive safety culture. By neutralizing risks before they materialize, companies drastically reduce downtime, compensation claims, and reputational damage.`;

  return (
    <div className={styles.trainingDetailWrapper}>
      <PageHero
        title={training.title}
        description={training.shortDescription}
        breadcrumbs={[
          { label: 'Trainings', href: '/trainings' },
          { label: categoryLabels[training.category] || training.category, href: `/trainings?category=${training.category}` },
          { label: training.title }
        ]}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            <div className={styles.mainContent}>
              <div className={styles.imageWrapper}>
                {training.image ? (
                  <img src={assetPath(training.image)} alt={training.title} className={styles.mainImage} />
                ) : (
                  <div className={styles.placeholderImage}>No Image Available</div>
                )}
                <div className={styles.floatingIcon}>
                  {icon}
                </div>
              </div>

              {/* Quick Info Bar */}
              {(duration || certification) && (
                <div className={styles.quickInfoBar}>
                  {duration && (
                    <div className={styles.quickInfoItem}>
                      <Clock size={20} />
                      <div>
                        <span className={styles.quickInfoLabel}>Duration</span>
                        <span className={styles.quickInfoValue}>{duration}</span>
                      </div>
                    </div>
                  )}
                  {certification && (
                    <div className={styles.quickInfoItem}>
                      <Award size={20} />
                      <div>
                        <span className={styles.quickInfoLabel}>Certification</span>
                        <span className={styles.quickInfoValue}>{certification}</span>
                      </div>
                    </div>
                  )}
                  {targetAudience.length > 0 && (
                    <div className={styles.quickInfoItem}>
                      <Users size={20} />
                      <div>
                        <span className={styles.quickInfoLabel}>For</span>
                        <span className={styles.quickInfoValue}>{targetAudience.slice(0,2).join(', ')}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <h2>Course Overview</h2>
              <p className={styles.fullDesc}>{training.fullDescription}</p>

              {/* Learning Outcomes */}
              {learningOutcomes.length > 0 && (
                <div className={styles.contentBlock}>
                  <h3><Target size={22} style={{marginRight:'8px',verticalAlign:'middle'}} />Learning Outcomes</h3>
                  <ul className={styles.outcomeList}>
                    {learningOutcomes.map((item, i) => (
                      <li key={i}><CheckCircle size={16} /> {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Target Audience */}
              {targetAudience.length > 0 && (
                <div className={styles.contentBlock} style={{marginTop:'1.5rem'}}>
                  <h3><Users size={22} style={{marginRight:'8px',verticalAlign:'middle'}} />Who Should Attend</h3>
                  <div className={styles.audienceTags}>
                    {targetAudience.map((item, i) => (
                      <span key={i} className={styles.audienceTag}>{item}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Training Methodology */}
              {methodology.length > 0 && (
                <div className={styles.contentBlock} style={{marginTop:'1.5rem'}}>
                  <h3><Lightbulb size={22} style={{marginRight:'8px',verticalAlign:'middle'}} />Training Methodology</h3>
                  <div className={styles.methodGrid}>
                    {methodology.map((item, i) => (
                      <div key={i} className={styles.methodItem}>
                        <CheckCircle size={16} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className={styles.contentBlock} style={{marginTop:'1.5rem'}}>
                <h3>Why this Training is Critical</h3>
                <p>{whyImportant}</p>
                <div className={styles.standardsBox}>
                  <ShieldCheck size={20} />
                  <span>Aligned with global safety and compliance training standards</span>
                </div>
                <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: 'var(--color-primary-dark)' }}>Real-World Training in Action</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-primary)' }}>See high-quality photos from our actual training sessions.</p>
                  </div>
                  <Link href="/gallery" className="btn btn-primary">
                    <ImageIcon size={18} style={{ marginRight: '8px' }} /> View Image Gallery
                  </Link>
                </div>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.highlightCard}>
                <h4>Key Modules Covered</h4>
                <ul className={styles.featureList}>
                  {modules.map((mod, i) => (
                    <li key={i}><CheckCircle size={18}/> {mod}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.ctaCard}>
                <h4>Interested in {training.title}?</h4>
                <p>Get in touch with our experts to schedule this program for your workforce.</p>
                <Link href="/contact" className="btn btn-accent" style={{width: '100%', justifyContent: 'center', marginTop: '1rem'}}>
                  Request a Proposal <ArrowRight size={16} style={{marginLeft: '8px'}} />
                </Link>
              </div>
            </aside>
            
          </div>
        </div>
      </section>
    </div>
  );
}
