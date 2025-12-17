import { format } from "date-fns";
import { ButtonComponent } from "./ButtonComponent";
const ScholarshipCard = (
    { 
    scholarshipName,
    universityName,
    universityImage,
    universityCountry,
    universityWorldRank,
    degree,
    applicationFees,
    applicationDeadline,
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
          {scholarshipName}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-200 font-medium">
          {universityName}, {universityCountry}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>
            <span className="font-semibold">World Rank:</span>{" "}
            #{universityWorldRank}
          </p>
          <p>
            <span className="font-semibold">Degree:</span> {degree}
          </p>
          <p>
            <span className="font-semibold">Application Fee:</span>{" "}
            ${applicationFees}
          </p>
          <p>
            <span className="font-semibold">Deadline: </span>{" "}
            {format(new Date(applicationDeadline), "P")}
          </p>
        </div>
          <ButtonComponent className="bg-primary w-full">
            View Details
          </ButtonComponent>

      </div>
    </div>
  );
};

export default ScholarshipCard;
