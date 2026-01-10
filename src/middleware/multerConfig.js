import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, path.join(path.dirname(fileURLToPath(import.meta.url)), "../../uploads"));
    },
    filename: (req,file,cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = [".pdf", ".docx"];
    const ext = path.extname(file.originalname).toLowerCase();
    if(allowedTypes.includes(ext)) {
        cb(null, true);
    }else{
        cb(new Error("Only pdf or docx files are allowed"));
    }
};

const upload = multer({
    storage: storage,
    limits: {fileSize: 5 * 1024 * 1024},
    fileFilter: fileFilter
});

export default upload;