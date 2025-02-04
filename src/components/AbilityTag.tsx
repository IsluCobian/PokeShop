import { useAbility } from "@/hooks/useAbility";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { buttonVariants } from "./ui/button";

export default function AbilityTag({ ability }: { ability: string }) {
  const { data } = useAbility(ability);
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger
          className={`capitalize ${buttonVariants({ variant: "outline" })}`}
        >
          {ability}
        </TooltipTrigger>
        <TooltipContent>
          <p>{data}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
