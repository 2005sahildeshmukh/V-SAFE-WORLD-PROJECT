import { getTrainings } from '@/lib/data';
import TrainingDetail from './TrainingDetail';

export function generateStaticParams() {
  const trainings = getTrainings();
  return trainings.map((t) => ({
    category: t.category,
    slug: t.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const trainings = getTrainings();
  const training = trainings.find(t => t.id === resolvedParams.slug);
  
  if (!training) return { title: 'Training Not Found' };
  
  return {
    title: `${training.title} | EHS Training | V-Safe World`,
    description: training.shortDescription
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const trainings = getTrainings();
  const training = trainings.find(t => t.id === resolvedParams.slug);
  
  if (!training) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Training program not found.</div>;
  }
  
  return <TrainingDetail training={training} />;
}
