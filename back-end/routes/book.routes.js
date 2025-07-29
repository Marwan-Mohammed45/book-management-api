import express from "express";
import {getallbook,bookbyid,createbook,updatebook,deletebook} from "../controller/book.controller.js";
import verifyToken from "../middleware/middleware.js";


const router = express.Router();

router.get("/book", getallbook);            
router.get("/book/:id", bookbyid); 

router.post("/book",verifyToken, createbook);            
router.put("/book/:id",verifyToken, updatebook);         
router.delete("/book/:id",verifyToken,deletebook);      

export default router;
