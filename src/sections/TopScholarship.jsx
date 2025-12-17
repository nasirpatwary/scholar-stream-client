import ScholarshipCard from "../shared/ScholarshipCard"
const TopScholarship = ({ scholarships = [] }) => {
  const sortedScholarships = [...scholarships]
    .sort((a, b) => {
      if (a.applicationFees !== b.applicationFees) {
        return a.applicationFees - b.applicationFees;
      }
      return new Date(b.scholarshipPostDate) - new Date(a.scholarshipPostDate);
    })
  return (
    <div className="mt-12">
      <div className="text-center mt-8 space-y-2">
        <h2 className="text-3xl font-bold">
          Top Scholarships for You
        </h2>
        <p className="text-gray-600 dark:text-gray-200 max-w-[55ch] mx-auto">
          Discover high-value scholarships with low application fees and generous funding.
          Start your academic journey with opportunities trusted by thousands of students worldwide.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {sortedScholarships.map(scholarship => <ScholarshipCard key={scholarship.id} {...scholarship} />)}
      </div>
    </div>
  )
}


export default TopScholarship