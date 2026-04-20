import { getAudits } from '@/lib/data';
import AuditDetail from './AuditDetail';

export function generateStaticParams() {
  const audits = getAudits();
  return audits.map((a) => ({
    category: a.category,
    slug: a.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const audits = getAudits();
  const audit = audits.find(a => a.id === resolvedParams.slug);
  
  if (!audit) return { title: 'Audit Not Found' };
  
  return {
    title: `${audit.title} | Audits & Inspections | V-Safe World`,
    description: audit.shortDescription
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const audits = getAudits();
  const audit = audits.find(a => a.id === resolvedParams.slug);
  
  if (!audit) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Audit service not found.</div>;
  }
  
  return <AuditDetail audit={audit} />;
}
