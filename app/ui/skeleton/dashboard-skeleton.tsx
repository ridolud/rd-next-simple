"use client";

import { Skeleton } from "antd/lib";

export default function DashboardSkeleton() {
  return (
    <div className="container mx-auto py-3">
      <Skeleton.Button size={"large"} active block className="mb-3" />
      <Skeleton active />
    </div>
  );
}
