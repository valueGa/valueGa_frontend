import React from 'react';
import editIcon from '~/assets/icons/edit.svg';
import deleteIcon from '~/assets/icons/delete.svg';

export default function Popup({ onDelete, valuationId }) {
  return (
    <div className="absolute bottom-full mb-2 right-2 text-tuatara-50 w-32 bg-tuatara-700 rounded-lg shadow-lg p-2">
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row justify-between items-center p-2 hover:bg-tuatara-800">
          <button className="text-left rounded">수정</button>
          <img src={editIcon} className="w-6 h-6" />
        </div>
        <div className="flex flex-row justify-between items-center p-2 hover:bg-tuatara-800">
          {/* <button className="text-left rounded" onClick={handleClick()}> */}
          <button
            className="text-left rounded"
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              console.log(e);
              onDelete(valuationId);
            }}
          >
            삭제
          </button>
          <img src={deleteIcon} className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
