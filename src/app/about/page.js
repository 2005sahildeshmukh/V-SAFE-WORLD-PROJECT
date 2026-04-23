import PageHero from '@/components/sections/PageHero';
import { getAboutData } from '@/lib/data';
import { Eye, Target, Users, Award, Shield, Building, Image as ImageIcon } from 'lucide-react';
import styles from '@/styles/inner-pages.module.css';
import { assetPath } from '@/lib/assetPath';

export const metadata = {
  title: 'About Us',
  description: 'Learn about V-Safe World Pvt Ltd — our vision, mission, leadership, and commitment to workplace safety excellence.',
};

export default function AboutPage() {
  const about = getAboutData();

  return (
    <>
      <PageHero
        title="About V-Safe World"
        description="Company Mission, Vision, and a leadership profile featuring a director's quote"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Introduction */}
      <section className={styles.pageContent}>
        <div className={styles.pageInner}>
          <div className={`${styles.splitGrid} reveal`}>
            <div className={styles.introImageWrapper}>
              <img 
                src={assetPath('/images/about/intro.webp')} 
                alt="Who We Are - V-Safe World Team" 
                className={styles.introImage}
              />
            </div>
            <div>
              <h2>Who We Are</h2>
              <p style={{ lineHeight: 1.8, color: 'var(--color-gray-700)' }}>{about?.introduction}</p>
              <p style={{ lineHeight: 1.8, color: 'var(--color-gray-700)' }}>{about?.businessOverview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-alt">
        <div className={styles.pageInner}>
          <div className="section-title">
            <h2>Our Vision & Mission</h2>
          </div>
          <div className={`${styles.cardGrid} reveal`}>
            <div className={styles.vmCard}>
              <div className={styles.vmCardIcon}><Eye size={24} /></div>
              <h3>Our Vision</h3>
              <p>{about?.vision}</p>
            </div>
            <div className={styles.vmCard}>
              <div className={styles.vmCardIcon}><Target size={24} /></div>
              <h3>Our Mission</h3>
              <p>{about?.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className={styles.statsBar}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>{about?.stats?.clients}+</div>
            <div className={styles.statDesc}>Trusted Clients</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>{about?.stats?.trainings}+</div>
            <div className={styles.statDesc}>Training Sessions</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>{about?.stats?.yearsExperience}+</div>
            <div className={styles.statDesc}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>{about?.stats?.industries}+</div>
            <div className={styles.statDesc}>Industries Served</div>
          </div>
        </div>
      </div>

      {/* Director */}
      <section className={styles.pageContent}>
        <div className={styles.pageInner}>
          <div className="section-title">
            <h2>Leadership</h2>
          </div>
          <div className={`${styles.directorSection} reveal`}>
            <div className={styles.directorPhoto}>
              <img 
                src={assetPath('/images/about/director.webp')} 
                alt={about?.director?.name} 
                className={styles.directorImg}
              />
            </div>
            <div>
              <p className={styles.directorQuote}>&ldquo;{about?.director?.quote}&rdquo;</p>
              <p className={styles.directorName}>{about?.director?.name}</p>
              <p className={styles.directorTitle}>{about?.director?.title}</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className={`${styles.badgeRow} reveal`}>
            {about?.trustBadges?.map((badge, i) => (
              <div key={i} className={styles.trustBadge}>
                {i === 0 ? <Award size={24} color="var(--color-primary)" /> : <Shield size={24} color="var(--color-primary)" />}
                <span>{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
