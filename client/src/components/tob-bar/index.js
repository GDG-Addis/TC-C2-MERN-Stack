import { Typography, Avatar, Space, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

const TopBar = () => {
  const onLogOut = () => {
    /**
     * TODO: Handle Logout
     */
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
            <Typography.Text>John</Typography.Text>
            <Avatar size="default">J</Avatar>
          </Space>
        </div>
      </Dropdown>
    </div>
  );
};
export default TopBar;
