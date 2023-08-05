export type MenuTypes = {
  title: string;
  url: string;
  className?: string;
};

const menu: MenuTypes[] = [
  {
    title: "For Companies",
    url: "/register",
  },
  {
    title: "For Individual",
    url: "/register",
  },
  {
    title: "Login",
    url: "/login",
  },
];

export default menu;
