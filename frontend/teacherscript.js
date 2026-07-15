const teacherForm = document.getElementById("teacherForm");

teacherForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(teacherForm);

    try {
        const response = await fetch(
            "https://vohra-school.onrender.com/addTeacher",
            {
                method: "POST",
                body: formData,
            }
        );

        const result = await response.json();

        if (response.ok) {
            alert(result.message || "Resume uploaded successfully!");
            teacherForm.reset();
        } else {
            alert(result.message || "Upload failed!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Unable to connect to the server.");
    }
});