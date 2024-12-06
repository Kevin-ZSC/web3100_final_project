import Header from "./Header";
import LiveCam from "./LiveCam";
import MediaComp from "./MediaComp";
import NewsSignUp from "./NewsSignUp";
import TodoPart from "./TodoPart";
import Trail from "./Trail";
import Footer from "./Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <TodoPart />
      <MediaComp />
      <LiveCam />
      <Trail />
      <NewsSignUp />
      <Footer />
    </div>
  );
}
