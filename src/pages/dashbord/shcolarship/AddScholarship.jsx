import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import ReusableInput from "../../../forms/ReusableInput";
import Container from "../../../shared/Container";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";
import DatePicker from "react-datepicker";
import ReusableSelect from "../../../forms/ReusableSelect";
import { usePostScholarship } from "../../../hooks/usemongodbCollections";
import { useNavigate } from "react-router";

const countryCityMap = {
  Canada: ["Toronto", "Vancouver", "Montreal"],
  Australia: ["Melbourne", "Sydney"],
  UK: ["London", "Oxford"],
  Germany: ["Munich", "Berlin"],
};

const AddScholarship = () => {
  const navigate = useNavigate()
  const [deadline, setDeadline] = useState(null);
  const [postDate, setPostDate] = useState(null)
  const {mutateAsync, isPending} = usePostScholarship()
  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      postedUserEmail: user?.email || "",
    },
  });

  const selectedCountry = useWatch({
      control,
      name: "universityCountry",
    });

  const onSubmit = async (data) => {
    mutateAsync({...data, scholarshipPostDate: postDate, applicationDeadline: deadline})
    navigate("/dashboard/manage/scholarships")
    reset()
  };

  return (
    <>
    <title>Add Scholarship</title>
    <Container className="max-w-5xl mx-auto">
      <div className="text-center space-y-2 mt-8">
        <h2 className="text-3xl font-bold">Post Scholarship</h2>
        <p className="text-gray-600">Enter scholarship details</p>
      </div>

      {/* Basic Info */}
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 mt-12">
      <div className="grid md:grid-cols-2 gap-6">
        <ReusableInput
          name="scholarshipName"
          label="Scholarship Name"
          control={control}
          placeholder="Global Excellence Scholarship"
          rules={{ required: "Scholarship name is required" }}
        />

        <ReusableInput
          name="universityName"
          label="University Name"
          control={control}
          placeholder="University of Toronto"
          rules={{ required: "University name is required" }}
        />

        <ReusableInput
          name="universityImage"
          label="University Image URL"
          control={control}
          placeholder="Image URL"
          rules={{ required: "University image is required" }}
        />

        <ReusableInput
          name="universityWorldRank"
          label="University World Rank"
          type="number"
          control={control}
          placeholder="5"
          rules={{ required: "World rank is required" }}
        />
      </div>

      {/* Country & City */}
      <div className="grid md:grid-cols-2 gap-6">
         <ReusableSelect
        name="universityCountry"
        label="University Country"
        control={control}
        rules={{ required: "Country is required" }}
        placeholder="Select Country"
        options={[
          { label: "Canada", value: "Canada" },
          { label: "Australia", value: "Australia" },
          { label: "UK", value: "UK" },
          { label: "Germany", value: "Germany" },
        ]}
      />
       <ReusableSelect
          name="universityCity"
          label="University City"
          control={control}
          rules={{ required: "City is required" }}
          placeholder={
            selectedCountry ? "Select City" : "Select country first"
          }
          disabled={!selectedCountry}
          options={
            selectedCountry
              ? countryCityMap[selectedCountry].map((city) => ({
                  label: city,
                  value: city,
                }))
              : []
          }
        />

      </div>

      {/* Scholarship Details */}
      <div className="grid md:grid-cols-3 gap-6">
       <ReusableSelect
        name="subjectCategory"
        label="Subject Category"
        control={control}
        rules={{ required: "Subject is required" }}
        placeholder="Select Subject"
        options={[
        { label: "Computer Science", value: "computer science" },
        { label: "Business", value: "Business" },
        { label: "Engineering", value: "Engineering" },
      ]}
      />


       <ReusableSelect
        name="scholarshipCategory"
        label="Scholarship Category"
        control={control}
        rules={{ required: "Scholarship category is required" }}
        placeholder="Select Category"
        options={[
        { label: "Full fund", value: "full-fund" },
        { label: "Partial", value: "partial" },
        { label: "Self-fund", value: "self-fund" },
      ]}
    />
       <ReusableSelect
      name="degree"
      label="Degree"
      control={control}
      rules={{ required: "Degree is required" }}
      placeholder="Select Degree"
      options={[
        { label: "Diploma", value: "diploma" },
        { label: "Bachelor", value: "bachelor" },
        { label: "Masters", value: "masters" },
      ]}
    />

      </div>

      {/* Fees */}
      <div className="grid md:grid-cols-3 gap-6">
        <ReusableInput
          name="tuitionFees"
          label="Tuition Fees"
          type="number"
          control={control}
          placeholder="0"
          rules={{ required: "Tuition Fees is required" }}
        />

        <ReusableInput
          name="applicationFees"
          label="Application Fees"
          type="number"
          control={control}
          placeholder="Application Fees"
          rules={{ required: "Application fee is required" }}
        />

        <ReusableInput
          name="serviceCharge"
          label="Service Charge"
          type="number"
          control={control}
          placeholder="Service Charge"
          rules={{ required: "Service charge is required" }}
        />
      </div>

      {/* Dates & Email */}
      <div className="grid md:grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label className="label">
        PostDate
        </label>
        <DatePicker
          className="input-field border border-gray-300"
          selected={postDate}
          dateFormat="yyyy-MM-dd"
          placeholderText="yyyy-mm-dd"
          onChange={(date) => setPostDate(date)}
        />
      </div>
      <div className="flex flex-col">
        <label className="label">
        Deadline
        </label>
        <DatePicker
          className="input-field border border-gray-300"
          selected={deadline}
          dateFormat="yyyy-MM-dd"
          placeholderText="yyyy-mm-dd"
          onChange={(date) => setDeadline(date)}
        />
        </div>

        <ReusableInput
        readOnly={true}
          name="postedUserEmail"
          label="Posted User Email"
          control={control}
          disabled
        />
      </div>

      {/* Submit */}
      <button
      type="submit"
        className="btn-primary text-white/70"
      >
        {isPending ? (
          <span className="flex gap-2 items-center">
            Submitting{" "}
            <TbFidgetSpinner size={16} className="animate-spin m-auto" />
          </span>
        ) : (
          "Post a Scholarship"
        )}
      </button>

      </form>
    </Container>
    </>
  );
};

export default AddScholarship;
