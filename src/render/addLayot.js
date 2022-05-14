import { getNews } from "../queries/news/getNews";
export const addLayot = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.querySelector("html").classList.add("dark", "dark1", "dark2", "dark3", "dark4", "dark5", "dark6", "dark7");
  } else {
    document.querySelector("html").classList.remove("dark", "dark1", "dark2", "dark3", "dark4", "dark5", "dark6", "dark7");
  }

  const root = document.querySelector("#root");

  const header = document.createElement("header");
  header.classList.add("header");

  const headerText = document.createElement("h1");
  headerText.classList.add("header_text");
  headerText.textContent = "FOX NEWS";

  headerText.addEventListener("click", () => {
    getNews();
  })

  const headerInfo = document.createElement("ul");
  headerInfo.classList.add("header_info");

  const switchTheme = document.createElement("input");
  switchTheme.type = "checkbox";
  switchTheme.classList.add("checkbox");

  const switchWrap = document.createElement("label");
  switchWrap.textContent = "Сменить оформление";
  switchWrap.classList.add("switch_wrap");

  switchTheme.addEventListener("change", () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
    }
    switchClass();
  });

  function switchClass () {
    const htmlTheme = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      htmlTheme.classList.add("dark", "dark1", "dark2", "dark3", "dark4", "dark5", "dark6", "dark7")
    } else {
      htmlTheme.classList.remove("dark", "dark1", "dark2", "dark3", "dark4", "dark5", "dark6", "dark7");
    }
  }

  const grandList  = document.createElement("li");
  grandList.textContent = "Главная страница";

  grandList.addEventListener("click", () => {
    getNews();
  })

  const headerMenu = document.createElement("li");
  headerMenu.textContent = "Меню";

  const center = document.createElement("main");
  center.classList.add("center");

  const newsContainer = document.createElement("div");
  newsContainer.classList.add("news_container");

  const newsWrap = document.createElement("ul");
  newsWrap.classList.add("news_wrap");

  const rightBar = document.createElement("aside");
  rightBar.classList.add("right_bar");

  const categoriesWrapper = document.createElement("h1");
  categoriesWrapper.classList.add("categories_wrapper");
  categoriesWrapper.textContent = "Список категорий";

  const categoriesWrap = document.createElement("ul");
  categoriesWrap.classList.add("categories_wrap");

  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerInfo = document.createElement("ul");
  footerInfo.classList.add("footer_info");

  const aboutUs = document.createElement("li");
  aboutUs.textContent = "О нас";

  const contactInfo = document.createElement("li");
  contactInfo.textContent = "Контактная информация";

  const ourSponsors = document.createElement("li");
  ourSponsors.textContent = "Наши спонсоры";

  root.append(header, center, footer);
  header.append(headerText, headerInfo, switchWrap);
  switchWrap.append(switchTheme);
  headerInfo.append(grandList, headerMenu);
  center.append(newsContainer, rightBar);
  newsContainer.append(newsWrap);
  rightBar.append(categoriesWrapper);
  categoriesWrapper.after(categoriesWrap);
  footer.append(footerInfo);
  footerInfo.append(aboutUs, contactInfo, ourSponsors);
}
