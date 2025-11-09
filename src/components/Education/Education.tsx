import Certifications from '../Certifications/Certifications';

export default function Education() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold inline">Telematics Engineer</h3>,
        <span> Guadalajara University (2013–2016)</span>
      </div>
      
      <div>
        <h3 className="mb-3 text-lg font-semibold">Certifications</h3>
        <ul className="ml-6 space-y-2">
          <Certifications />
        </ul>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold inline">Languages: </h3>
        <span>English (C1)</span>
      </div>
    </div>
  );
}
