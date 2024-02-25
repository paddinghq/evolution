"use client"
import { useRouter } from "next/navigation";
import { ReactNode } from "react";


interface EventBtnProps {
  id: string; 
}


export default function EventBtn({ id }: EventBtnProps): ReactNode {
  const router = useRouter();

  function handleClick() {
    router.push(`/EventDemo/${id}`);
  }

  return (
    <h3
      onClick={handleClick}
      className="flex justify-center mt-5 border-2 px-5 py-2 mx-auto cursor-pointer bg-[#B1761f] text-white hover:bg-[#2A6562]"
    >
      Read more
    </h3>
  );
}
