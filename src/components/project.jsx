export function Project({ projectName, imgPath, text, link }) {
  return (
    <a href={link} target="_blank">
      <div
        className="max-w-fit bg-gray-100 m-4 p-10 rounded-lg 
                    lg:p0 max-w-40 lg:mx-20
                    cursor-pointer hover:drop-shadow-xl"
      >
        <div>
          <img src={imgPath} className="w-full" />
        </div>
        <p className="pt-8 py-2 text-2xl lg:text-5xl font-audiowide">
          {projectName}
        </p>
        <p className="lg:text-base text-justify">{text}</p>
      </div>
    </a>
  );
}
