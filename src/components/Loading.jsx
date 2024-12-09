const Loading = () => {
  return (
    <div className="absolute -top-5 -left-[27vh] w-full h-full">
      <div className="absolute top-1/2 right-[70vh] w-[10vh] rounded-full border-4 border-dashed animate-bounce border-red-500 mx-auto h-[10vh] flex justify-center bg-white items-center text-blue-500" />
      <div className="absolute top-[60vh] right-[70vh] w-[10vh] h-1 bg-red-500" />
    </div>
  );
};
export default Loading;
