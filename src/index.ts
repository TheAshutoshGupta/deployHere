import express from 'express';
import cors from "cors";
import simpleGit from 'simple-git';
import { generate } from './utils';
import {getFilePath} from './file';
import path from 'path';


const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/deploy", async (req, res) => {
    const repoUrl = req.body.repoUrl;
    console.log(repoUrl);
    const id=generate();
    await simpleGit().clone(repoUrl,`output/${id}`);

    const files=getFilePath(`output/${id}`);
    //put this in s3 bucket
    console.log(files);
    res.json({
        "repo": id,
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})