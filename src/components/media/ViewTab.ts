import { getState } from "../../store/store";

export function ViewTab() {
  return `
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
  `;
}

export function renderViewTab(gridModeTab: HTMLElement, listModeTab: HTMLElement) {
  const { currentViewMode } = getState();
  const isGridMode = currentViewMode === "grid";

  gridModeTab.querySelector("path")!.style.fill = isGridMode ? "#4362D0" : "#d2dae0";
  listModeTab.querySelector("path")!.style.fill = isGridMode ? "#d2dae0" : "#4362D0";
}
