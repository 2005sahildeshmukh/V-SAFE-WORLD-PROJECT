import PageHero from '@/components/sections/PageHero';
import Link from 'next/link';
import { getAudits } from '@/lib/data';
import { ClipboardCheck, Flame, Factory, Utensils, Leaf, ArrowRight, Search, FileCheck, FileText, CheckCircle } from 'lucide-react';
import styles from '@/styles/inner-pages.module.css';

export const metadata = {
  title: 'Audits & Inspections',
  description: 'Professional EHS audits, fire safety audits, industrial audits, food inspection, and quality/environment audit services.',
};

const iconMap = {
  'clipboard-check': <ClipboardCheck size={26} />, 'flame': <Flame size={26} />,
  'factory': <Factory size={26} />, 'utensils': <Utensils size={26} />, 'leaf': <Leaf size={26} />,
};

export default function AuditsPage() {
  const audits = getAudits();

  return (
    <>
      <PageHero
        title="Audits & Inspections"
        description="Revised section (formerly 'Audits') — EHS, Fire Safety, and Industrial audits"
        breadcrumbs={[{ label: 'Audits & Inspections' }]}
      />

      <section className={styles.pageContent}>
        <div className={styles.pageInner}>
          <div className="section-title">
            <h2>Our Audit Services</h2>
            <p>Comprehensive audit solutions for every industry</p>
          </div>

          <div className={styles.cardsGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {audits.map((audit) => (
              <div key={audit.id} className={`${styles.card} reveal`}>
                <div className={styles.cardIcon}>{iconMap[audit.icon] || <ClipboardCheck size={26} />}</div>
                <h3>{audit.title}</h3>
                <p>{audit.shortDescription}</p>
              </div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="section-title" style={{ marginTop: 'var(--space-4xl)' }}>
            <h2>Our Audit Process</h2>
          </div>
          <div className={`${styles.timeline} reveal`}>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>1</div>
              <h4>Initial Assessment</h4>
              <p>Understanding your industry, operations, and compliance requirements</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>2</div>
              <h4>On-Site Audit</h4>
              <p>Comprehensive on-site inspection by our certified auditors</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>3</div>
              <h4>Detailed Report</h4>
              <p>Thorough audit report with findings, risk ratings, and recommendations</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>4</div>
              <h4>Action Plan</h4>
              <p>Customized corrective action plan with implementation support</p>
            </div>
          </div>

          <div className={styles.greenCta}>
            <h3>Schedule a Safety Audit</h3>
            <p>Get a comprehensive assessment of your workplace safety compliance.</p>
            <Link href="/contact" className="btn btn-accent btn-lg">Request an Audit <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
