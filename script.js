document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById("downloadButton");

  downloadButton.addEventListener("click", function() {
      const cvPath = "lap.pdf";

      const link = document.createElement("a");
      link.href = cvPath;

      link.download = "lap.pdf";

      document.body.appendChild(link)
      link.click();
      document.body.removeChild(link);   
  });
});