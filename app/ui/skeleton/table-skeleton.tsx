"use client";

import { Skeleton } from "antd/lib";

export default function TableSkeleton() {
  return (
    <>
      <Skeleton.Button size={"large"} active block className="mb-3" />
      <Skeleton.Button size={"large"} active block className="mb-3" />
      <Skeleton.Button size={"large"} active block className="mb-3" />
    </>
  );
}
