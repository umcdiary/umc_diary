import express from 'express';
import compression from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import session from 'express-session';
import boardRouter from '../board/boardRouter';
import albumRouter from '../album/albumRouter';
// import loginRouter from '../Login/loginRouter';
import userRouter from '../user/userRouter';
//import { readFile } from "fs"
const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cors());
app.use(session({ secret: '121212', resave: true, saveUninitialized: false }));

//app.use('/',passportRouter);
//app.use('/board',boardRouter);
app.use('/album', albumRouter);
// app.use('/login', loginRouter);
app.use('/user', userRouter);

export default app;
