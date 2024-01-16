import Image from "next/image";

export default function Back({ children }: { children: React.ReactNode }) {
  return (
    <div className="  h-screen md:overflow-hidden gap-6 flex flex-row">
      <div className="flex min-h-screen  justify-center items-center md:overflow-y-auto w-1/2">
        {children}
      </div>
      <div className="w-1/2">
        <Image
          src="/chris.jpg"
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "100%",
                  }}
                  priority
          className="block"
          alt="Evolution"
        />
      </div>
    </div>
  );
}
