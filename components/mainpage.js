import { useRouter } from "next/router";
import Nav from "./nav";

const MainPage = () => {
  const r = useRouter();
  return (
    <div>
      <Nav />
      Main Page
    </div>
  );
};

export default MainPage;
