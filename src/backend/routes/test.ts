import {Router, Request, Response} from "express";

const TestRouter = Router();

export default TestRouter.get(
    "/test",
    (req: Request, res: Response) => {
        res.status(200).send("API Working");
    });