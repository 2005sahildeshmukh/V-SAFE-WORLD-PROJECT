import PageHero from '@/components/sections/PageHero';
import Link from 'next/link';
import { Briefcase, Users, CheckCircle, ArrowRight, Shield, Building } from 'lucide-react';
import styles from '@/styles/inner-pages.module.css';

export const metadata = {
  title: 'Consultancy Services',
  description: 'Expert safety consultancy services and DMC/CMC manpower solutions for organizations across industries.',
};

export default function ConsultancyPage() {
  return (
    <>
      <PageHero
        title="Consultancy Services"
        description="Specialised safety consultancy and manpower services (DMC/CMC)"
        breadcrumbs={[{ label: 'Consultancy' }]}
      />

      <section className={styles.pageContent}>
        <div className={styles.pageInner}>
          <div className={`${styles.consultGrid} reveal`}>
            <div className={styles.consultCard}>
              <h3><Shield size={22} color="var(--color-primary)" /> Safety Consultancy</h3>
              <p>Our specialized safety consultancy services help organizations build robust safety management systems, achieve compliance, and create a culture of safety excellence.</p>
              <ul>
                <li><CheckCircle size={16} color="var(--color-primary)" /> EHS Management System Development</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Safety Policy & Procedure Design</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Risk Assessment & Mitigation</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Regulatory Compliance Support</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Safety culture transformation</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Incident Investigation & Root Cause Analysis</li>
              </ul>
            </div>

            <div className={styles.consultCard}>
              <h3><Users size={22} color="var(--color-primary)" /> DMC / CMC Manpower Services</h3>
              <p>We provide qualified safety professionals and manpower solutions to support your operations with trained DMC and CMC personnel.</p>
              <ul>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Qualified Safety Officers & Engineers</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Fire Safety Professionals</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> First Aid & Emergency Responders</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Health & Safety Supervisors</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Contract-based Safety Staff</li>
                <li><CheckCircle size={16} color="var(--color-primary)" /> Flexible Deployment Models</li>
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="section-title">
            <h2>How We Work</h2>
          </div>
          <div className={`${styles.timeline} reveal`} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>1</div>
              <h4>Consultation</h4>
              <p>Understanding your needs, industry, and specific safety challenges</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>2</div>
              <h4>Solution Design</h4>
              <p>Creating a tailored consultancy plan with clear deliverables and timeline</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>3</div>
              <h4>Implementation</h4>
              <p>Deploying our experts and delivering measurable safety improvements</p>
            </div>
          </div>

          <div className={styles.greenCta}>
            <h3>Need Expert Safety Consultancy?</h3>
            <p>Let our experienced team help you build a safer workplace.</p>
            <Link href="/contact" className="btn btn-accent btn-lg">Schedule a Consultation <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
