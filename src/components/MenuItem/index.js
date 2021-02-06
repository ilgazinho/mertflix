export const MenuItem = ({ children }) => {
  return (
    <li className="menu-item">
      <a href="#{children}">{children}</a>
    </li>
  );
};
