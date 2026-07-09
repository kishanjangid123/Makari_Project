import React, { useState } from "react";
import { Col, Row } from "antd";
import { useSearchParams } from "react-router-dom";

import CustomButton from "../components/CustomButton";
import WorkspaceCard from "../components/WorkspaceCard";
import InputField from "../components/InputField";

const Reports = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const handleSearchChange = (e: any) => {
    const value = e.target.value;
    setSearch(value);
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  }


  React.useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams])

  console.log(search)

  return (
    <>
      <h2>Reports</h2>

      <InputField
        label="Search Report"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />

      <Row>
        <Col span={8}>
          <WorkspaceCard
            title="Sales Report"
            description="Monthly sales report"
            buttonText="View"
            onButtonClick={() => alert("Sales Report Clicked")}
            type="primary"
          />
        </Col>

        <Col span={8}>
          <WorkspaceCard
            title="Employee Report"
            description="Employee performance"
            buttonText="Open"
            onButtonClick={() => alert("Employee Report Clicked")}
            type="primary"
          />
        </Col>
      </Row>
    </>
  );
};

export default Reports;