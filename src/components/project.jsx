function ProjectContent({ projectName, text }) {
  return (
    <div className="p-4">
      <p className="pt-8 w-auto py-2 text-2xl lg:text-5xl font-audiowide">
        {projectName}
      </p>
      <p className="lg:text-base text-justify">{text}</p>
    </div>
  );
}

export function Project({ projectName, imgPath, text, link, isFlip = false }) {
  return (
    <div className="bg-gray-100 lg:mx-8 sm:m-4 m-4 rounded-lg md:p-0 hover:shadow-lg">
      <a href={link} target="_blank" className="cursor-pointer">
        {isFlip ? (
          <>
            <img src={imgPath} className="w-full rounded-lg" />
            <ProjectContent projectName={projectName} text={text} />
          </>
        ) : (
          <>
            <ProjectContent projectName={projectName} text={text} />
            <img src={imgPath} className="w-full" />
          </>
        )}
      </a>
    </div>
  );
}
