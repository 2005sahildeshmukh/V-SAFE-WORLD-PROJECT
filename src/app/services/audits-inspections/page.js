import { getService } from '@/lib/data';
import ServiceDetail from '../ServiceDetail';

export const metadata = {
  title: 'Safety Audits & Inspections | V-Safe World',
  description: 'Systematic procedures for gathering independent information to ensure a zero-harm working environment.'
};

export default function Page() {
  const service = getService('audits-inspections');
  return <ServiceDetail service={service} />;
}
