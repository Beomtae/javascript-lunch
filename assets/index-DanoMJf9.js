var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class Component {
  constructor($target, props) {
    __publicField(this, "$target");
    __publicField(this, "state");
    this.$target = $target;
    this.props = props;
    this.render();
  }
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {
  }
}
const categoryValue = {
  korean: "한식",
  chinese: "중식",
  japanese: "일식",
  western: "양식",
  asian: "아시안",
  etc: "기타"
};
const label = {
  category: "카테고리",
  name: "이름",
  distance: "거리(도보 이동 시간)",
  description: "설명",
  link: "참고 링크"
};
const RestaurantData = [
  {
    name: "피양콩할마니",
    distance: 10,
    description: `평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는
                    곳으로,
                    ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표
                    메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.`,
    imgSrc: "./category-korean.png",
    imgAlt: "한식",
    link: "https://map.naver.com/p/entry/place/12017005?lng=127.05525&lat=37.5041&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh",
    like: false
  },
  {
    name: "친친",
    distance: 5,
    description: `Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다.`,
    imgSrc: "./category-chinese.png",
    imgAlt: "중식",
    link: "https://map.naver.com/p/search/%EC%B9%9C%EC%B9%9C/place/18446134?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp",
    like: false
  },
  {
    name: "잇쇼우",
    distance: 10,
    description: `잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에 최선을
                    다하는 잇쇼우는
                    고객 한분 한분께 최선을 다하겠습니다.`,
    imgSrc: "./category-japanese.png",
    imgAlt: "일식",
    link: "https://map.naver.com/p/search/%EC%9E%87%EC%87%BC%EC%9A%B0/place/106592706?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp",
    like: false
  },
  {
    name: "이태리키친",
    distance: 20,
    description: `늘 변화를 추구하는 이태리키친입니다.`,
    imgSrc: "./category-western.png",
    imgAlt: "양식",
    link: "hhttps://map.naver.com/p/search/%EC%9D%B4%ED%83%9C%EB%A6%AC%ED%82%A4%EC%B9%9C/place/1562452891?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp",
    like: false
  },
  {
    name: "호아빈 삼성점",
    distance: 15,
    description: `푸짐한 양에 국물이 일품인 쌀국수`,
    imgSrc: "./category-asian.png",
    imgAlt: "아시안",
    link: "https://map.naver.com/p/search/%ED%98%B8%EC%95%84%EB%B9%88/place/35386954?c=13.00,0,0,0,dh&placePath=%3Fentry%253Dbmp",
    like: false
  },
  {
    name: "도스타코스 선릉점",
    distance: 5,
    description: `멕시칸 캐주얼 그릴`,
    imgSrc: "./category-etc.png",
    imgAlt: "기타",
    link: "https://map.naver.com/p/search/%EB%8F%84%EC%8A%A4%ED%83%80%EC%BD%94%EC%8A%A4/place/1905428903?c=13.00,0,0,0,dh&placePath=%3Fentry%253Dbmp",
    like: false
  }
];
function initializeRestaurantData() {
  const storedData = localStorage.getItem("restaurantData");
  localStorage.setItem("selectedCategory", "전체");
  localStorage.setItem("sortType", "name");
  if (!storedData) {
    localStorage.setItem("restaurantData", JSON.stringify(RestaurantData));
  }
}
function getStoredRestaurantData() {
  const data = localStorage.getItem("restaurantData");
  return data ? JSON.parse(data) : [];
}
function setStoredRestaurantData(data) {
  localStorage.setItem("restaurantData", JSON.stringify(data));
}
const addData = () => {
  const formElement = document.getElementById("input-form");
  const formData = new FormData(formElement);
  const submittedData = Object.fromEntries(
    formData
  );
  const information = {
    name: submittedData.name,
    distance: Number(submittedData.distance),
    description: submittedData.description,
    imgSrc: `./category-${submittedData.category}.png`,
    imgAlt: categoryValue[submittedData.category] || "카테고리 없음",
    link: submittedData.link,
    like: false
  };
  const currentData = getStoredRestaurantData();
  currentData.push(information);
  setStoredRestaurantData(currentData);
  return information;
};
class Dropdown extends Component {
  template() {
    return `
          <label for="${this.$target.getAttribute("id")}" text-caption">${label[this.$target.getAttribute("id")]}</label>
    <select name="${this.$target.getAttribute("id")}" class="option" required>
                  <option value="">선택해 주세요</option>
            </select>
            `;
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
    this.updateOptions();
  }
  updateOptions() {
    const optionValue = this.props;
    for (const [key, value] of Object.entries(optionValue)) {
      this.$target.querySelector(".option").innerHTML += `<option value="${key}">${value}</option>
`;
    }
  }
}
class Input extends Component {
  template() {
    const { required, type } = this.props;
    return `
    <label for="${this.$target.getAttribute("id")} text-caption">${label[this.$target.getAttribute("id")]}</label>
    <input type="${type}" name="${this.$target.getAttribute("id")}" id="${this.$target.getAttribute("id")}" ${required}>

            `;
  }
}
const distanceValue = {
  5: "5분 내",
  10: "10분 내",
  15: "15분 내",
  20: "20분 내",
  30: "30분 내"
};
const createModalInputs = () => {
  new Dropdown(document.getElementById("category"), categoryValue);
  new Input(document.getElementById("name"), {
    required: "required",
    type: "text"
  });
  new Dropdown(document.getElementById("distance"), distanceValue);
  new Input(document.getElementById("description"), {
    required: "",
    type: "text"
  });
  new Input(document.getElementById("link"), { required: "", type: "url" });
};
class Modal extends Component {
  constructor($target, props) {
    super($target, props);
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  handleModalClose() {
    var _a;
    (_a = document.querySelector(".modal")) == null ? void 0 : _a.classList.toggle("modal--open");
  }
}
class ModalAdd extends Modal {
  template() {
    return `
        <div class="modal-backdrop"></div>
        <div class="modal-container">
          <h2 class="modal-title text-title">새로운 음식점</h2>
          <form id='input-form'>
            <div id="category" class="form-item form-item--required"></div>
            <div id="name" class="form-item form-item--required"></div>
            <div id="distance" class="form-item form-item--required"></div>
            <div id="description" class="form-item"></div>
            <div id="link" class="form-item"></div>
            <div class="button-container">
              <button id="close_button" type="button" class="button button--secondary text-caption">취소하기</button>
              <button class="button button--primary text-caption">추가하기</button>
            </div>
          </form>
        </div>
      `;
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
    createModalInputs();
  }
  setEvent() {
    var _a, _b;
    (_a = this.$target.querySelector(".modal-backdrop")) == null ? void 0 : _a.addEventListener("click", () => this.handleModalClose());
    (_b = this.$target.querySelector("#close_button")) == null ? void 0 : _b.addEventListener("click", () => this.handleModalClose());
    this.submitForm();
  }
  submitForm() {
    var _a;
    (_a = this.$target.querySelector("#input-form")) == null ? void 0 : _a.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleModalClose();
      const newData = addData();
      document.dispatchEvent(
        new CustomEvent("restaurantUpdated", { detail: newData })
      );
    });
  }
}
class Header extends Component {
  constructor($target) {
    super($target);
  }
  template() {
    return `
    <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
      <button type="button" class="gnb__button" aria-label="음식점 추가">
        <img src="./add-button.png" alt="음식점 추가" />
      </button>`;
  }
  setEvent() {
    this.$target.querySelector(".gnb__button").addEventListener("click", () => {
      const modalContainer = document.querySelector(".modal");
      new ModalAdd(modalContainer, { mode: "add" });
      modalContainer.classList.toggle("modal--open");
    });
  }
}
const filterRestaurants = (category, sort) => {
  let filteredData = getStoredRestaurantData();
  if (category !== "전체") {
    filteredData = filteredData.filter(
      (restaurant) => restaurant.imgAlt === category
    );
  }
  if (sort === "name") {
    filteredData.sort((a, b) => a.name.localeCompare(b.name, "ko-KR"));
  } else {
    filteredData.sort((a, b) => a.distance - b.distance);
  }
  localStorage.setItem("selectedCategory", category);
  localStorage.setItem("sortType", sort);
  createRestaurant(filteredData);
  return filteredData;
};
class ModalDetail extends Modal {
  template() {
    const { name, distance, description, imgSrc, imgAlt, like, link } = this.props.data;
    const starImg = like ? "/filledStar.png" : "/unFilledStar.png";
    return `
        <div class="modal-backdrop"></div>
        <div class="modal-container">
          <div class="modal-wrapper">
            <div class="restaurant__category">
                <img src=${imgSrc} alt=${imgAlt} class="category-icon"/>
            </div>
            <img src="${starImg}" id="modal__star" class="restaurant__like"/>
          </div>
          <div class="restaurant__info">
            <h3 class="restaurant__name text-subtitle">${name}</h3>
            <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 내</span>
            <p class="restaurant__description text-body">${description}</p>
            <a href="${link}" class="restaurant__link text-body">${name} 홈페이지</a>
          </div>
          <div class="button-container">
            <button id="delete_button" type="button" class="button button--secondary text-caption">삭제하기</button>
            <button id="close_button" class="button button--primary text-caption">닫기</button>
          </div>
        </div>
      `;
  }
  setEvent() {
    var _a, _b, _c, _d;
    (_a = this.$target.querySelector(".modal-backdrop")) == null ? void 0 : _a.addEventListener("click", () => this.handleModalClose());
    (_b = this.$target.querySelector("#close_button")) == null ? void 0 : _b.addEventListener("click", () => this.handleModalClose());
    (_c = this.$target.querySelector("#delete_button")) == null ? void 0 : _c.addEventListener("click", () => this.handleDeleteRestaurant());
    (_d = this.$target.querySelector("#modal__star")) == null ? void 0 : _d.addEventListener("click", () => this.handleLikeToggle());
  }
  handleLikeToggle() {
    this.props.data.like = !this.props.data.like;
    updateStoredData();
    updateLikeUI();
  }
  updateStoredData() {
    let storedData = getStoredRestaurantData();
    storedData = storedData.map(
      (restaurant) => restaurant.name === this.props.data.name ? { ...restaurant, like: this.props.data.like } : restaurant
    );
    setStoredRestaurantData(storedData);
  }
  updateLikeUI() {
    const starImg = this.props.data.like ? "/filledStar.png" : "/unFilledStar.png";
    this.$target.querySelector("#modal__star").src = starImg;
    document.querySelectorAll(".restaurant").forEach((item) => {
      var _a;
      if (((_a = item.querySelector(".restaurant__name")) == null ? void 0 : _a.innerText) === this.props.data.name) {
        item.querySelector(".list__star").src = starImg;
      }
    });
  }
  handleDeleteRestaurant() {
    let updatedData = getStoredRestaurantData().filter(
      (restaurant) => restaurant.name !== this.props.data.name
    );
    setStoredRestaurantData(updatedData);
    const currentCategory = localStorage.getItem("selectedCategory") || "전체";
    const currentSort = localStorage.getItem("sortType") || "name";
    filterRestaurants(currentCategory, currentSort);
    this.handleModalClose();
  }
}
class Restaurant extends Component {
  constructor($target, props) {
    super($target, props);
  }
  template() {
    const { name, distance, description, imgSrc, imgAlt, like } = this.props;
    const starImg = this.props.like ? "/filledStar.png" : "/unFilledStar.png";
    return (
      /*html*/
      ` 
      <div class="restaurant__category">
          <img src=${imgSrc} alt=${imgAlt} class="category-icon"/>
      </div>
      <div class="restaurant__info">
          <h3 class="restaurant__name text-subtitle">${name}</h3>
          <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 내</span>
          <p class="restaurant__description text-body">${description}</p>
      </div>
      <img src="${starImg}" class="restaurant__like list__star"/>
    `
    );
  }
  setEvent() {
    this.$target.querySelector(".restaurant__info").addEventListener("click", () => {
      this.handleDetailModal();
    });
    this.$target.querySelector(".list__star").addEventListener("click", () => {
      this.handleLike();
    });
  }
  handleLike() {
    this.props.like = !this.props.like;
    let storedData = getStoredRestaurantData();
    storedData = storedData.map(
      (restaurant) => restaurant.name === this.props.name ? { ...restaurant, like: this.props.like } : restaurant
    );
    setStoredRestaurantData(storedData);
    const starImg = this.props.like ? "/filledStar.png" : "/unFilledStar.png";
    this.$target.querySelector(".list__star").src = starImg;
  }
  handleDetailModal() {
    const modalContainer = document.querySelector(".modal");
    modalContainer.classList.toggle("modal--open");
    new ModalDetail(modalContainer, {
      mode: "detail",
      data: this.props
    });
  }
}
const createList = () => {
  const restaurantItem = document.createElement("li");
  restaurantItem.classList.add("restaurant");
  document.querySelector(".restaurant-list").appendChild(restaurantItem);
  return restaurantItem;
};
const createRestaurant = (filteredData) => {
  const restaurants = filteredData || getStoredRestaurantData();
  document.querySelector(".restaurant-list").innerHTML = "";
  restaurants.forEach((restaurant) => {
    const restaurantItem = createList();
    new Restaurant(restaurantItem, restaurant);
  });
};
const updateRestaurant = (newData) => {
  const restaurantItem = createList();
  new Restaurant(restaurantItem, newData);
};
class Tab extends Component {
  constructor($target) {
    super($target);
  }
  template() {
    return (
      /*html*/
      `
    <div class="all">모든 음식점</div>
    <div class="favorite">자주 가는 음식점</div>
        `
    );
  }
  setEvent() {
    const allTab = this.$target.querySelector(".all");
    allTab.classList.add("selected");
    const favoriteTab = this.$target.querySelector(".favorite");
    allTab.addEventListener("click", () => {
      this.filterToggle();
      this.renderAllRestaurants();
      allTab.classList.add("selected");
      favoriteTab.classList.remove("selected");
    });
    favoriteTab.addEventListener("click", () => {
      this.filterToggle();
      this.renderFavoriteRestaurants();
      allTab.classList.remove("selected");
      favoriteTab.classList.add("selected");
    });
  }
  filterToggle() {
    var _a, _b, _c;
    if ((_a = document.querySelector(".restaurant-filter-container")) == null ? void 0 : _a.classList.contains("filter-toggle")) {
      (_b = document.querySelector(".restaurant-filter-container")) == null ? void 0 : _b.classList.remove("filter-toggle");
    } else {
      (_c = document.querySelector(".restaurant-filter-container")) == null ? void 0 : _c.classList.add("filter-toggle");
    }
  }
  renderAllRestaurants() {
    filterRestaurants(
      localStorage.getItem("selectedCategory"),
      localStorage.getItem("sortType")
    );
  }
  renderFavoriteRestaurants() {
    let savedRestaurants = getStoredRestaurantData();
    savedRestaurants = savedRestaurants.filter(
      (restaurant) => restaurant.like === true
    );
    createRestaurant(savedRestaurants);
  }
}
class App extends Component {
  constructor($target) {
    super($target);
    document.addEventListener(
      "restaurantUpdated",
      (event) => updateRestaurant(event.detail)
    );
  }
  render() {
    new Header(document.querySelector(".gnb"));
    new Tab(document.querySelector(".tab-container"));
    filterRestaurants(
      localStorage.getItem("selectedCategory"),
      localStorage.getItem("sortType")
    );
    this.setEvent();
  }
  setEvent() {
    const filtersContainer = document.querySelector(
      ".restaurant-filter-container"
    );
    filtersContainer.addEventListener("change", (event) => {
      const target = event.target;
      if (target.id === "category-filter") {
        const currentSortType = localStorage.getItem("sortType");
        filterRestaurants(target.value, currentSortType);
      } else if (target.id === "sorting-filter") {
        const currentCategory = localStorage.getItem("selectedCategory");
        filterRestaurants(currentCategory, target.value);
      }
    });
  }
}
initializeRestaurantData();
new App(document.getElementById("app"));
