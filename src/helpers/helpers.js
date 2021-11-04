import iconGithub from "../assets/icon-github.svg";
import iconOpen from "../assets/icon-open-issue.svg";
import iconClosed from "../assets/icon-closed-issue.svg";

export const navbarItems = [
  {
    icon: iconGithub,
    title: "All",
    amount: 12,
  },
  {
    icon: iconOpen,
    title: "Open",
    amount: 4,
  },
  {
    icon: iconClosed,
    title: "Closed",
    amount: 8,
  },
];

export const formFields = [
  {
    date: "19-07-2016",
    fields: [
      {
        text: "Page changes",
        star: true,
      },
      {
        text: "Review of last issues",
        star: true,
      },
    ],
  },
  {
    date: "18-07-2016",
    fields: [
      {
        text: "Visual UI Update Review",
        star: false,
      },
      {
        text: "Sidebar changes",
        star: false,
      },
    ],
  },
  {
    date: "15-07-2016",
    fields: [
      {
        text: "Crash update",
        star: false,
      },
      {
        text: "Page visual UI Update Review",
        star: true,
      },
      {
        text: "Sidebar update",
        star: false,
      },
    ],
  },
  {
    date: "14-07-2016",
    fields: [
      {
        text: "Crash issue",
        star: true,
      },
      {
        text: "Visual update & Crash resolve",
        star: true,
      },
    ],
  },
];
