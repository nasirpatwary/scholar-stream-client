import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"
import toast from "react-hot-toast"

// userCollection server to client
export const  useGetUsers = () => {
const axiosSecure = useAxiosSecure()
const {user} = useAuth()
const { data: users = [], isLoading, isError } = useQuery({
   queryKey: ["users", user?.email],
   queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user.email}`)
      return data
   }
})
   return [users, isLoading, isError]
}

export const useModifyRole = () =>{
   const axiosSecure = useAxiosSecure()
   const queryClient = useQueryClient()
   const mutation = useMutation({
      mutationFn: async ({id, ...updateDoc}) => {
         const {data} = await axiosSecure.patch(`/users/${id}/role`, updateDoc)
         return data
      },
      onSuccess: (data)=>{
         toast.success(`modify ${data.role} successfully!`)
         queryClient.invalidateQueries({queryKey: ["users"]})
      },
      onError: (error) => toast.error(error.message)
   })
   return mutation
}

export const useGetUserRole = () => {
  const {user, loading} = useAuth()
  const axiosSecure = useAxiosSecure()
  const {data: role="user", isLoading} = useQuery({
   queryKey: ["user-role", user?.email],
   enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/users/${user.email}/role`
      );
      return data?.role ?? "user";
   }
  })
  return {role, isLoading}
}

// scholarshipCollection server to client
export const usePostScholarship = () => {
   const queryClient = useQueryClient()
      const axiosSecure = useAxiosSecure()
   const mutation = useMutation({
      mutationFn: async (newShcolarship) => {
         await axiosSecure.post("/scholarships", newShcolarship)
      },
      onSuccess: ()=> {
         toast.success("post shcolarship successfully!")
         queryClient.invalidateQueries({queryKey: ["scholarships"]})
      },
      onError: error => toast.error(error.message)
   })
  return mutation
}

export const useGetScholarship = ({ search = "", subject="",
    category="", skip = 0, limit = 6 }) => {
   const axiosSecure = useAxiosSecure()
   const {data = {} } = useQuery({
      queryKey: ["scholarships", search, subject, category, skip, limit ],
      keepPreviousData: true,
      queryFn: async () => {
      const { data } = await axiosSecure.get(`/scholarships?search=${search}&subject=${subject}&category=${category}&limit=${limit}&skip=${skip}`)
      return data
      }
   })
  return {
   scholarships: data.scholarships || [],
   totalCount: data.totalCount || 0,
  }
}

export const useGetManangeScholarships = () => {
   const axiosSecure = useAxiosSecure()
   const {user} = useAuth()
   const {data: scholarships=[], isLoading, isError } = useQuery({
      queryKey: ["scholarships", user?.email ],
      keepPreviousData: true,
      queryFn: async () => {
      const { data } = await axiosSecure.get(`/scholarships/${user.email}/manage`)
      return data
      }
   })
  return [scholarships, isLoading, isError]
}

export const useGetScholarshipById = (id) => {
   const axiosSecure = useAxiosSecure()
   const {data: scholarship={}, isLoading, isError } = useQuery({
      queryKey: ["scholarships", id],
      enabled: !!id,
      queryFn: async () => {
      const { data } = await axiosSecure.get(`/scholarships/${id}/details`)
      return data
      }
   })
  return [scholarship, isLoading, isError]
}

export const useDeleteScholarship = () => {
   const axiosSecure = useAxiosSecure()
   const queryClient = useQueryClient()
   const mutation = useMutation({
      mutationFn: async (id) => {
      await axiosSecure.delete(`/scholarships/${id}`)
      },
      onSuccess: () => {
         toast.success("remove scholarship successfully!")
         queryClient.invalidateQueries({queryKey: ["scholarships"]})
      },
      onError: error => toast.error(error.message)
   })
  return mutation
}