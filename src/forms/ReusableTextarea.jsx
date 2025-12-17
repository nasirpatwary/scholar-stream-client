import { Controller } from "react-hook-form";

const ReusableTextarea = ({ name, control, placeholder, label, rules }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <textarea
              {...field}
              value={field.value ?? ""}
              placeholder={placeholder}
              className={`input-field ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>

            {error && <p className="text-red-600 text-sm">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default ReusableTextarea;
