import { getService } from '@/lib/data';
import ServiceDetail from '../ServiceDetail';

export const metadata = {
  title: 'Fire Safety | V-Safe World',
  description: 'Empowering individuals with the knowledge to prevent and respond to fire emergencies.'
};

export default function Page() {
  const service = getService('fire-safety');
  return <ServiceDetail service={service} />;
}
