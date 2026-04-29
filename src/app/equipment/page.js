import EquipmentClient from './EquipmentClient';
import { getEquipment } from '@/lib/data';

export const metadata = {
  title: 'Safety Equipment (PPE)',
  description: 'Premium safety equipment visual catalog including head protection, gloves, safety shoes, and more.',
};

export default function EquipmentPage() {
  const equipment = getEquipment();
  return <EquipmentClient equipment={equipment} />;
}
