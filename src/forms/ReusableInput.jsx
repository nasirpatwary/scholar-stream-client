import { Controller } from "react-hook-form";

const ReusableInput = ({
  name,
  control,
  label,
  placeholder,
  defaultValue,
  readOnly,
  rules,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type={type}
              readOnly={readOnly}
              placeholder={placeholder}
              defaultValue={defaultValue}
              value={field.value ?? ""}
              className={`input-field ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error && <p className="text-red-600 text-sm">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default ReusableInput;
