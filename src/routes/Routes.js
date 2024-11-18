import express from "express";
const Router = express.Router();
import { upload } from "../middleware/multer.js";
import extractEmailFromUrl from "../controller/extractEmailFromCsv.js";
import downloadCsv from "../controller/downloadCsv.js";
import getAllJson from "../controller/allData.js";
import deleteData from "../controller/deletData.js";
import deleteAllData from "../controller/deleteAllData.js";

Router.post("/", upload.single("csvFile"),extractEmailFromUrl);
Router.get("/", downloadCsv )
Router.get("/allData",getAllJson)
Router.delete("/deleteData/:_id",deleteData)
Router.delete("/deleteAllData",deleteAllData)

export default Router ;