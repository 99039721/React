import { MenuHeader } from "@/component/MenuHeader";
import { MidComponent } from "@/component/MidComponent";
import { Title } from "@/component/Title";
import { Btext } from "@/component/Btext";
import { MenuFooter } from "@/component/MenuFooter";

const Home = () => {
  return (
    <div className="container">
      <MenuHeader />
      <MidComponent />
      <Title />
      <Btext />
      <MenuFooter />
    </div>
  );
};

export default Home;
