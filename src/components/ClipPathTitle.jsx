const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  return (
    <div className='w-full flex justify-center'>
      <div
        style={{
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          borderColor: borderColor,
        }}
        className={`${className} border-2 sm:border-4 md:border-[.5vw] max-w-[95vw] opacity-0 transition-transform`}
      >
        <div
          className='py-2 px-3 sm:py-3 sm:px-6 md:py-4 md:px-12 flex items-center justify-center'
          style={{
            backgroundColor: bg,
          }}
        >
          <h2
            className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-[7.5rem] font-bold uppercase tracking-tight text-center leading-none'
            style={{
              color: color,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
