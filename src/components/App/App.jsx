import { useSelector } from "react-redux";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import Balance from "./Balance/Balance";

export default function App() {
  const lang = useSelector((state) => state.local.lang);
  return (
    <div>
      <Balance />
      <LangSwitcher />
      <p>Selected lang: {lang}</p>
    </div>
  );
}
