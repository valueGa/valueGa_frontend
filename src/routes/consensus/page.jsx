import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '~/components/NavBar';

export default function ConsensusPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-tuatara-800 text-tuatara-50">
      <NavBar />
      <Outlet />
    </div>
  );
}
