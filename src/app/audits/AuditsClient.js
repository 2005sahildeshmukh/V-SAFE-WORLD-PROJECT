'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { 
  ClipboardCheck, Flame, Factory, ArrowRight, Search, 
  FileCheck, ShieldCheck, School, Zap, Tent, 
  Bell, Car, Map, Route, Truck, DoorClosed, HardHat, Construction 
} from 'lucide-react';
import styles from '@/styles/inner-pages.module.css';

const categories = [
  { id: 'all', label: 'All Audits' },
  { id: 'compliance-management', label: 'Compliance & Management' },
  { id: 'specialized-safety', label: 'Specialized Safety' },
  { id: 'transportation-logistics', label: 'Transportation & Logistics' },
  { id: 'site-field-inspections', label: 'Site & Field Inspections' },
];

const iconMap = {
  'clipboard-check': <ClipboardCheck size={26} />,
  'file-check': <FileCheck size={26} />,
  'shield-check': <ShieldCheck size={26} />,
  'school': <School size={26} />,
  'flame': <Flame size={26} />,
  'zap': <Zap size={26} />,
  'factory': <Factory size={26} />,
  'tent': <Tent size={26} />,
  'bell': <Bell size={26} />,
  'car': <Car size={26} />,
  'map': <Map size={26} />,
  'route': <Route size={26} />,
  'truck': <Truck size={26} />,
  'door-closed': <DoorClosed size={26} />,
  'hard-hat': <HardHat size={26} />,
  'construction': <Construction size={26} />,
};

const categoryLabels = {
  'compliance-management': 'Compliance & Management',
  'specialized-safety': 'Specialized Safety',
  'transportation-logistics': 'Transportation & Logistics',
  'site-field-inspections': 'Site & Field Inspections',
};

function AuditsContent({ audits }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeTab, setActiveTab] = useState(() => {
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      return categoryParam;
    }
    return 'all';
  });

  useEffect(() => {
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      setActiveTab(categoryParam);
    }
  }, [categoryParam]);

  const filtered = activeTab === 'all' ? audits : audits.filter((a) => a.category === activeTab);

  return (
    <>
      <PageHero
        title="Audits & Inspections"
        description="Comprehensive safety assessments, compliance auditing, and technical inspections for all industries."
        breadcrumbs={[{ label: 'Audits & Inspections' }]}
      />

      <section className={styles.pageContent}>
        <div className={styles.pageInner}>
          <div className={styles.tabBar}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.tabBtn} ${activeTab === cat.id ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className={styles.cardsGrid}>
            {filtered.map((audit) => {
              const catSlug = audit.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              return (
                <Link 
                  href={`/audits/${catSlug}/${audit.id}`} 
                  key={audit.id} 
                  className={styles.card}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={styles.cardIcon}>{iconMap[audit.icon] || <Search size={26} />}</div>
                  <span className={styles.cardCategory}>{categoryLabels[audit.category]}</span>
                  <h3>{audit.title}</h3>
                  <p>{audit.shortDescription}</p>
                </Link>
              );
            })}
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
            <p>Get a comprehensive assessment of your workplace safety compliance from our certified experts.</p>
            <Link href="/contact" className="btn btn-accent btn-lg">Request an Audit <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function AuditsClient({ audits }) {
  return (
    <Suspense fallback={<div>Loading audits...</div>}>
      <AuditsContent audits={audits} />
    </Suspense>
  );
}
