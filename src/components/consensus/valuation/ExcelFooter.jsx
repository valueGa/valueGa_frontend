import React from 'react';
import { Button } from 'react-bootstrap';

export default function ExcelFooter({ onSave, onTemporarySave }) {
  return (
    <div className="py-4 flex flex-col gap-2">
      <div className="flex justify-center gap-4">
        <Button className=" bg-blue-500 border-none" onClick={onTemporarySave}>
          임시저장
        </Button>
        <Button className=" bg-blue-400 border-none" onClick={onSave}>
          저장
        </Button>
      </div>
      <div className="text-tuatara-300">
        *임시 저장은 최대 3개까지 가능합니다.
      </div>
    </div>
  );
}
