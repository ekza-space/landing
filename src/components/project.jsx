function ProjectContent({ projectName, text, link }) {
  return (
    <div className="p-4">
      <p className="pt-8 w-auto py-2 text-2xl lg:text-5xl font-audiowide">
        <a href={link} target="_blank" className="link">
          {projectName}
        </a>
      </p>
      <p className="lg:text-base text-justify">{text}</p>
    </div>
  );
}

export function Project({
  projectName,
  imgPath,
  imgPath2 = null,
  text,
  link,
  isFlip = false,
}) {
  return (
    <div className="bg-gray-100 lg:mx-8 sm:m-4 m-4 rounded-lg md:p-0">
      {isFlip ? (
        <>
          <div className="relative">
            <img src={imgPath} className="w-full rounded-lg" />
            {imgPath2 && (
              <img
                src={imgPath2}
                className="absolute inset-0 w-full h-auto opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            )}
          </div>

          <ProjectContent projectName={projectName} text={text} link={link} />
        </>
      ) : (
        <>
          <ProjectContent projectName={projectName} text={text} link={link} />
          <div className="relative">
            <img src={imgPath} className="w-full" />
            {imgPath2 && (
              <img
                src={imgPath2}
                className="absolute inset-0 w-full h-auto opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
