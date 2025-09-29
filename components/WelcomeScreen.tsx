
import React, { useState } from 'react';

interface WelcomeScreenProps {
  onStart: (nickname: string) => void;
  onShowLeaderboard: () => void;
}

const InstructionStep: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex flex-col items-center text-center p-2 sm:p-4">
      {icon}
      <h4 className="font-bold text-slate-200 mt-2 text-base sm:text-lg">{title}</h4>
      <p className="text-sm text-slate-400 mt-1">{children}</p>
    </div>
);

const NicknameIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const ModulesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
);

const ChallengeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
);

const TrophyIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20h6m-3-8V4m0 0a3 3 0 00-3 3v1m3-4a3 3 0 013 3v1m-6 8H6a2 2 0 01-2-2V9a2 2 0 012-2h1m10 0h1a2 2 0 012 2v5a2 2 0 01-2 2h-1m-4 0a3 3 0 00-3-3h-2a3 3 0 00-3 3v1" />
    </svg>
);

const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.732l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.732l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
);


const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onShowLeaderboard }) => {
  const [nickname, setNickname] = useState('');

  const handleStart = () => {
    if (nickname.trim()) {
      onStart(nickname.trim());
    }
  };

  return (
    <div className="text-center flex flex-col items-center justify-center animate-fade-in py-4">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight">
        Welcome to <span className="text-[#FFCC00]">Cyber Defender</span>
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-slate-400">
        An interactive training simulation to sharpen your cybersecurity skills.
        Learn to protect sensitive data through hands-on, gamified scenarios.
      </p>

      <div className="my-8 w-full max-w-5xl bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-100 mb-4">How to Play</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
          <InstructionStep
            title="1. Get Started"
            icon={<NicknameIcon />}>
            Enter a nickname to track your progress on the leaderboard.
          </InstructionStep>
          <InstructionStep
            title="2. Select a Module"
            icon={<ModulesIcon />}>
            Choose from various training scenarios like phishing detection or document handling.
          </InstructionStep>
          <InstructionStep
            title="3. Complete Challenges"
            icon={<ChallengeIcon />}>
            Drag items to correct targets. Act quickly and accurately for a time bonus!
          </InstructionStep>
          <InstructionStep
            title="4. Climb the Ranks"
            icon={<TrophyIcon />}>
            Earn points for correct actions and aim for the top of the leaderboard.
          </InstructionStep>
          <InstructionStep
            title="5. Share & Win"
            icon={<GiftIcon />}>
            Take a screenshot of your score and share to win attractive gifts.
          </InstructionStep>
        </div>
      </div>
      
      <div className="w-full max-w-sm flex flex-col items-center gap-4">
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter your nickname"
          maxLength={15}
          className="w-full bg-slate-800 border-2 border-slate-600 rounded-full p-3 text-lg text-slate-100 text-center focus:border-[#FFCC00] focus:ring-[#FFCC00] focus:outline-none transition-colors"
          aria-label="Nickname input"
        />
        <button
          onClick={handleStart}
          disabled={!nickname.trim()}
          className="w-full px-8 py-3 bg-[#D40511] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#D40511]/50 shadow-lg shadow-[#D40511]/30 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none"
        >
          Start Training
        </button>
        <button
            onClick={onShowLeaderboard}
            className="text-slate-400 hover:text-[#FFCC00] transition-colors font-semibold"
        >
            View Leaderboard
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
