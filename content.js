function createElementPage() {
  id = document.getElementsByClassName(
    "style-scope ytd-two-column-browse-results-renderer"
  );
  id[0].innerHTML = "<h1>Không có nội dung</h1>";
}

window.onload = () => {
  console.log("page is fully loaded");
  createElementPage();
};
