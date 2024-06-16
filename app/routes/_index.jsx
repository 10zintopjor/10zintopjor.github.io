import { useEffect, useState, useRef } from 'react';
import LeftContainer from '../components/LeftContainer';
import RightContainer from '../components/RightContainer';


export default function Index() {
  const [activeSection, setActiveSection] = useState(null);
  const scrollableDivRef = useRef(null);
  const sectionsRef = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });



  const handleScroll = () => {
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      let currentSection = null;
      sectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < scrollableDiv.clientHeight && rect.bottom > 0;
        if (isVisible && (!currentSection || rect.top < currentSection.top)) {
          currentSection = { id: section.id, top: rect.top };
        }
      });
      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    }
  };

  useEffect(() => {
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener('scroll', handleScroll);

      // Initial check for the active section
      handleScroll();

      // Cleanup the event listener on component unmount
      return () => {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen w-full bg-customBlue flex items-center justify-center font-my-font"
      style={{
        background: `radial-gradient(circle farthest-side at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 48, 94, 0.8) 0%, rgba(13, 48, 94, 0) 20%), #0f172a`
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 flex-grow sm:gap-10">
        {/* Left Column */}
        <LeftContainer activeSection={activeSection} setActiveSection={setActiveSection}/>
        {/* Right Column */}
        <RightContainer  scrollableDivRef={scrollableDivRef} sectionsRef={sectionsRef}/>
      </div>
    </div>
  );
}