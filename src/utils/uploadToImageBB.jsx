import axios from "axios";
const uploadToImageBB = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  const API_KEY = import.meta.env.VITE_IMGBB_KEY;
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${API_KEY}`,
    formData
  );
  return data.data.url;
};

export default uploadToImageBB;
