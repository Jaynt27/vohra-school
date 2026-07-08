const teacherForm = document.getElementById("teacherForm");


teacherForm.addEventListener("submit", async (e)=>{


    e.preventDefault();


    const formData = new FormData(teacherForm);


    try{

        const response = await fetch(
            "http://localhost:5000/addTeacher",
            {
                method:"POST",
                body:formData
            }
        );


        const result = await response.json();


        alert(result.message);


        teacherForm.reset();


    }
    catch(error){

        console.log(error);

        alert("Upload Failed");

    }


});