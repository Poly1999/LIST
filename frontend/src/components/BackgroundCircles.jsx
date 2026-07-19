function BackgroundCircles() {
  return (
    <div className='fixed inset-0 overflow-hidden z-0 pointer-events-none'>
      <svg
        width='200'
        height='200'
        viewBox='0 0 127 127'
        fill='none'
        className='absolute top-[3%] left-[25%] blur-md opacity-90'
      >
        <circle cx='63.5' cy='63.5' r='63.5' fill='#B648EA' />
      </svg>
      <svg
        width='180'
        height='180'
        viewBox='0 0 127 127'
        fill='none'
        className='absolute bottom-[20%] left-[20%] blur-md opacity-90'
      >
        <circle cx='63.5' cy='63.5' r='63.5' fill='#EF7218' />
      </svg>
      <svg
        width='250'
        height='250'
        viewBox='0 0 229 229'
        fill='none'
        className='absolute bottom-[5%] right-[5%] blur-md opacity-90'
      >
        <circle cx='114.5' cy='114.5' r='114.5' fill='#6C74B7' />
      </svg>
    </div>
  );
}

export default BackgroundCircles;
