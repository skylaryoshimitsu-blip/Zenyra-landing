import { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { BetaProgram } from './components/BetaProgram';
import { DataCollection } from './components/DataCollection';
import { SignupForm } from './components/SignupForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero
        onJoinBeta={() => setShowSignupForm(true)}
        onLearnMore={() => scrollToSection('how-it-works')}
      />
      <ProblemSolution />
      <HowItWorks />
      <Benefits />
      <BetaProgram onJoinBeta={() => setShowSignupForm(true)} />
      <DataCollection />
      <FAQ />
      <Footer />

      {showSignupForm && (
        <SignupForm onClose={() => setShowSignupForm(false)} />
      )}
    </div>
  );
}

export default App;
