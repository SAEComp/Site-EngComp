import { teacherFeedbackProvider } from "../../providers";
import { IFilterData, IBaseQuery, ITeacherQuery, IFeedbacksQuery, IUserFeedbacksQuery, IPagination, ITeacher, ICourse, IFeedbacksResponse, IFeedbackCreator, IFeedbackUpdater } from "../../interfaces/TeacherFeedback/feedback.interface";


class FeedbackService {
    async getTeachers(query: ITeacherQuery): Promise<IPagination<ITeacher> | null> {
        try {
            const endpoint = `/teachers`;
            const response = await teacherFeedbackProvider.get<IPagination<ITeacher>>(endpoint, {params: query});
            return response.data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getCourses(query: IBaseQuery): Promise<IPagination<ICourse> | null> {
        try {
            const endpoint = `/courses`;
            const response = await teacherFeedbackProvider.get<IPagination<ICourse>>(endpoint, {params: query});
            return response.data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getFeedbacks(query: IFeedbacksQuery): Promise<IPagination<IFeedbacksResponse> | null> {
        try {
            const endpoint = `/feedbacks`;
            const response = await teacherFeedbackProvider.get<IPagination<IFeedbacksResponse>>(endpoint, {params: query});
            return response.data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getUserFeedbacks(query: IUserFeedbacksQuery): Promise<IPagination<IFeedbacksResponse> | null> {
        try {
            const endpoint = `/userFeedbacks`;
            const response = await teacherFeedbackProvider.get<IPagination<IFeedbacksResponse>>(endpoint, {params: query});
            return response.data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createFeedback(data: IFeedbackCreator): Promise<IFeedbacksResponse | null> {
        try {
            const endpoint = `/feedbacks`;
            const response = await teacherFeedbackProvider.post<IFeedbacksResponse>(endpoint, data);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateFeedback(data: IFeedbackUpdater): Promise<IFeedbacksResponse | null> {
        try {
            const endpoint = `/feedbacks`;
            const response = await teacherFeedbackProvider.put<IFeedbacksResponse>(endpoint, data);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteFeedback(feedbackId: string): Promise<boolean> {
        try {
            const endpoint = `/feedbacks/${feedbackId}`;
            await teacherFeedbackProvider.delete(endpoint);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async getFilterData(): Promise<IFilterData[] | null> {
        try {
            const endpoint = `/filterData`;
            const response = await teacherFeedbackProvider.get<IFilterData[]>(endpoint);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default new FeedbackService();