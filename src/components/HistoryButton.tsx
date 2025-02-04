import { History } from "lucide-react";
import { Link } from "react-router-dom";

export default function HistoryButton() {
  return (
    <Link to="/history">
      <History size={28} />
    </Link>
  );
}
