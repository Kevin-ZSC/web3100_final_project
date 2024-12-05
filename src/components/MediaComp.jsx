import Event from "./Event";
import Facebook from "./Facebook";
import Ins from "./Ins";
export default function MediaComp() {
  return (
    <div className="mt-36">
      <h1 className="font-joti text-center text-4xl font-extrabold mb-8">
        The Martock Media
      </h1>
      <Ins />
      <Facebook />
      <Event />
    </div>
  );
}
