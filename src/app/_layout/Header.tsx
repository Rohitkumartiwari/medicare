import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* TypeScript Logo */}
      <div className="flex items-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 200V0H400V400H0V200Z" fill="#3178C6" />
          <path
            d="M87.7021 200.699V217.994H142.034V365.419H183.884V217.994H238.216V201.012C238.216 191.661 238.008 183.716 237.696 183.403C237.487 182.882 209.557 182.569 175.627 182.673L114.079 182.882L87.7021 200.699Z"
            fill="white"
          />
          <path
            d="M306.325 183.09C328.277 187.763 343.757 197.322 353.108 212.385C357.781 219.705 361.412 228.951 361.829 233.728C361.933 234.978 361.829 235.186 360.996 235.915C360.371 236.436 348.325 244.068 334.242 252.847L308.595 268.952L303.401 261.319C299.978 256.334 294.367 251.766 289.278 249.891C280.553 246.781 266.053 247.093 258.108 250.516C246.792 255.397 240.721 264.851 240.721 277.522C240.721 284.321 241.659 288.16 244.352 292.937C249.962 302.809 259.046 307.898 280.969 315.322C315.937 327.784 335.075 337.447 347.954 349.284C363.183 363.471 370.086 380.975 369.252 401.981C368.419 421.536 361.1 437.849 346.079 451.307C332.83 463.248 314.791 470.672 292.943 472.86C285.016 473.694 266.157 473.381 257.536 472.339C238.87 470.047 221.665 464.185 208.369 455.251C201.466 450.579 189.629 438.742 189.629 437.284C189.629 436.867 190.358 435.93 191.296 435.097C192.129 434.264 193.484 433.222 194.317 432.597L201.466 428.341L224.566 414.571L242.501 403.751L248.572 412.476C255.686 422.786 266.053 430.106 277.578 432.701C283.128 433.951 296.945 433.847 302.912 432.493C314.27 429.904 322.84 423.411 327.513 413.831C329.805 409.054 330.326 407.075 330.326 401.251C330.326 395.428 329.805 393.449 327.513 388.672C323.778 381.287 316.837 375.985 300.775 368.353C270.101 354.374 253.766 346.012 241.825 336.040C234.087 329.551 227.392 321.085 223.14 312.047C219.405 304.06 218.155 298.341 217.738 287.639C216.904 268.223 221.269 252.326 231.557 237.991C247.313 216.491 274.794 203.507 306.325 183.09Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
          Mo.No.123456789
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          Chat with Us
        </button>
      </div>
    </header>
  );
};

export default Header;
