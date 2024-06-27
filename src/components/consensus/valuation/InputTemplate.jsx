import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { getCreateTemplate } from '~/apis/template';

export default function InputTemplate({ setValue }) {
  const [templateName, setTemplateName] = useState('템플릿 선택');
  const [templateList, setTemplateList] = useState([]);
  const accessToken = localStorage.getItem('valueGa_AccessToken');

  useEffect(() => {
    if (accessToken) {
      getCreateTemplate().then((result) => {
        setTemplateList(result.data);
      });
    }
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-basic"
        className="min-w-40 h-full flex justify-between items-center"
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
