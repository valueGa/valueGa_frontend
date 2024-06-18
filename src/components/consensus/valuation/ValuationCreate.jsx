import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InputStock from "./InputStock";
import InputTemplate from "./InputTemplate";
import { useNavigate } from "react-router-dom";
import { URI_PATH } from "../../../routers/main-router";

export default function ValuationCreate() {
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("템플릿 선택");

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-2 text-heading2">목표 주가 계산표</div>
      <div className="flex flex-col justify-center items-center gap-8 my-4">
        <div className="flex gap-2">
          <InputStock value={selectedStock} setValue={setSelectedStock} />
          <InputTemplate
            value={selectedTemplate}
            setValue={setSelectedTemplate}
          />
        </div>
        <Button
          variant="dark"
          className="w-32"
          onClick={() => {
            console.log(
              "생성하기",
              selectedStock.name,
              selectedStock.id,
              selectedTemplate
            );
            navigate(
              `${URI_PATH.valuationCreatePage}/?id=${selectedStock.id}&template=${selectedTemplate}`
            );
          }}
        >
          생성하기
        </Button>
      </div>
    </div>
  );
}
