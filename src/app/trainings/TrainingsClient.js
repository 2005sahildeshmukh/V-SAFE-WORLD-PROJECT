'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { HeartPulse, Flame, HardHat, AlertTriangle, BookOpen, ChevronRight, ArrowRight, Apple, Heart, Monitor, LogOut, ShieldAlert, Car, ShieldCheck, Siren, GraduationCap, ArrowUp, Lock, Box, Brain } from 'lucide-react';
import styles from '@/styles/inner-pages.module.css';

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'health-wellness', label: 'Health & Wellness' },
  { id: 'fire-safety', label: 'Fire Safety' },
  { id: 'road-safety', label: 'Road Safety' },
  { id: 'industrial-safety', label: 'Industrial Safety' },
  { id: 'disaster-management', label: 'Disaster Management' },
];

const iconMap = {
  'heart-pulse': <HeartPulse size={26} />, 'apple': <Apple size={26} />, 'heart': <Heart size={26} />,
  'monitor': <Monitor size={26} />, 'flame': <Flame size={26} />, 'log-out': <LogOut size={26} />,
  'shield-alert': <ShieldAlert size={26} />, 'car': <Car size={26} />, 'hard-hat': <HardHat size={26} />,
  'shield-check': <ShieldCheck size={26} />, 'siren': <Siren size={26} />, 'graduation-cap': <GraduationCap size={26} />,
  'arrow-up': <ArrowUp size={26} />, 'lock': <Lock size={26} />, 'box': <Box size={26} />, 'brain': <Brain size={26} />,
};

const categoryLabels = {
  'health-wellness': 'Health & Wellness',
  'fire-safety': 'Fire Safety',
  'road-safety': 'Road Safety',
  'industrial-safety': 'Industrial Safety',
  'disaster-management': 'Disaster Management',
};

function TrainingsContent({ trainings }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  // Initialize state based on URL if present
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

  const filtered = activeTab === 'all' ? trainings : trainings.filter((t) => t.category === activeTab);

  return (
    <>
      <PageHero
        title="Our Training Programs"
        description="Categorised listing of all safety courses offered"
        breadcrumbs={[{ label: 'Trainings' }]}
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
            {filtered.map((training) => (
              <Link href={`/trainings/${training.category}/${training.id}`} key={training.id} className={styles.card}>
                <div className={styles.cardIcon}>{iconMap[training.icon] || <BookOpen size={26} />}</div>
                <span className={styles.cardCategory}>{categoryLabels[training.category]}</span>
                <h3>{training.title}</h3>
                <p>{training.shortDescription}</p>
              </Link>
            ))}
          </div>

          <div className={styles.greenCta}>
            <h3>Interested in a Training Program?</h3>
            <p>Contact us for customized training solutions tailored to your organization&apos;s needs.</p>
            <Link href="/contact" className="btn btn-accent btn-lg">Enquire Now <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function TrainingsClient({ trainings }) {
  return (
    <Suspense fallback={<div>Loading trainings...</div>}>
      <TrainingsContent trainings={trainings} />
    </Suspense>
  );
}
