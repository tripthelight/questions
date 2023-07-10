/**
 * FUNCTIONS
 */
function gnbClickEvent() {
  const HEADER = document.querySelector("header");
  if (!HEADER) return;
  const NAV = HEADER.querySelector("nav");
  if (!NAV) return;
  const LIST = NAV.querySelectorAll("button");
  if (!LIST || LIST.length < 1) return;

  const removeActive = (_list) => {
    for (let idx = 0; idx < _list.length; idx++) {
      _list[idx].classList.remove("active");
    }
  };

  const articleEvent = (_index) => {
    const MAIN = document.querySelector("main");
    if (!MAIN) return;
    const ARTICLE = MAIN.querySelectorAll("article");
    if (!ARTICLE || ARTICLE.length < 1) return;

    removeActive(ARTICLE);
    ARTICLE[_index].classList.add("active");
    ARTICLE[_index].scrollTo(0, 0);
  };

  for (let i = 0; i < LIST.length; i++) {
    LIST[i].onclick = (_event) => {
      const EL = _event.target;
      if (EL.classList.contains("active")) return;
      removeActive(LIST);
      EL.classList.add("active");
      articleEvent([...LIST].indexOf(_event.target));
    };
  }
}

function arrowClickEvent() {}

/**
 * DOCUMENT READY COMMON
 */
const comnInit = () => {
  gnbClickEvent();
  arrowClickEvent();
};
/**
 * DOCUMENT READY
 */
const readyComn = () => {
  if (document.readyState === "complete") comnInit();
};
document.onreadystatechange = readyComn;

/**
 * DOCUMENT RESIZE
 */
window.addEventListener("resize", function () {});
