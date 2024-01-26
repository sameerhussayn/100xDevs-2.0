import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNumOfNotifications,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

function Main() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const [messageAtomCount,setMessageAtomCount] = useRecoilState(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom);
  const totalCount  = useRecoilValue(totalNumOfNotifications)
  return (
    <div>
      <button>Home</button>

      <button>
        My network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messageAtomCount})</button>
      <button>Notifcations ({notificationAtomCount})</button>

      <button >Me ({totalCount })</button>
    </div>
  );
}

export default App;
