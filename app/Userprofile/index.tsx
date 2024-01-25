'use client'

import React from 'react';
import { LuPencil } from "react-icons/lu";

const user = {
  name: 'Dean Dun Kirk',
  dateOfBirth: 'January 1, 1990',
  gender: 'Male',
  maritalStatus: 'Single',
  email: 'deandun@gmail.com',
  mobile: '+1234567890',
  hobbies: ['Reading', 'Traveling', 'Coding'],
  medicalCondition: ['Autism', 'Cancer', 'High BP'],
  avatar: 'https://example.com/avatar.jpg',
};

const UserProfile = () => {
  return (
    <div className="flex px-16 py-10 items-start gap-5">
      
      <div className='bg-red-500 rounded-lg'>
      <img
        className="w-32 h-32 rounded-full"
        src={user.avatar}
        alt={`${user.name}'s Avatar`}
        />
      </div>

      <div className="flex flex-col gap-3 rounded-3xl w-full p-5 bg-[#a4ddda]">
        <div className='flex justify-between'>
        <h2 className="text-2xl font-semibold mb-2 not-italic text-orange-400">{user.name}</h2>
        <div className='bg-white rounded-full p-3'>
        <LuPencil />
        </div>
        </div>
        <p>Date of Birth: {user.dateOfBirth}</p>
        <p>Gender: {user.gender}</p>
        <p>Marital Status: {user.maritalStatus}</p>
        <p>Email: {user.email}</p>
        <p>Mobile: {user.mobile}</p>
        <div className='flex gap-3'>Hobbies: {user.hobbies.map((items) => <p className='text-white bg-[#217873] px-4 py-2 rounded-lg'>{items}</p>)}</div>
        <div className='flex gap-3'>Medical Condition:  {user.medicalCondition.map((items) => <p className='text-white bg-[#F5A42C] px-4 py-2 rounded-lg'>{items}</p>)}</div>
      </div>
    </div>
  );
};


export default UserProfile;
