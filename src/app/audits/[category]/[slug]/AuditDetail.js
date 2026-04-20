'use client';

import PageHero from '@/components/sections/PageHero';
import Link from 'next/link';
import { 
  CheckCircle, ArrowRight, ClipboardCheck, FileCheck, ShieldCheck, 
  School, Flame, Zap, Factory, Tent, Bell, Car, Map, Route, 
  Truck, DoorClosed, HardHat, Construction, Search 
} from 'lucide-react';
import styles from './auditDetail.module.css';
import { assetPath } from '@/lib/assetPath';

const iconMap = {
  'clipboard-check': <ClipboardCheck size={48} />,
  'file-check': <FileCheck size={48} />,
  'shield-check': <ShieldCheck size={48} />,
  'school': <School size={48} />,
  'flame': <Flame size={48} />,
  'zap': <Zap size={48} />,
  'factory': <Factory size={48} />,
  'tent': <Tent size={48} />,
  'bell': <Bell size={48} />,
  'car': <Car size={48} />,
  'map': <Map size={48} />,
  'route': <Route size={48} />,
  'truck': <Truck size={48} />,
  'door-closed': <DoorClosed size={48} />,
  'hard-hat': <HardHat size={48} />,
  'construction': <Construction size={48} />,
};

const categoryLabels = {
  'compliance-management': 'Compliance & Management',
  'specialized-safety': 'Specialized Safety',
  'transportation-logistics': 'Transportation & Logistics',
  'site-field-inspections': 'Site & Field Inspections',
};

export default function AuditDetail({ audit }) {
  const icon = iconMap[audit.icon] || <Search size={48} />;
  
  return (
    <div className={styles.auditDetailWrapper}>
      <PageHero
        title={audit.title}
        description={audit.shortDescription}
        breadcrumbs={[
          { label: 'Audits', href: '/audits' },
          { label: categoryLabels[audit.category] || audit.category, href: `/audits?category=${audit.category}` },
          { label: audit.title }
        ]}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            <div className={styles.mainContent}>
              <div className={styles.imageWrapper}>
                {audit.image ? (
                  <img src={assetPath(audit.image)} alt={audit.title} className={styles.mainImage} />
                ) : (
                  <div className={styles.placeholderImage}>No Image Available</div>
                )}
                <div className={styles.floatingIcon}>
                  {icon}
                </div>
              </div>
              
              <h2>Audit Scope & Objectives</h2>
              <p className={styles.fullDesc}>{audit.fullDescription}</p>
              
              <div className={styles.contentBlock}>
                <h3>The Importance of Professional Auditing</h3>
                <p>
                  A professional {audit.title.toLowerCase()} is more than just a checklist; it's a critical tool for risk management and operational excellence. At V-Safe World, our certified auditors bring deep industry expertise to identify underlying vulnerabilities that generic assessments often miss. By ensuring compliance and optimizing safety protocols, we help you protect your most valuable assets: your people and your reputation.
                </p>
                <div className={styles.standardsBox}>
                  <ShieldCheck size={20} />
                  <span>Conducted by certified safety professionals and lead auditors</span>
                </div>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.highlightCard}>
                <h4>Focus Areas</h4>
                <ul className={styles.featureList}>
                  <li><CheckCircle size={18}/> Regulatory Compliance Gap Analysis</li>
                  <li><CheckCircle size={18}/> Physical Hazard Identification</li>
                  <li><CheckCircle size={18}/> Documentation & Record Review</li>
                  <li><CheckCircle size={18}/> Safety Culture & Behavior Assessment</li>
                  <li><CheckCircle size={18}/> Priority Action Plan (CAPA)</li>
                </ul>
              </div>

              <div className={styles.ctaCard}>
                <h4>Need a {audit.title}?</h4>
                <p>Get a comprehensive assessment from our safety experts. We provide detailed reports and actionable insights.</p>
                <Link href="/contact" className="btn btn-accent" style={{width: '100%', justifyContent: 'center', marginTop: '1rem'}}>
                  Book an Audit <ArrowRight size={16} style={{marginLeft: '8px'}} />
                </Link>
              </div>
            </aside>
            
          </div>
        </div>
      </section>
    </div>
  );
}
