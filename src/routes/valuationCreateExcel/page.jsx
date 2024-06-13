import React from "react";
import { useSearchParams } from "react-router-dom";

export default function ValuationCreateExcel() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("id"), searchParams.get("template"));

  return <div>ValuationCreateExcel</div>;
}
