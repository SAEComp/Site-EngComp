import {useState, useEffect} from "react";
import api from "../../../services/api.ts";

const CreateForms = ()=>{
    //const[feedback, setFeedback] = useState([]);
    const[user, setUser] = useState("");
    const[teacher, setTeacher] = useState("");
    const[course, setCourse] = useState("");
    const[rating,setRating] = useState(0);
    const[text, setText] = useState("");

    const handleSubmitFeedback = (e: any)=>{
        e.preventDefault();
    //useEffect(()=>{
        api.post("/teacher/create", {
            user: user,
            teacher: teacher,
            course: course,
            rating: rating,
            text: text
        })
        .then((response)=>console.log(response.data))
        .catch((err) => {
            console.error("Ocorreu um erro" + err);
        });
    };

    return(
        <div className="create-feedback">
            <form onSubmit={handleSubmitFeedback}>
                <label>
                    Usuário:
                    <input  type="text" value={user} name="user" onChange={(e)=>setUser(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Professor:
                    <input  type="text" value={teacher} name="teacher" onChange={(e)=>setTeacher(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Disciplina:
                    <input  type="text" value={course} name="course" onChange={(e)=>setCourse(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Nota:
                    {/* <input  type="number" value={rating} name="rating" onChange={(e)=>setRating(e.target.value)}/> */}
                </label>
                <br/>                
                <label>
                    Descrição:
                    <input  type="text" value={text} name="text" onChange={(e)=>setText(e.target.value)}/>
                </label>
                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default CreateForms;