import { Card, Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (values) => {
    /**
     * TODO: Signup
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
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <Form initialValues={{}} onFinish={handleSubmit}>
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input size="large" placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input size="large" placeholder="Last Name" />
          </Form.Item>

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
                Sign Up
              </Button>
            </div>
          </Form.Item>
          <Form.Item>
            <Typography.Text>
              Already have accout? <Link to="/login">Login</Link>
            </Typography.Text>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default SignUp;
