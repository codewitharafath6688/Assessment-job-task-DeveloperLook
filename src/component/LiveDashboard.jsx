import React from 'react';
import LeaderboardAffect from './LeaderboardAffect';

const LiveDashboard = () => {
  return (
    <section className="w-full px-3 sm:px-5 md:px-6 lg:px-8">
      <div className="w-full max-w-[1300px] mx-auto mt-2 sm:mt-3 md:mt-4">
        <LeaderboardAffect content="🚨 The Category Leaderboard - Live Now" />
      </div>
    </section>
  );
};

export default LiveDashboard;