const SelectCategory = ({
  name,
  value,
  onChange,
  options = [],
}) => {
  return (
    <div className="w-full">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="input-field border border-gray-300 dark:bg-[#121212]"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
