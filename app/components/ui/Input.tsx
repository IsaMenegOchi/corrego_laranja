interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputStyle?: keyof typeof styles;
}

const styles = {
  "white-outline":
    "mt-4 w-full resize-y overflow-auto rounded-lg border border-(--primary-color) px-4 py-2 shadow-sm focus:border-(--yellow-color) focus:outline-none hover:border-(--yellow-color)",
  "gray-filled": "mt-2 h-12 w-full rounded-md bg-gray-100 px-3",
};

export function Input({
  label,
  inputStyle,
  ...props
}: InputProps & { style?: keyof typeof styles }) {
  return (
    <div>
      {label ? <label className="">{label}</label> : null}
      <input {...props} className={styles[inputStyle || "white-outline"]} />
    </div>
  );
}
