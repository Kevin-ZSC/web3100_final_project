export default function LiveCam() {
  return (
    <div
      className="relative h-80 bg-cover bg-center bg-no-repeat mt-5 w-11/12 mx-auto rounded-lg shadow-lg overflow-hidden"
      style={{
        backgroundImage:
          "url('../src/assets/img/quenten-janssen-W_z4awYQgO4-unsplash.jpg')",
      }}
    >
      <p className="absolute top-2 right-3 text-black text-xl font-semibold px-3 py-1 rounded-md shadow-md">
        Live Webcam
      </p>
    </div>
  );
}