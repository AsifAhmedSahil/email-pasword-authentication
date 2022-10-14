import { getAuth } from "firebase/auth";
import './App.css';
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import app from "./firebase/firebase.init";

const handleRegister = (event) =>{
  event.preventDefault();
  const email = event.target.email.value
  const password = event.target.password.value
  console.log(email,password)
}
const handleOnChange = (event) =>{
  console.log(event.target.value);
}
const handleBlur = (event) =>{
  console.log(event.target.value)

}

const auth = getAuth(app)
function App() {
  return (
    <div className="">
      {/* onchange handler o add krte pari oita krle word by word change hobe */}
      {/* onblue use krle likhar por set hbe value */}
      
        <RegisterReactBootstrap/>
      
      
    </div>
  );
}

export default App;
