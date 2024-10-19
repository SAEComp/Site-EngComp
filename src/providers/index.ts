import axios from "axios";


export const teacherFeedbackProvider = axios.create({
    baseURL : import.meta.env.VITE_TEACHER_FEEDBACK_API_URL,
  });