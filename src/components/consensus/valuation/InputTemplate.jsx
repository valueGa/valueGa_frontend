import React, { useEffect, useState } from "react";
import InputDataList from "./InputDataList";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function InputTemplate() {
  const [selected, setSelected] = useState("템플릿 선택");

  return (
    <DropdownButton
      className="w-full"
      variant="dark"
      id="dropdown-basic-button"
      title={selected}
    >
      <Dropdown.Item className="w-full" onClick={() => setSelected("DCF")}>
        DCF
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setSelected("PER")}>PER</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setSelected("내 PC에서 가져오기 (.xlsx)")}>
        내 PC에서 가져오기 (.xlsx)
      </Dropdown.Item>
    </DropdownButton>
  );
}
