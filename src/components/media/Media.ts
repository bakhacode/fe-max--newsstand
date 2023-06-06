import { actions } from "../../actions/actions";
// import { loadNextPress, stopInterval, startInterval, setArt } from "../../main";
// import { getState } from "../../store/store";

import { State, getState, subscribe } from "../../store/store";

export const Media = () => {
  const media = document.querySelector(".media");
  const state = getState();

  render();

  const prevButton = document.querySelector(".prev-button") as HTMLElement;
  const nextButton = document.querySelector(".next-button") as HTMLElement;
  const gridModeTab = document.querySelector(".view-tab__grid") as HTMLElement;
  const listModeTab = document.querySelector(".view-tab__list") as HTMLElement;
  const grid = document.querySelector(".grid-view") as HTMLElement;
  const list = document.querySelector(".list-view") as HTMLElement;

  renderArrow(state);
  renderViewTab(state);
  setEvent();

  function render() {
    media!.innerHTML = `
    <div class="total-media">
      <div class="total-media__tab-bar">
        <div class="press-tab">
          <div class="press-tab__total">전체 언론사</div>
          <div class="press-tab__my-subs">내가 구독한 언론사</div>
        </div>
        <div class="view-tab">
          <svg
            class="view-tab__list"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2V16H2V2H16ZM17.1 0H0.9C0.4 0 0 0.4 0 0.9V17.1C0 17.5 0.4 18 0.9 18H17.1C17.5 18 18 17.5 18 17.1V0.9C18 0.4 17.5 0 17.1 0ZM8 4H14V6H8V4ZM8 8H14V10H8V8ZM8 12H14V14H8V12ZM4 4H6V6H4V4ZM4 8H6V10H4V8ZM4 12H6V14H4V12Z"
              fill="currentColor"
            />
          </svg>
          <svg
            class="view-tab__grid"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8V0H8V8H0ZM0 18V10H8V18H0ZM10 8V0H18V8H10ZM10 18V10H18V18H10ZM2 6H6V2H2V6ZM12 6H16V2H12V6ZM12 16H16V12H12V16ZM2 16H6V12H2V16Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <img class="prev-button" src="/public/images/prev-button.svg"></img>
      <img class="next-button" src="/public/images/next-button.svg"></img>
      <div class="media">
        <div class="grid-view"></div>
        <div class="list-view"></div>
      </div>
    </div>
    `;
  }

  // const render = () => {
  //   const { currentPage, currentLastPage, currentViewMode } = getState();

  //   renderViewTab(currentViewMode);

  //   if (currentViewMode === "grid") {
  //     prevButton.style.display = currentPage === 1 ? "none" : "block";
  //     nextButton.style.display = currentPage < currentLastPage ? "block" : "none";
  //     return;
  //   }
  //   prevButton.style.display = "block";
  //   nextButton.style.display = "block";
  // };

  
  // subscribe((state:State) => renderViewTab(state))

  function renderArrow(state: State) {
    const { currentPage, currentLastPage, currentViewMode } = state;
    console.log(currentPage);
    if (currentViewMode === "grid") {
      prevButton.style.display = currentPage === 1 ? "none" : "block";
      nextButton.style.display = currentPage < currentLastPage ? "block" : "none";
      return;
    }
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  }

  subscribe('currentPage',(state:State) => renderArrow(state))

  function renderViewTab(state: State) {
    const { currentViewMode } = state;
    const isGridMode = currentViewMode === "grid";

    grid.style.display = isGridMode ? "grid" : "none";
    gridModeTab.querySelector("path")!.style.fill = isGridMode ? "#4362D0" : "#d2dae0";

    list.style.display = isGridMode ? "none" : "flex";
    listModeTab.querySelector("path")!.style.fill = isGridMode ? "#d2dae0" : "#4362D0";
  }

  function setEvent() {
    prevButton.addEventListener("click", handleClickPrev);
    nextButton.addEventListener("click", handleClickNext);
    gridModeTab.addEventListener("click", () => {
      actions.switchGridMode();
    });
    listModeTab.addEventListener("click", () => {
      actions.switchListMode();
      // setArt();
    });
  }

  function handleClickPrev() {
    const { currentViewMode } = getState();
    actions.goPrevPage();
    currentViewMode === "grid" ? clickPrevGrid() : clickPrevList();
  }
  function clickPrevGrid() {
    console.log("비어있어서 그리드인거 알려줌");
  }
  function clickPrevList() {
    // loadNextPress();
  }

  function handleClickNext() {
    // stopInterval();
    const { currentViewMode } = getState();
    actions.goNextPage();
    currentViewMode === "grid" ? clickNextGrid() : clickNextList();
    // startInterval();
  }
  function clickNextGrid() {
    console.log("비어있어서 그리드인거 알려줌");
  }

  function clickNextList() {
    // loadNextPress();
    // renderFieldTab();
  }
};
