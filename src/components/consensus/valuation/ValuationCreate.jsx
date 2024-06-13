import React from "react";
import { Button } from "react-bootstrap";
import InputStock from "./InputStock";
import InputTemplate from "./InputTemplate";
import { useNavigate } from "react-router-dom";

export default function ValuationCreate() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-2 text-heading2">목표 주가 계산표</div>
      <div className="flex flex-col justify-center items-center gap-8 my-4">
        <div className="flex gap-2">
          <InputStock />
          <InputTemplate />
        </div>
        <Button variant="dark" className="w-32" onClick={() => {}}>
          생성하기
        </Button>
      </div>
    </div>
  );
}
