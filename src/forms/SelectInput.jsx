import { Controller } from "react-hook-form";

export const SelectInput = ({
  label,
  id,
  options = [],
  control,
  name,
  className=""
}) => {
  return (
    <div className="w-full max-w-md">
      <label htmlFor={id} className="block mb-1">{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select
            id={id}
            {...field}
            className={`${className} input-field border-gray-300`}
          >
            <option value="">Select {label}</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};
