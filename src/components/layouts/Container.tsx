import { cn } from "@/utils/cn";

export const Container = ({ className, children, ...restProps }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-297.5 grow px-[clamp(1.5rem,0.5458rem+4.0712vw,2.5rem)]", className)}
      {...restProps}
    >
      {children}
    </div>
  );
};
