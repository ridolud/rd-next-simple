"use client";

import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import { Button, Input } from "antd/lib";
import Password from "antd/lib/input/Password";

type FildType = {
  username: string;
  password: string;
};

export default function FormLogin({ onSuccess }: { onSuccess: () => void }) {
  return (
    <Form<FildType>
      layout="vertical"
      style={{ minWidth: 320 }}
      onFinish={onSuccess}
    >
      <FormItem
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input username" }]}
      >
        <Input placeholder="username" />
      </FormItem>
      <FormItem
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input username" }]}
      >
        <Password placeholder="password" />
      </FormItem>
      <Button htmlType="submit" type="primary" size="large" block>
        Login
      </Button>
    </Form>
  );
}
