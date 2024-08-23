import { RecoilRoot } from "recoil"
import CounterCard from "./component/CounterCard"

function App() {

  return <RecoilRoot>
    <div>
      <CounterCard></CounterCard>
    </div>
  </RecoilRoot>
}


export default App
