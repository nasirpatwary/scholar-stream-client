import { useNavigate, useParams } from "react-router"
import Container from "../../../shared/Container"
import { useGetScholarshipById, usePostApplication } from "../../../hooks/usemongodbCollections"
import { Helmet } from "react-helmet-async"
import LoadingSpinner from "../../../shared/LoadingSpinner"
import ErrorPage from "../../ErrorPage"
import { compareAsc, format } from "date-fns";
import toast from "react-hot-toast"
import useAuth from "../../../hooks/useAuth"

const ScholarshipDetails = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
  const {mutateAsync} = usePostApplication()
  const {id} = useParams()
  const [scholarship, isLoading, isError] = useGetScholarshipById(id)
  if(isLoading) return <LoadingSpinner />
  if(isError) return <ErrorPage />
  const {
    scholarshipName,
    universityName,
    universityImage,
    universityWorldRank,
    universityCountry,
    universityCity,
    subjectCategory,
    scholarshipCategory,
    degree,
    tuitionFees,
    applicationFees,
    serviceCharge,
    scholarshipPostDate,
    applicationDeadline,
    _id
  } = scholarship || {}
  const handleApplyScholarship = async () =>{
    try{
      const isApplyAllowed =  compareAsc(scholarshipPostDate, applicationDeadline) === 1;
      if(isApplyAllowed) {
      return toast.error("The application deadline has passed.");
      }
      const applicationData = {
      scholarshipName,
      scholarshipId: _id,
      userId: user?.uid,
      userName: user?.displayName,
      userEmail: user?.email,
      universityName: universityName,
      scholarshipCategory: subjectCategory,
      degree,
      universityCity,
      applicationFees,
      serviceCharge,
      applicationStatus: "pending",
      applicationDate: new Date(),
      paymentStatus: "unpaid",
      feedback: "" 
    };
    await mutateAsync(applicationData)
    navigate(`/dashboard/payment/${_id}`, { state: {
      scholarshipName,
      scholarshipId: _id,
      userId: user?.uid,
      userName: user?.displayName,
      userEmail: user?.email,
      universityName: universityName,
      scholarshipCategory: subjectCategory,
      degree,
      universityCity,
      applicationFees,
      serviceCharge,
      },})}
       catch (error) {
    console.error(error);
    toast.error("Failed to apply scholarship. Please try again.");
  }

  }
  return (
    <>
    <Helmet>
      <title>View Details || {scholarshipName}</title>
    </Helmet>
    <Container className="py-10">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* University Image */}
        <img
          src={universityImage}
          alt={universityName}
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />

        {/* Basic Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            {scholarshipName}
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {universityName} • World Rank #{universityWorldRank}
          </p>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {universityCity}, {universityCountry}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="badge badge-outline">{degree}</span>
            <span className="badge badge-outline">{subjectCategory}</span>
            <span className="badge badge-outline capitalize">
              {scholarshipCategory} Scholarship
            </span>
          </div>

          <div className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Application Deadline:</strong>{" "}
              {format(new Date(applicationDeadline), "P")}
            </p>
            <p>
              <strong>Posted On:</strong>{" "}
              {format(new Date(scholarshipPostDate), "P")}
            </p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {/* Scholarship Description */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Scholarship Description
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            This scholarship is offered by {universityName} to support talented
            {` ${degree}`} students in the field of {subjectCategory}. It aims to
            reduce financial barriers and encourage academic excellence for
            international students.
          </p>
        </div>

        {/* Fees & Coverage */}
        <div className="rounded-xl border dark:border-gray-700 p-5">
          <h3 className="text-xl font-semibold mb-4">
            Fees & Coverage Details
          </h3>

          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>
              🎓 <strong>Tuition Fees:</strong> ${tuitionFees}
            </li>
            <li>
              📝 <strong>Application Fees:</strong> ${applicationFees}
            </li>
            <li>
              💼 <strong>Service Charge:</strong> ${serviceCharge}
            </li>
            <li>
              🎁 <strong>Coverage Type:</strong>{" "}
              {scholarshipCategory === "partial"
                ? "Partial tuition support"
                : "Full funding"}
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <button onClick={handleApplyScholarship} className="btn btn-primary px-8">
          Apply for Scholarship
        </button>
      </div>
    </Container>
    </>
  )
}

export default ScholarshipDetails 