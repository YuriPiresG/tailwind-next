import { ComponentProps } from "react";
interface InputProps {}

interface InputPrefixProps extends ComponentProps<"div"> {}
export function Prefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<"input">;
export function Control(props: InputControlProps) {
  return (
    <input
      type="text"
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
}
interface InputRootProps extends ComponentProps<"div"> {}
export function Root(props: InputProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
