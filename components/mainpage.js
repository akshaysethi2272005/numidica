import { useRouter } from "next/router"
const MainPage = () => {
    const rr = useRouter();
  return (
    <div>
    
        {/* <button onClick={() => {
            sessionStorage.clear()
            rr.reload();
        }}>Logout</button> */}
    </div>
  )
}

export default MainPage