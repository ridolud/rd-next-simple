import { searchUniversities } from "@/app/lib/data";
import { UniversitySearchOptions } from "@/app/lib/types";
import { Table } from "antd";

export default async function TableUniversities({
  options,
}: {
  options: UniversitySearchOptions;
}) {
  const universities = await searchUniversities(options);

  return (
    <Table
      dataSource={universities}
      rowKey={"name"}
      bordered
      columns={[
        {
          title: "Code",
          dataIndex: "alpha_two_code",
          width: "10%",
          key: "alpha_two_code",
        },
        {
          title: "Country",
          dataIndex: "country",
          width: "10%",
          key: "country",
        },
        { title: "Name", dataIndex: "name", key: "name" },
      ]}
    />
  );
}
