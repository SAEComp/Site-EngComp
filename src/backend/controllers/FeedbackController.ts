import { Request, Response } from "express";
import { addDoc, collection, query, where, getDocs, updateDoc, doc, serverTimestamp, getCountFromServer, deleteDoc, collectionGroup} from "firebase/firestore";
import { db } from "../config/db/firebase_con";

export async function createFeedback(req: Request, res: Response) {
    try {
        const teacherName: string = req.body.teacher;
        const colRef = collection(db, "teacher", `${teacherName}`, "feedback");

        //por enquanto o aluno so faz uma avaliacao por disciplina uma unica vez
        //fazer limitacao de uma avaliacao por semestre (periodo de avalicao)
        const userId: string = req.body.user;
        const q = query(colRef, where("user", "==", `${userId}`), where("deleted", "==", false));
        const querySnapshot = getCountFromServer(q);
        const numberOfFeedbacks = (await querySnapshot).data().count;

        if(numberOfFeedbacks < 1) 
        {
            await addDoc(colRef, {
                user: req.body.user,
                teacher: req.body.teacher,
                course: req.body.course,
                rating: req.body.rating,
                text: req.body.text,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                deleted: false
            });
            
            updateRating(teacherName);

            return res.status(201).send("Avaliação criada com sucesso!");
        }
        else 
        {
            return res.status(200).send("Usuário já avaliou este professor/curso.");
        }
        
    } catch (error) {
        console.log(error);
        return res.status(400).send("Deu ruim");
    }
}

export async function updateFeedback(req: Request, res: Response) {
    try {
        const teacherName: string = req.body.teacher;
        const docId:string = req.body.id;
        const docRef = doc(db, "teacher", `${teacherName}`, "feedback", `${docId}`);

        //o usuario poderá editar avaliacaos apenas do periodo atual (semestre) de avaliacao
        
        await updateDoc(docRef, {
            rating: req.body.rating,
            text: req.body.text,
            updatedAt: serverTimestamp()
        });

        updateRating(teacherName);

        return res.status(201).send("Avaliação editada com sucesso!");
    } catch (error) {
        console.log(error)
        return res.status(400).send("Não foi possível concluir a edição.");
    }
}

export async function deleteFeedback(req: Request, res: Response) {
    try {
        const teacherName: string = req.body.teacher;
        const docId:string = req.body.id;
        const docRef = doc(db, "teacher", `${teacherName}`, "feedback", `${docId}`);

        await updateDoc(docRef, {
            deleted: true,
            deletedAt: serverTimestamp()
        });

        updateRating(teacherName)

        return res.status(200).send("Remoção concluída com sucesso!")
    } catch (error) {
        console.log(error);
        return res.status(400).send("Não foi possível concluir a remoção.");
    }
}

export async function getFeedbackByTeacherByCourse(req: Request, res: Response) {
    try {
        const data: any = []; //melhorar a tipagem disso
        //criar um tipo para feedback
        const teacherName: string = req.body.teacher;
        const courseName: string = req.body.course;
        const colRef = collectionGroup(db, "feedback");

        const q = query(colRef, where("teacher", "==", `${teacherName}`), where("course", "==", `${courseName}`), where("deleted", "==", false));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            data.push({"id" : doc.id, "data" : doc.data()});
        });
            
        return res.status(200).send(data);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Erro ao recuperar avaliações.");
    }
}

export async function getFeedbackByUser(req: Request, res: Response) {
    try {
        const data: any = [];

        const userId: string = req.body.user;
        const colRef = collectionGroup(db, "feedback");

        const q = query(colRef, where("user", "==", `${userId}`), where("deleted", "==", false));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            data.push({"id" : doc.id, "data" : doc.data()});
        });
            
        return res.status(200).send(data);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Erro ao recuperar avaliações.");
    }
}

async function updateRating(teacherName: string) {
    try {
        const data: any = [];

        const colRef = collectionGroup(db, "feedback");
        
        const q = query(colRef, where("teacher", "==", `${teacherName}`), where("deleted", "==", false));
        const querySnapshot = await getDocs(q);
        
        let rating: number = 0;
        
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });

        for (let i = 0; i < data.length; i++) {
            rating += data[i].rating;
        }

        rating = rating/data.length;

        const docRef = doc(db, "teacher", `${teacherName}`);

        await updateDoc(docRef, {
            rating: rating
        });

    } catch (error) {
        console.log(error);
    }
}