import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <div className="relative flex justify-center items-center">
        {/* This heading using for translate error  */}
        <h1 className="hidden">Loading</h1>
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-green-500" />
        <Image
          width={100}
          height={100}
          alt="Logo"
          src="/images/logo.png"
          className="rounded-full h-28 w-28"
        />
      </div>
    </div>
  );
};

export default Loader;
