import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, isTextArea = false, ...props },
  refs
) {
  const classes =
    "w-full p-1 border-b-2 ruonded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={refs} className={classes} {...props} />
      ) : (
        <input ref={refs} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
