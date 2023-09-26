export default function addImage(ev) {
  ev.preventDefault();
  // trigger the file input
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.addEventListener("change", () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const img = new Image();
      img.src = reader.result;
      document.execCommand("insertImage", false, img.src);
    });
    reader.readAsDataURL(file);
  });
  input.click();
}