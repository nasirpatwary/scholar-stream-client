import { useState } from "react";
import Container from "../../../shared/Container";
import { useGetScholarship } from "../../../hooks/usemongodbCollections";
import AllScholarshipsCard from "./AllScholarshipsCard";
import SelectCategory from "../../../forms/SelectCategory";

const AllScholarships = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [subject, setSubject] = useState("")
  const [category, setCategory] = useState("")
  const limit = 6;
  const skip = (currentPage - 1) * limit;
  const { scholarships, totalCount } = useGetScholarship({
    search,
    subject,
    category,
    skip,
    limit,
  });
  const totalPages = Math.ceil(totalCount / limit);
  return (
    <>
        <title>All Scholarships || Scholarship</title>
      <Container>
        <div className="text-center space-y-2 mt-8">
          <h2 className="text-2xl font-semibold">
            Search & Filter Scholarships Easily
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-[80ch] mx-auto">
            Search scholarships by university name, degree, or scholarship title.
          </p>

          <div className="mt-8 flex items-center gap-8 justify-between">

         <SelectCategory
            name="subject"
            value={subject}
            onChange={(e) => {
            setSubject(e.target.value);
              }}
              options={[
                { label: "Computer Science", value: "computer science" },
                { label: "Business", value: "business" },
                { label: "Engineering", value: "engineering" },
              ]}
            />

           <div className="w-full">
             <input
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              type="text"
              placeholder="Search scholarship"
              className="input-field border border-gray-300"
            />
           </div>
             <SelectCategory
            name="category"
            value={category}
            onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
              }}
               options={[
                { label: "Full fund", value: "full-fund" },
                { label: "Partial", value: "partial" },
                { label: "Self-fund", value: "self-fund" },
              ]}
            />
          </div>
        </div>

        {/* DATA */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((item) => <AllScholarshipsCard key={item._id} {...item} />)}
        </div>

        {/* PAGINATION */}
       <div className="flex justify-center gap-2 my-12 flex-wrap">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
          className={`btn`}
        >
          Prev
        </button>

      {[...Array(totalPages).keys()].map(i => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn ${currentPage === page && "bg-primary dark:bg-gray-900 text-white"}`}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(p => p + 1)}
        className="btn"
      >
        Next
      </button>
    </div>

      </Container>
    </>
  );
};

export default AllScholarships;
