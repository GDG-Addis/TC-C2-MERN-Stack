import { Typography, Avatar, Space, Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../store/user/action";

const TopBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const onLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div
      style={{
        background: "#fff",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ fontWeight: "bold", fontSize: "23px" }}>
        TC-Book
      </Link>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item onClick={onLogOut}>Logout</Menu.Item>
          </Menu>
        }
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Space direction="horizontal" size="middle">
            <Typography.Text>{user.firstName}</Typography.Text>
            <Avatar size="default">{user.firstName[0]}</Avatar>
          </Space>
        </div>
      </Dropdown>
    </div>
  );
};
export default TopBar;
