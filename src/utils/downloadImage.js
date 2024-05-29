export const downloadImage = (src, colorType, fileName) => {
  fetch(src + "?not-from-cache-please", {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch image. Status: ${response.status}`);
      }
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);

      // Create a new image element
      const img = new Image();

      // When the image loads, apply the grayscale filter
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas dimensions to match the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Apply grayscale filter
        ctx.filter =
          colorType === "black&White" ? "grayscale(100%)" : "grayscale(0%)";
        ctx.drawImage(img, 0, 0);

        // Convert the canvas to blob
        canvas.toBlob((grayscaleBlob) => {
          // Create a new URL for the blob
          const grayscaleUrl = window.URL.createObjectURL(grayscaleBlob);

          // Create a link element for download
          const link = document.createElement("a");
          link.href = grayscaleUrl;
          link.setAttribute("download", "frame.jpeg");

          // Append the link to the body, click it, and remove it
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Clean up the URLs
          window.URL.revokeObjectURL(url);
          window.URL.revokeObjectURL(grayscaleUrl);
        });
      };

      // Set the source of the image to the original URL
      img.src = url;
    })
    .catch((err) => {
      console.error(err, "error occured in downloading image");
      // You can add error handling here, e.g., show a notification
    });
};
