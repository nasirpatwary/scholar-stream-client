import { Controller } from "react-hook-form";
const Input = ({ name, label, control, rules = {}, ...rest }) => {
  return (
    <div className="space-y-1">
      <label>{label}</label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            {rest.type === "file" ? (
              <input
                type="file"
                onChange={(e) => field.onChange(e.target.files[0])}
                className={`border hover:border-primary input-file ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
              />
            ) : (
              <input
                {...field}
                {...rest}
                value={field.value ?? ""}
                className={`input-field ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
              />
            )}
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default Input;
