import Link from 'next/link';
import { CERTIFICATIONS_DATA } from './certificationsData';

export default function Certifications() {
  return (
    <ul className="ml-6 space-y-2">
      {CERTIFICATIONS_DATA.map((c) => (
        <li key={c.link} className="list-disc">
          <Link
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-900 hover:bg-gray-100"
          >
            {c.name}
          </Link>
          <span className="ml-2 text-gray-600">({c.date})</span>
        </li>
      ))}
    </ul>
  );
}
