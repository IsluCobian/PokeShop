import { Badge } from "./ui/badge";
import { getBgColor } from "@/lib/utils";

export default function TypeBadge({ type }: { type: string }) {
  const bgColor = getBgColor(type);
  return (
    <Badge className={`hover:opacity-90 hover:${bgColor} ${bgColor}`}>
      {type}
    </Badge>
  );
}
