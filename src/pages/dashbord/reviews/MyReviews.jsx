import { useGetMyReview } from '../../../hooks/usemongodbCollections'
import LoadingSpinner from '../../../shared/LoadingSpinner'
import NoDataAvailable from '../../../shared/NoDataAvailable'
import ErrorPage from '../../ErrorPage'
import MyReveiwTable from './MyReveiwTable'

const MyReviews = () => {
  const [reviews, isLoading, isError] = useGetMyReview()
  if(isLoading) return <LoadingSpinner />
  if(isError) return <ErrorPage />
  return (
    <>
    <div className="px-4">
      {reviews.length > 0 ? (
        <div className="overflow-x-auto rounded-box border border-base-content/5 dark:bg-[#121212] bg-base-100">
          <table className="table">
            <thead>
              <tr className="dark:text-gray-200">
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>universityName</th>
                <th>ratingPoint</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => {
                return <MyReveiwTable key={review._id} review={review} />;
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <NoDataAvailable title="user" subtitle="Don’t worry — creating an account gives you access to personalized scholarships and important updates." />
      )}
    </div>
    </>
  )
}

export default MyReviews