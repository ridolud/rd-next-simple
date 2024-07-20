import CardSkeleton from "../ui/skeleton/card-skeleton";

export default function Loading() {
  return (
    <div className="max-w-[360px] w-full">
      <CardSkeleton />
    </div>
  );
}
