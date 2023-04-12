// Handle form submission to add a new movie review to Firebase

const form = document.querySelector("form");
form
  .addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the form data
    const title = document.getElementById("title").value;
    const link1080p = document.getElementById("link1080p").value;
    const link720p = document.getElementById("link720p").value;
    const link480p = document.getElementById("link480p").value;
    const postId = document.getElementById("postId").value;

    const code = Math.random().toString(36).substring(2, 8);
    const code1 = Math.random().toString(36).substring(2, 8);
    db.collection("telegram-post").doc(postId).set({
      title,
      link1080p,
      link720p,
      link480p,
      code,
      code1,
      timestamp: Date(),
    });
    alert("Movie Links are uploaded")
  })

