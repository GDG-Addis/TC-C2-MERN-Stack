import { Card, Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (values) => {
    /**
     * TODO: Login
     */
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: "500px" }}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Form initialValues={{}} onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "200px" }}
              >
                Login
              </Button>
            </div>
          </Form.Item>
          <Form.Item>
            <Typography.Text>
              Don't have accout? <Link to="/sign-up">Sign Up</Link>
            </Typography.Text>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
