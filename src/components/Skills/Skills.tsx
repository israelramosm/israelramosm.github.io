import { SKILS_DATA } from './skillsData';

export default function Skills() {
  return (
    <div className="space-y-3">
      {SKILS_DATA.map((d) => (
        <div key={d.name}>
          <h3 className="mb-1 font-semibold">{d.name}</h3>
          <p className="ml-2 text-gray-700">{d.skills}</p>
        </div>
      ))}
    </div>
  );
}
