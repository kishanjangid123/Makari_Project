import React, { useState } from "react";
import { Col, Row } from "antd";
import { useSearchParams } from "react-router-dom";

import CustomButton from "../components/CustomButton";
import WorkspaceCard from "../components/WorkspaceCard";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, updateUser } from "../Redux/reportSlice";

const Reports = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.report.user);

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

  console.log(user)

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

        <Col span={8}>
          <WorkspaceCard
            title="User Details"
            description={`User: ${user.name}, Role: ${user.role}, Email: ${user.email}`}
            buttonText="Show user Details"
            onButtonClick={() => user.name === "Kishan"
              ? dispatch(updateUser())
              : dispatch(resetUser())}
            type="primary"
          />
        </Col>

      </Row>
    </>
  );
};

export default Reports;