import { Controller } from "react-hook-form";
const ReusableSelect = ({
  name,
  control,
  label,
  options = [],
  rules,
  className = "",
  placeholder = "Select an option",
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="font-medium text-sm">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <select
              {...field}
              id={name}
              disabled={disabled}
              value={field.value ?? ""}
              className={`
                select dark:text-gray-400 text-gray-900 dark:bg-[#121212] w-full
                outline-none focus:outline-primary
                ${error ? "border-red-500" : "border-gray-300"}
                ${disabled ? "dark:bg-[#121212] cursor-not-allowed" : ""}
                ${className}
              `}
            >
              <option value="" disabled>
                {placeholder}
              </option>

              {options.map((opt) => {
                const value =
                  typeof opt === "string" ? opt : opt.value;
                const label =
                  typeof opt === "string" ? opt : opt.label;

                return (
                  <option key={value} value={value}>
                    {label}
                  </option>
                );
              })}
            </select>

            {error && (
              <p className="text-red-600 text-xs mt-1">
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default ReusableSelect;
