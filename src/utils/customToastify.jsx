import toast from "react-hot-toast";
export const handleCustomFun = (id, mutateAsync) => {
  toast((t) => (
    <div className="space-y-4">
      <p>Are you sure you want to delete?</p>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="border duration-500 border-green-600
        text-green-600 cursor-pointer px-4 py-1 rounded font-semibold "
        >
          No
        </button>
        <button
          className="border duration-500 border-red-600 cursor-pointer px-4 py-1 rounded font-semibold text-red-600"
          onClick={async () => {
            toast.dismiss(t.id);
            await mutateAsync(id);
          }}
        >
          Yes
        </button>
      </div>
    </div>
  ));
};
export const handleRejected = (update, mutateAsync) => {
  toast((t) => (
    <div className="space-y-4">
      <p>Are you sure you want to rejected?</p>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="border duration-500 border-green-600
        text-green-600 cursor-pointer px-4 py-1 rounded font-semibold "
        >
          No
        </button>
        <button
          className="border duration-500 border-red-600 cursor-pointer px-4 py-1 rounded font-semibold text-red-600"
          onClick={async () => {
            toast.dismiss(t.id);
            await mutateAsync(update);
          }}
        >
          Yes
        </button>
      </div>
    </div>
  ));
};


export const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Computer Science Student",
    university: "University of Dhaka",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    message:
      "This platform helped me find a fully funded scholarship within days. The application process was clear and well organized."
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    role: "MBA Applicant",
    university: "North South University",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    message:
      "I discovered multiple international scholarships that I didn’t know existed. The filtering system saved me a lot of time and effort."
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Engineering Graduate",
    university: "BUET",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 4,
    message:
      "Very reliable and easy to use. The scholarship deadlines and requirements were accurate, which made my application process stress-free."
  },
  {
    id: 4,
    name: "Mahmudul Islam",
    role: "Undergraduate Student",
    university: "Rajshahi University",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    message:
      "Thanks to this platform, I secured a partial scholarship abroad. The regular updates and verified listings are extremely helpful."
  },
  {
    id: 5,
    name: "Farzana Akter",
    role: "Public Health Student",
    university: "BRAC University",
    image: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    message:
      "A trustworthy platform for scholarship seekers. I especially liked the detailed scholarship descriptions and eligibility guidelines."
  },
  {
    id: 6,
    name: "Rafiul Karim",
    role: "Higher Secondary Graduate",
    university: "Dhaka College",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 4,
    message:
      "This website gave me confidence to apply for scholarships early. It’s perfect for students who are planning their academic future."
  }
];
