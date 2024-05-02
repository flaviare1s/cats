import { Header } from "./components/Header";
import SignIn from "./components/SignIn";

export function App() {

  return (
    <>
    <div className="w-full flex flex-col justify-center items-center m-auto">
      <Header />
    </div>
    <div>
      <SignIn />

    </div>
    
    </>
  )
}
