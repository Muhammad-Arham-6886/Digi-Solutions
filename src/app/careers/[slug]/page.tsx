import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  return [];
}

export default function CareerDetailPage() {
  redirect('/');
}
