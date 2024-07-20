import { Button } from "antd";

export default function TopBar() {
  return (
    <div className="border-b">
      <div className="container mx-auto flex justify-between items-center py-3">
        <p className="text-2xl font-medium text-blue-500">Simple</p>
        <Button type="link" href="/logout">
          Logout
        </Button>
      </div>
    </div>
  );
}
