import introData from '../data/intro';

function Intro() {
  const [intro] = introData;

  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-2 mb:mb-3 font-semibold">
        {/* Mateusz Korytkowski */}
        {intro.name}
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        {intro.university}
      </p>
      <p className="mb-3">{intro.degree}</p>
      <p className="text-sm max-w-xl mb-6">{intro.interests}</p>
      <p>{intro.text}</p>
    </div>
  );
}

export default Intro;
