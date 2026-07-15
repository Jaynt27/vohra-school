const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const dotenv = require("dotenv");

const Teacher = require("./models/teacher");

// Load env file
dotenv.config();


// App
const app = express();


// Middlewares
app.use(cors());

app.use(express.json());


// make uploads folder public
app.use(
    "/uploads",
    express.static("uploads")
);



// =======================
// DATABASE CONNECTION
// =======================


mongoose.connect(process.env.MONGO_URL)

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((error)=>{

    console.log(error);

});




// =======================
// MULTER FILE UPLOAD
// =======================


const storage = multer.diskStorage({


    destination:(req,file,cb)=>{

        cb(null,"uploads/");

    },



    filename:(req,file,cb)=>{

        cb(
            null,
            Date.now()+"-"+file.originalname
        );

    }


});



const upload = multer({
    storage:storage
});





// =======================
// ADD TEACHER
// =======================



app.post(
    "/addTeacher",

    upload.single("resume"),

    async(req,res)=>{


        try{


            const teacher =
            new Teacher({


                name:req.body.name,


                subject:req.body.subject,


                qualification:
                req.body.qualification,


                experience:
                req.body.experience,


                email:req.body.email,


                phone:req.body.phone,


                resume:req.file.filename


            });



            await teacher.save();



            res.json({

                success:true,

                message:
                "Teacher Added Successfully"

            });



        }

        catch(error){


            res.status(500)
            .json({

                success:false,

                error:error.message

            });


        }


    }
);





// =======================
// GET TEACHERS
// =======================



app.get(
    "/teachers",

    async(req,res)=>{


        try{


            const teachers =
            await Teacher.find();



            res.json(teachers);



        }


        catch(error){


            res.status(500)
            .json({

                error:error.message

            });


        }



    }
);






// =======================
// SERVER START
// =======================



const PORT =
process.env.PORT || 5000;



app.listen(PORT,()=>{


    console.log(
        `Server Started on ${PORT}`
    );


});
