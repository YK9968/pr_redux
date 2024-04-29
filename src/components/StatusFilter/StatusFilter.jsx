import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { Button } from "../Button/Button";

export const StatusFilter = () => {
  const filter = useSelector((state) => state.filters.status);

  return (
    <div>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
