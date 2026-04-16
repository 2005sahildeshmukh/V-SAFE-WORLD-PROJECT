import HomeClient from './HomeClient';
import { getTestimonials } from '@/lib/data';

export default function HomePage() {
  const testimonials = getTestimonials();

  return <HomeClient testimonials={testimonials} />;
}
