import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../../redux/balance";
import { useState } from "react";

export default function Balance() {
  const credits = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Balance : {credits}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(value))}>Deposite credits</button>
      <button onClick={() => dispatch(withdraw(value))}>
        Withdraw credits
      </button>
    </div>
  );
}
