'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { Package, ArrowRight } from 'lucide-react';
import styles from '@/styles/inner-pages.module.css';

const categories = [
  { id: 'all', label: 'All Equipment' },
  { id: 'ppe', label: 'PPEs' },
  { id: 'gloves', label: 'Gloves' },
  { id: 'safety-shoes', label: 'Safety Shoes' },
  { id: 'other', label: 'Other Equipment' },
];

export default function EquipmentClient({ equipment }) {
  const [activeTab, setActiveTab] = useState('all');
  const filtered = activeTab === 'all' ? equipment : equipment.filter((e) => e.category === activeTab);

  return (
    <>
      <PageHero
        title="Safety Equipment & PPE"
        description="Dedicated gallery / catalog for safety gear and equipment"
        breadcrumbs={[{ label: 'Safety Equipment' }]}
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
            {filtered.map((item) => (
              <div key={item.id} className={styles.productCard}>
                <div className={styles.productImage}><Package size={32} /></div>
                <div className={styles.productBody}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.greenCta}>
            <h3>Need Bulk Orders?</h3>
            <p>Contact us for competitive pricing on bulk safety equipment orders.</p>
            <Link href="/contact" className="btn btn-accent btn-lg">Get a Quote <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
