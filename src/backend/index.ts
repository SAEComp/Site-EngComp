import express from "express";
import config from "config";
import TestRouter from "./routes/test";
import TeacherRouter from "./routes/teacher";

//instância da apliacação
const app = express();

//middleware - trafegar informações em json
app.use(express.json());

app.use("/api/", TestRouter);
app.use("/api/teacher", TeacherRouter);

//importando a porta do config
const port = config.get<number>("port");

app.listen(port, async () => {
    console.log(`App running / Port: ${port}`)
});
