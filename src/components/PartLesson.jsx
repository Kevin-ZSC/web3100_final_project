export default function PartLesson({ imageUrl, textContent, title, reverse }) {
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row p-4  ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-shrink-0 w-full lg:w-1/2 px-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg xl:h-4/5"
          />
        </div>

        <div className="w-full  px-4 mt-3">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">{title}</h2>
          <p className="text-black font-semibold leading-relaxed">{textContent}</p>
          <div className="flex gap-4 mt-5">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full xl:w-48">
              SnowBoard
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full xl:w-48">
              Ski
            </button>
          </div>
        </div>
      </div>
      <hr className="mx-auto w-11/12" />
    </>
  );
}
