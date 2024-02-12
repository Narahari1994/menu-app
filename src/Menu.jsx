import MenuItems from "./MenuItems";

const Menu = ({ menuData }) => {
  return (
    <div className="section-center">
      {menuData.map((menu) => {
        return <MenuItems key={menu.id} {...menu} />;
      })}
    </div>
  );
};
export default Menu;
