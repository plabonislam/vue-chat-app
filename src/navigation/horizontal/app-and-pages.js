export default [
  {
    title: "Apps & Pages",
    icon: { icon: "tabler-package" },
    children: [
      {
        title: "Chat",
        icon: { icon: "tabler-message" },
        to: "apps-chat",
      },
      {
        title: "Email",
        icon: { icon: "tabler-mail" },
        to: "apps-email",
      },
      {
        title: "Invoice",
        icon: { icon: "tabler-file" },
        children: [
          { title: "List", to: "apps-invoice-list" },
          {
            title: "Preview",
            to: { name: "apps-invoice-preview-id", params: { id: "5036" } },
          },
          {
            title: "Edit",
            to: { name: "apps-invoice-edit-id", params: { id: "5036" } },
          },
          { title: "Add", to: "apps-invoice-add" },
        ],
      },
      {
        title: "User",
        icon: { icon: "tabler-user" },
        children: [
          { title: "List", to: "apps-user-list" },
          {
            title: "View",
            to: { name: "apps-user-view-id", params: { id: 21 } },
          },
        ],
      },
    ],
  },
];
