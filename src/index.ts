import express,{Request,Response} from "express";

const app = express();
const PORT = 3000;

const handler = (req:Request,res:Response) => {

    return res.json({message:"Hey the F#% your api is working !!"});

}

app.get("/",handler);


app.listen(PORT,()=>{
    console.log("App is listening on the PORT : 3000");
})
