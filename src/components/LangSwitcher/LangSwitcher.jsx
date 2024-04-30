import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/local";

export default function LangSwitcher() {
  const lang = useSelector((state) => state.local.lang);
  const dispatch = useDispatch();

  return (
    <div>
      <select
        value={lang}
        onChange={(e) => dispatch(changeLang(e.target.value))}
      >
        <option value="en">EN</option>
        <option value="pl">PL</option>
        <option value="uk">UK</option>
      </select>
    </div>
  );
}
