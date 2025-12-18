import { ButtonComponent } from "../../../shared/ButtonComponent";
const AllScholarshipsCard = (
    { 
    universityName,
    universityImage,
    universityCountry,
    scholarshipCategory,
    applicationFees,
    _id
    }

) => {
  return (
    <div className="card bg-base-100 dark:bg-gray-950 shadow-md hover:shadow-xl transition duration-300">
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={universityImage}
          alt={universityName}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-5 space-y-3">
        <h2 className="card-title text-lg font-bold line-clamp-2">
          ScholarshipCategory: {scholarshipCategory}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-200 font-medium">
         UniversityName {universityName}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {universityCountry}
          </p>
          <p>
            <span className="font-semibold">Application Fee:</span>{" "}
            ${applicationFees}
          </p>
        </div>
          <ButtonComponent to={`/view/details/${_id}`} className="bg-primary w-full">
            View Details
          </ButtonComponent>

      </div>
    </div>
  );
};

export default AllScholarshipsCard;
