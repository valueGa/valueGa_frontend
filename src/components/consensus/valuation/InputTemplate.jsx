import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function InputTemplate({ value, setValue }) {
  return (
    <DropdownButton
      className="w-full"
      variant="dark"
      id="dropdown-basic-button"
      title={value}
    >
      <Dropdown.Item className="w-full" onClick={() => setValue(0)}>
        DCF
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setValue(1)}>PER</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setValue(2)}>
        내 PC에서 가져오기 (.xlsx)
      </Dropdown.Item>
    </DropdownButton>
  );
}
