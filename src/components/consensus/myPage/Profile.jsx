import React from 'react';

export default function Profile({ name, email }) {
  return (
    <div className="flex flex-col text-center font-apple items-center justify-center my-10">
      <div className="text-heading3 pb-10 font-bold ">
        {name}님, 환영합니다.
      </div>
      <div className="flex flex-row items-center justify-center space-x-16 text-body1 w-3/5">
        <div className="flex flex-row items-center w-1/2">
          <div className="mr-10">Email: </div>
          <div className="bg-tuatara-700 bg-opacity-14 w-full rounded-md text-left p-3 py-1">
            {email}
          </div>
        </div>
        <div className="flex flex-row items-center w-1/2">
          <div className="mr-10">Username: </div>
          <div className="bg-tuatara-700 bg-opacity-14 w-full rounded-md text-left p-3 py-1">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
