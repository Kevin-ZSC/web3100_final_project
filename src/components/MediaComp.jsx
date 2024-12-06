import Event from "./Event";
import Facebook from "./Facebook";
import Ins from "./Ins";
export default function MediaComp() {
  return (
    <div className="mt-44 md:mt-72 px-5">
      <h1 className="font-joti text-center text-4xl font-extrabold mb-8">
        The Martock Media
      </h1>
      <div className="lg:flex gap-9 max-w-7xl mx-auto">
        
          <Ins />
          <Facebook />
          <Event />
      </div>
      
    </div>
  );
}
