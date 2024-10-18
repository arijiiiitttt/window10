import React from 'react';
import { FaLock } from 'react-icons/fa';

const Mobileview = () => {
  return (
    <>
      <div className="h-[100vh] w-full bg-gray-900 flex items-center justify-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 w-[42vh] p-7 h-[19vh] shadow-md rounded-xl text-center flex flex-col justify-center items-center border border-gray-600 animate-bounce-slow">
          <div className="flex flex-row items-center justify-center">
            <FaLock className="mr-2 text-gray-200" />
            <h2 className="arbslab text-lg font-semibold text-gray-100">Couldn't Load Post</h2>
          </div>
          <p className="text-sm font-normal text-gray-300 text-center">
            This content is not available on mobile devices. Please switch to your tablet or desktop
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 1.5s infinite;
        }
      `}</style>
    </>
  );
};

export default Mobileview;
