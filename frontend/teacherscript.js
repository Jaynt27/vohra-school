const teacherForm = document.getElementById("teacherForm");

teacherForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(teacherForm);

    try {
        const response = await fetch(
            "https://vohra-school.onrender.com/addTeacher",
            {
                method: "POST",
                body: formData
            }
        );

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            teacherForm.reset();
        } else {
            alert(result.message || "Upload Failed");
        }

    } catch (error) {
        console.error(error);
        alert("Unable to connect to the server.");
    }
});