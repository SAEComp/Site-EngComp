import { Router } from "express";
import { createFeedback, deleteFeedback, getFeedbackByTeacherByCourse, getFeedbackByUser, updateFeedback } from "../controllers/FeedbackController";

const TeacherRouter = Router();

TeacherRouter.post(
    "/create",
    createFeedback
);

TeacherRouter.post(
    "/update",
    updateFeedback
);

TeacherRouter.post(
    "/delete",
    deleteFeedback
);

TeacherRouter.post(
    "/searchByCourse",
    getFeedbackByTeacherByCourse
);

TeacherRouter.post(
    "/searchByUser",
    getFeedbackByUser
);

export default TeacherRouter;
