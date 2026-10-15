import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

interface CheckListProps {
  items: readonly string[];
  className?: string;
  iconClassName?: string;
  itemClassName?: string;
}

export function CheckList({ items, className, iconClassName, itemClassName }: CheckListProps) {
  return (
    <ul className={cn("flex flex-col gap-space-sm text-body-sm text-on-surface", className)}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-center gap-space-xs", itemClassName)}>
          <Icon name="check_circle" className={cn("text-[18px] text-radiant-coral", iconClassName)} />
          {item}
        </li>
      ))}
    </ul>
  );
}
