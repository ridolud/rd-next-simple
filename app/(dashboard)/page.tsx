import { Suspense } from "react";
import TableUniversities from "../ui/university/table-universities";
import { Skeleton } from "antd";
import SearchUniversity from "../ui/university/search-university";
import { UniversitySearchOptions } from "../lib/types";
import TableSkeleton from "../ui/skeleton/table-skeleton";

export default function HomePage({
  searchParams,
}: {
  searchParams: UniversitySearchOptions;
}) {
  return (
    <>
      <h1 className="text-xl font-medium mb-3">Universities</h1>
      <div className="mb-3">
        <SearchUniversity />
      </div>
      <Suspense
        key={`${searchParams.country}_${searchParams.name}`}
        fallback={<TableSkeleton />}
      >
        <TableUniversities options={searchParams} />
      </Suspense>
    </>
  );
}
