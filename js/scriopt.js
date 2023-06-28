const box_items = document.querySelectorAll(".box-item");
const box_wrapper = document.querySelectorAll(".box_wrapper");
box_items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("draggable");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("draggable");
  });
});
box_wrapper.forEach((box) => {
  box.addEventListener("dragover", () => {
    const draggableElement = document.querySelector(".draggable");
    box.append(draggableElement);
  });
});
