import AuditsClient from './AuditsClient';
import { getAudits } from '@/lib/data';

export const metadata = {
  title: 'Audits & Inspections',
  description: 'Professional EHS audits, fire safety audits, industrial audits, transport inspections, and site safety services.',
};

export default function AuditsPage() {
  const audits = getAudits();
  return <AuditsClient audits={audits} />;
}
