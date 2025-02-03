import { Badge } from "./ui/badge";
import { getBgColor } from "@/lib/utils";

export default function TypeBadge({ type }: { type: string }) {
  return <Badge className={`${getBgColor(type)}`}>{type}</Badge>;
}
