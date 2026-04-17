import PageHero from '@/components/sections/PageHero';
import Link from 'next/link';
import { 
  HeartPulse, Flame, Car, HardHat, ClipboardCheck, Package, 
  CheckCircle, ArrowRight, ShieldCheck, Award
} from 'lucide-react';
import styles from './services.module.css';

const iconMap = {
  'heart-pulse': <HeartPulse size={48} />,
  'flame': <Flame size={48} />,
  'car': <Car size={48} />,
  'hard-hat': <HardHat size={48} />,
  'clipboard-check': <ClipboardCheck size={48} />,
  'package': <Package size={48} />
};

export default function ServiceDetail({ service }) {
  if (!service) return null;

  return (
    <div className={styles.serviceDetail}>
      <PageHero
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: 'Services', href: '/#what-we-offer' },
          { label: service.title }
        ]}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.mainText}>
              <div className={styles.featuredImageWrapper}>
                <img src={service.image} alt={service.title} className={styles.featuredImage} />
                <div className={styles.imageOverlay}></div>
                <div className={styles.iconBoxFloating}>
                  {iconMap[service.icon]}
                </div>
              </div>
              
              <h2>Overview</h2>
              <p>{service.fullContent}</p>
              
              <div className={styles.standardsTag}>
                <ShieldCheck size={18} />
                Certified Standards: {service.standards}
              </div>
            </div>

            <aside className={styles.infoCard}>
              <h4>Key Benefits</h4>
              <ul className={styles.benefitsList}>
                {service.benefits.map((benefit, i) => (
                  <li key={i}>
                    <CheckCircle size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.programsSection}`}>
        <div className={styles.container}>
          <div className="section-title">
            <h2>Detailed Programs &amp; Modules</h2>
            <p>Our specialized solutions within {service.title}</p>
          </div>

          <div className={styles.programsGrid}>
            {service.programs.map((prog, i) => (
              <div key={i} className={styles.programCard}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Award size={24} /></div>
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.contactCta} style={{ marginTop: '5rem', textAlign: 'center' }}>
            <div className={styles.infoCard} style={{ display: 'inline-block', maxWidth: '800px' }}>
              <h3>Ready to secure your workspace?</h3>
              <p style={{ margin: '1rem 0 2rem' }}>Get professional guidance on {service.title} specialized for your industry requirements.</p>
              <Link href="/contact" className="btn btn-accent btn-lg">
                Book a Consultation <ArrowRight size={18} style={{ marginLeft: '10px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
