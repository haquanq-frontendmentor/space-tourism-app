export const TabList = ({ children, ...restProps }: React.ComponentProps<"div">) => {
  return (
    <div role="tablist" {...restProps}>
      {children}
    </div>
  );
};
