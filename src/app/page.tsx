import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import HomeSection from '../components/HomeSection/HomeSection';
import Presentation from '../components/Presentation/Presentation';
import Skills from '../components/Skills/Skills';
import Summary from '../components/Summary/Summary';

export default function Home() {
  const Header = ({
    className,
    title,
  }: {
    className?: string;
    title: string;
  }) => (
    <header>
      <h2 className={`py-8 text-xl font-bold ${className}`}>{title}</h2>
    </header>
  );
  return (
    <section className="flex h-full flex-col justify-evenly">
      {/* In this case have to hardcode the path for sub repositories/projects */}
      {/* Photo by Lukas: https://www.pexels.com/photo/white-apple-keyboard-near-white-cup-917463/ */}
      <HomeSection
        id="presentation"
        className="bg-[url('/images/profile-bg-2-inverted.png')] bg-cover bg-top lg:bg-center"
      >
        <Presentation />
      </HomeSection>
      <HomeSection id="summary">
        <Header title="Summary" />
        <Summary />
      </HomeSection>
      <HomeSection id="experience">
        <Header title="Experience" />
        <Experience />
      </HomeSection>
      <HomeSection id="education-certifications">
        <Header title="Education & Certifications" />
        <Education />
      </HomeSection>
      <HomeSection id="skills">
        <Header title="Skills" />
        <Skills />
      </HomeSection>
    </section>
  );
}
