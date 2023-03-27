import appAndPages from "./app-and-pages";

export default [
  ...appAndPages,
  {
    title: "Home",
    to: { name: "index" },
    icon: { icon: "tabler-smart-home" },
  },
  {
    title: "first page",
    to: { name: "secondpage" },
    icon: { icon: "mdi-vuetify" },
  },
  {
    title: "Second page",
    to: { name: "second-page" },
    icon: { icon: "tabler-file" },
  },
];
