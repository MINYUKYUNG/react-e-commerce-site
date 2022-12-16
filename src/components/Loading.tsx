function Loading() {
  const fontStyle = 'fontKnewave';
  const fontSize = 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl';
  const fontLocation = 'absolute top-1/3 left-1/2';

  return (
    <div className="h-screen relative">
      <div className={`${fontStyle} ${fontSize} ${fontLocation} -translate-x-1/2`}>Loading...</div>
    </div>
  );
}

export default Loading;
