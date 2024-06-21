document.getElementById('download-button').addEventListener('click', function() {
    // Create an anchor element
    var downloadLink = document.createElement('a');
    
    // Set the file URL and name
    downloadLink.href = 'Steven Valentino CV.pdf'; // Replace with the actual file URL
    downloadLink.download = 'Steven Valentino CV.pdf'; // Replace with the desired file name
    
    // Append the anchor element to the body
    document.body.appendChild(downloadLink);
    
    // Trigger the click event
    downloadLink.click();
    
    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);
  });

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".typewriter-text");
    const text = "A Computer Science graduate from Binus University with a strong background in systems analysis and user interface (UI/UX) design. Have a deep understanding of software development and experience in analyzing user needs and designing intuitive and engaging solutions. Committed to making a positive contribution in developing innovative and quality systems.";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 55);
        }
    }

    type();
});

  
