import React from 'react';

const OnionLogo = (props) => (
  <svg
    id="onion-logo"
    viewBox="0 0 600 91"
    width="134"
    height="22"
    {...props}
  >
    <style>{'.onion-logo__st0{fill:#b2b2b2}'}</style>
    <path
      className="onion-logo__st0"
      d="M36.9 65.4c5.3.9 22.4-3 28.2-23.4C71 21 68 25.2 50.8 43.1c-9.2 9.6-16.6 21.8-13.9 22.3zm15 13.3C70.5 72 70.2 47.8 67.2 54.6c-3 6.6-5 12-11.5 15.7-5.1 2.9-8.7 3.3-15 3.1-5.2-.1-10-4.4-11.5 2.1-1.6 7.2 15.8 5.6 22.7 3.2zM36.2 47.2c14.3-19.8 35.5-26.9 33.1-29.4-2.9-2.9-15.7 1.1-15.7 1.1-19.8 7-41.4 20.1-42.8 36.4-.5 4.8.9 13.8 7 17.5 4.1 2.5 11.3-15.8 18.4-25.6zM22.3 29.7c7.9-5.8 23.1-10.6 19.8-10.5-11 .3-33.4 9.4-34.5 23.4-.3 4.5 6.8-7.1 14.7-12.9zM2.8 82.4c-1.3-1.9 3.8-2.9 4.8-5C12.2 68.5 4 72.2.5 51.9-6.2 13.5 59.1 13.5 67.8 12c8-1.4-.1-12 6.1-12 2.1 0 0 5.5 2.1 6.3 2.2.9 3.5-5 5.7-3.1 3 2.6-2.9 4.9-1.3 6.5 1.2 1.2 3.9-1 4.9.5 1.6 2.5-2.8 4.1-6.7 4.8C64.2 17.5 95.1 80.7 45 89.4c-13.2 2.5-19.4-9.2-29.2-3.5-2.4 1.4-4.2 6.8-5.7 4.6-.9-1.4 1.5-3.6 0-4.5-1-.6-2.5 2-3.6 1.1-.8-.8.4-2.1-.5-3.1-.7-1.3-2.3-.3-3.2-1.6zM115.6 86.3c-13.4 0-15.8-10.2-15.8-20.2V55.2l-7.2.3V42.4l7.2.2v-17l16.4-1.7v18.7l10.6-.3v13.1l-10.7-.4v10.6c0 4.8 1.4 6.5 4.8 6.5 1.7 0 4.1-.4 5.2-1.2l3.6 11.4c-1.7 1.3-4.5 4-14.1 4m36.1-41.1s6.7-4.2 17.1-4.2c7.9 0 11.9 7.1 11.9 14.9v29.5h-16.4v-20c0-7.3 0-12.2-5.9-12.2-3.1 0-6.8 2.3-6.8 2.3v29.9h-16.4V16.6l16.4-1.3.1 29.9m68.9 12.5c-.9-4.3-4.5-7-9-7-7.9 0-10.5 6.5-9.8 8.3h18.5c.5 0 .4-.9.3-1.3zm-9.3 29.7c-15.9 0-24.7-10.3-24.7-25.3 0-13.3 10.5-22 25.2-22 13 0 22.1 8.6 22.1 22.3v5.7h-32.3c0 5.1 5.8 7.8 10.2 7.8 4.5 0 6.8-1.3 9.1-3.3l9.6 6.7c-1.8 2-7.7 8.1-19.2 8.1zm73.9-23.5c6.4 0 12.3-5.6 12.3-13.4 0-6.4-5.9-11.8-12.3-11.8-6.5 0-12.4 5.4-12.4 11.7 0 7.9 5.9 13.4 12.4 13.5zm0 23.6c-19.9 0-34.9-15.5-34.9-37.1 0-20.3 17.1-34.8 34.9-34.8s34.9 14.5 34.9 34.8c0 21.6-15 37.1-34.9 37.1zm85.1-41.7V18.1l22.3-1.5V87l-43.3-30v28.2h-22.4V14.7l43.4 31.1M402 85.2h22.5V18.1H402m64.5 45.8c6.4 0 12.3-5.6 12.3-13.4 0-6.4-5.9-11.8-12.3-11.8-6.5 0-12.4 5.4-12.4 11.8 0 7.8 5.9 13.4 12.4 13.4zm0 23.7c-19.9 0-34.9-15.5-34.9-37.1 0-20.3 17.1-34.8 34.9-34.8s34.9 14.5 34.9 34.8c0 21.6-15 37-34.9 37.1zm85.1-69.5l22.4-1.5V87l-43.3-30v28.2h-22.4V14.7l43.3 31.2M591.3 22.6c1.3 0 3.4.2 3.4-1.7 0-1.4-1.3-1.6-2.4-1.6h-2.7v3.4c0-.1 1.7-.1 1.7-.1zm4.5 5.2h-1.4l-2.7-4.4h-2.1v4.4h-1.2v-9.4h4.1c.8 0 1.6 0 2.3.4.8.4 1.1 1.2 1.1 2.1 0 1.9-1.3 2.5-2.9 2.5l2.8 4.4zm3.1-4.7c0-4.2-3.3-7.4-7.4-7.4-4 0-7.4 3.3-7.4 7.4s3.4 7.4 7.4 7.4c4.1 0 7.4-3.2 7.4-7.4zm-15.7 0c0-4.7 3.7-8.4 8.4-8.4s8.4 3.7 8.4 8.4-3.7 8.4-8.4 8.4-8.4-3.7-8.4-8.4z"
    />
  </svg>
);

export default OnionLogo;