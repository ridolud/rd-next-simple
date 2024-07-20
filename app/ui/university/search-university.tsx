"use client";

import { UniversitySearchOptions } from "@/app/lib/types";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select, Space } from "antd";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchUniversity() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const options: UniversitySearchOptions = {
    country: searchParams.get("country") ?? "indonesia",
    name: searchParams.get("name") ?? "",
  };

  const countriesOptions = [
    { value: "indonesia", label: "Indonesia" },
    { value: "canada", label: "Canada" },
    { value: "brazil", label: "Brazil" },
    { value: "united kingdom", label: "United Kingdom" },
    { value: "france", label: "France" },
  ];

  const handleUpdateParams = useDebouncedCallback(
    (searchOptions: UniversitySearchOptions) => {
      const params = new URLSearchParams({
        ...options,
        ...searchOptions,
      });

      replace(`${pathname}?${params.toString()}`);
    },
    400
  );

  return (
    <Space.Compact>
      <Select
        placeholder="Select Country"
        options={countriesOptions}
        defaultValue={options.country}
        onChange={(e) => handleUpdateParams({ country: e })}
      ></Select>
      <Input
        className="flex-none"
        suffix={<SearchOutlined />}
        defaultValue={options.name}
        placeholder="Search Name .."
        onChange={(e) => handleUpdateParams({ name: e.target.value })}
      />
    </Space.Compact>
  );
}
