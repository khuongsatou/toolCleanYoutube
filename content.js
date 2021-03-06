function createElementPage() {
  try {
    // Hide logo
    logo_id = document.getElementById("logo");
    if (Boolean(logo_id)) logo_id.innerHTML = "<h1></h1>";

    id = document.getElementsByClassName(
      "style-scope ytd-two-column-browse-results-renderer"
    );
    if (Boolean(id)) {
      id_tab_page = document.getElementsByClassName(
        "style-scope ytd-c4-tabbed-header-renderer iron-selected"
      );

      if (id_tab_page.length > 0) {
        // Không làm gì nếu nó content của channel
      } else if (id.length > 0) {
        id[0].innerHTML = "<h1>Không có nội dung</h1>";
      }
    }

    id2 = document.getElementsByClassName("style-scope ytd-rich-grid-renderer");
    if (Boolean(id2)) {
      if (id2.length > 0) {
        id2[0].innerHTML = "<h1>Không có nội dung</h1>";
      }
    }

    id_contents = document.getElementById("contents");
    if (Boolean(id_contents)) {
      id_tab_page = document.getElementsByClassName(
        "style-scope ytd-c4-tabbed-header-renderer iron-selected"
      );

      if (id_tab_page.length > 0) {
        // Không làm gì nếu nó content của channel
      } else {
        id_contents.innerHTML = "<h1>Không có nội dung</h1>";
      }
    }

    id_content_zing = document.getElementById("section-latest");
    if (Boolean(id_content_zing)) {
      id_content_zing.innerHTML = "<h1>Không có nội dung</h1>";
    }

    id_fb_video = document.querySelector('[aria-label="Watch"]');
    if (Boolean(id_fb_video)) {
      id_fb_video.style.visibility = "hidden";
    }

    id_fb_group = document.querySelector('[aria-label="Nhóm"]');

    if (Boolean(id_fb_group)) {
      id_fb_group.style.visibility = "hidden";
    }
  } catch (error) {}
}

window.onload = () => {
  console.log("page is fully loaded");
  createElementPage();
};
