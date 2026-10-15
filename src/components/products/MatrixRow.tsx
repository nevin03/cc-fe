import { cn } from "@/lib/cn";
import type { MatrixRow as MatrixRowData } from "@/data/platform";
import { Icon } from "@/components/ui";

const cell = "px-4 py-4 sm:px-6";

interface MatrixRowProps {
  row: MatrixRowData;
  dimmed: boolean;
}

export function MatrixRow({ row, dimmed }: MatrixRowProps) {
  const { feature, standard, enterprise, exclusive } = row;

  return (
    <tr className={cn("transition-all hover:bg-surface-container-low/60", dimmed && "opacity-25")}>
      <th scope="row" className={cn(cell, "font-medium text-on-surface")}>
        <span className="flex items-center gap-2">
          {feature}
          {exclusive && (
            <span className="rounded border border-electric-amber/30 bg-electric-amber-muted px-1.5 py-0.5 text-[10px] font-bold text-electric-amber-dark">
              ENT
            </span>
          )}
        </span>
      </th>
      <td className={cn(cell, exclusive ? "text-outline" : "text-on-surface-variant")}>
        {standard ?? (
          <>
            <Icon name="close" className="text-[18px]" />
            <span className="sr-only">Not included</span>
          </>
        )}
      </td>
      <td className={cn(cell, "border-l border-primary-fixed/40 bg-primary-fixed/15 font-semibold text-electric-purple")}>
        {enterprise}
      </td>
    </tr>
  );
}
