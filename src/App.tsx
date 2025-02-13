"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showValentine, setShowValentine] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Seriously noooo",
      "Are you sure?",
      "Are you sure you're sure?",
      "but pleaseee",
      "Pretty please :(",
      "Fine I'll wear the Tiktok hat? :)",
      "What if I include multiple iced caramels :D ",
      "You're meant to say yes silly!",
      "Okay fine, say no then",
      "Okay last chance now really,",
      "Final chance!!",
      "1000000000 times noo",
      "rude :( STILL NO?",
      "You can't escape"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {!showValentine ? (
        <div className="text-center">
          <div className="flex justify-center">
            <img
              className="h-[200px] mb-4"
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjB5M2E3cWxicjB6bHg2eGhtaGlpNHJ0eXlpdWo0Z2o1andtZ3E3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/efyEShk2FJ9X2Kpd7V/giphy.gif"
            />  
          </div>
          <h1 className="my-4 text-2xl font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text animate-bounce font-mono">
            Dear Beth,
          </h1>
          <p className="mb-2 text-xl font-medium text-pink-600 animate-pulse font-mono">
            I hope this application finds you well. 
          </p>
          <p className="mb-2 text-xl font-medium text-pink-600 animate-pulse font-mono">
            (We really innovating with the letters huh!)
          </p>
          <p className="mb-3 text-xl font-medium text-pink-600 animate-pulse font-mono">
            Sooo, I have something to ask you...
          </p>
          <button
            className="rounded bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-bold text-white hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-200 shadow-lg font-mono"
            onClick={() => setShowValentine(true)}
          >
            CLICK HERE TO PROCEED! ➜
          </button>
        </div>
      ) : yesPressed ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-red-500 animate-gradient-xy"></div>
          <div className="relative z-10 flex flex-col items-center">
            <img 
              src="https://media1.tenor.com/m/KLch7U-4X14AAAAC/man-pug.gif" 
              className="h-[300px] rounded-lg shadow-2xl mb-8 animate-bounce"
            />
            <div className="my-4 text-4xl font-bold text-white drop-shadow-lg font-mono text-center">
              {"YAY! Woooooow, I just knew you'd say yes lil mochi ball ".split('').map((char, i) => (
                <span 
                  key={i}
                  className="inline-block animate-wave font-mono"
                  style={{ 
                    animationDelay: `${i * 0.05}s`,
                    marginLeft: char === ' ' ? '0.5rem' : '0.1rem'
                  }}
                >
                  {char}
                </span>
              ))}
              <span className="inline-block animate-wave font-sans" style={{ animationDelay: '2s' }}>🥰</span>
              <span className="inline-block animate-wave font-sans" style={{ animationDelay: '2.1s' }}>🌸</span>
              <span className="inline-block animate-wave font-sans" style={{ animationDelay: '2.2s' }}>🎉</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <div className="flex justify-center w-max">
            <h1 className="my-4 text-4xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-pink-500 pr-5 font-bold font-mono">
              Will you be my Valentine?
            </h1>
          </div>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 font-mono`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 font-mono"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
