import { getService } from '@/lib/data';
import ServiceDetail from '../ServiceDetail';

export const metadata = {
  title: 'Industrial Safety | V-Safe World',
  description: 'Preventing workplace illnesses and injuries through rigorous strategies and high-risk task mastery.'
};

export default function Page() {
  const service = getService('industrial-safety');
  return <ServiceDetail service={service} />;
}
