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
  