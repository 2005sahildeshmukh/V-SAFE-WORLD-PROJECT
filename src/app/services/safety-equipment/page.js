import { getService } from '@/lib/data';
import ServiceDetail from '../ServiceDetail';

export const metadata = {
  title: 'Safety Equipment (PPE) | V-Safe World',
  description: 'Specialized training and guidance on the selection, usage, and maintenance of Personal Protective Equipment.'
};

export default function Page() {
  const service = getService('safety-equipment');
  return <ServiceDetail service={service} />;
}
