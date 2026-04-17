import { getService } from '@/lib/data';
import ServiceDetail from '../ServiceDetail';

export const metadata = {
  title: 'Road Safety & Defensive Driving | V-Safe World',
  description: 'Comprehensive training designed to reduce road accidents through prevention and hazard perception.'
};

export default function Page() {
  const service = getService('road-safety');
  return <ServiceDetail service={service} />;
}
