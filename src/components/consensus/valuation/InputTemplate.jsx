import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton, DropdownMenu } from 'react-bootstrap';
import { getCreateTemplate } from '~/apis/template';

export default function InputTemplate({ value, setValue }) {
  const [templateName, setTemplateName] = useState(value);
  const [templateList, setTemplateList] = useState([]);

  useEffect(() => {
    getCreateTemplate().then((result) => {
      setTemplateList(result.data);
    });
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-basic"
        className="min-w-40 flex justify-between items-center"
      >
        {templateName}
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="max-h-40 overflow-y-auto spreadsheet-container"
        data-bs-theme="dark"
      >
        {templateList.map((template) => (
          <Dropdown.Item
            key={template.template_id}
            onClick={() => {
              setTemplateName(template.template_name);
              setValue(template.template_id);
            }}
          >
            {template.template_name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

/*

    <DropdownButton
      data-bs-theme="dark"
      variant="dark"
      id="dropdown-basic-button"
      title={value}
      className="w-full"
    >
      <Dropdown.Menu>
        {templateList.map((template) => (
          <Dropdown.Item
            key={template.template_id}
            className="w-full "
            onClick={() => setValue(template.template_id)}
          >
            {template.template_name}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => setValue(8)}>
          내 PC에서 가져오기 (.xlsx)
        </Dropdown.Item>
      </Dropdown.Menu>
    </DropdownButton>
*/
