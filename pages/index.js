import HomePage from "../components/homepage"
import MainPage from "../components/mainpage";
import { useEffect ,useState} from "react";
export default function Home() {
  const [h1, seth1] = useState(null)
  const [h2, seth2] = useState(null)
  useEffect(() => {
    const hash1 = sessionStorage.getItem("email");
    const hash2 = sessionStorage.getItem('name');
    seth1(hash1);
    seth2(hash2);
  }, [])
  if( h1 == null && h2 == null){
    return <HomePage/>;
  }else{
    return <MainPage/>
  }
}
