import { useForm } from "react-hook-form";
import clsx from "clsx";
import { SelectInput } from "../../../forms/SelectInput";
import { useModifyRole } from "../../../hooks/usemongodbCollections";
import toast from "react-hot-toast";

const Table = ({ email, name, img, role, _id }) => {
  const {mutateAsync} = useModifyRole();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      role
    },
  });

  const onSubmit = async (data) => {
    if (data.role === "") {
      return toast.error("No role selected please select a role")
    }
    const updateDoc = {
      role: data.role,
      id: _id,
    };
    await mutateAsync(updateDoc);
  };

  return (
    <tr>
      <td>
        <img
          referrerPolicy="no-referrer"
          className="size-10 object-center rounded-full"
          src={img}
          alt={name}
        />
      </td>

      <td className="text-nowrap">{name}</td>
      <td className="text-nowrap">{email}</td>

      <td>
        <button
          className={clsx("w-20 border px-2 py-0.5 rounded-full", {
            "bg-sky-100 text-sky-600": role === "student",
            "bg-green-100 text-green-600": role === "admin",
            "bg-yellow-100 text-yellow-600": role === "moderator",
          })}
        >
          {role}
        </button>
      </td>

      <th>
        <form onChange={handleSubmit(onSubmit)}>
          <SelectInput
            id="role"
            name="role"
            control={control}
            options={[
              { value: "admin", label: "Admin" },
              { value: "moderator", label: "Moderator" },
              { value: "student", label: "Student" },
            ]}
          />
        </form>
      </th>
    </tr>
  );
};

export default Table;
