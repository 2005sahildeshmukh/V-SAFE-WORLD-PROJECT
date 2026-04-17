import { getService } from '@/lib/data';
import ServiceDetail from '../ServiceDetail';

export const metadata = {
  title: 'Health & Wellness | V-Safe World',
  description: 'Mount Safety\'s health and wellness services focus on enhancing overall physical, mental, and social well-being.'
};

export default function Page() {
  const service = getService('health-wellness');
  return <ServiceDetail service={service} />;
}
