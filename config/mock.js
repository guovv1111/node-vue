const menu = {
  msg: "成功",
  code: "E1",
  status: 200,
  result: 1,
  menus: [
    {
      name: "关于",
      type: "LIST",
      icon: "build",
      subMenus: [
        {
          permission: true,
          name: "个人信息",
          type: "SINGLE",
          path: "/about",
          icon: "image",
        },
      ],
    },
    {
      name: "记录",
      type: "LIST",
      icon: "build",
      subMenus: [
        {
          permission: true,
          name: "照片",
          type: "SINGLE",
          path: "/record",
          icon: "image",
        },
      ],
    },
    {
      name: "通用",
      type: "LIST",
      icon: "build",
      subMenus: [
        {
          permission: true,
          name: "date",
          type: "SINGLE",
          path: "/common/date",
          icon: "image",
        },
      ],
    },
  ],
};

module.exports = menu;
