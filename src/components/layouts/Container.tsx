import { cn } from "@/utils/cn";

export const Container = ({ className, children, ...restProps }: React.ComponentProps<"div">) => {
  return (
    <div className={cn("mx-auto w-[min(100vw-3rem,69.375rem)]", className)} {...restProps}>
      {children}
    </div>
  );
};
