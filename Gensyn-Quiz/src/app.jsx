import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function GensyncQuiz() {
  const [stage, setStage] = useState('name');
  const [userName, setUserName] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const quizData = {
    easy: [
      {
        question: "What is Gensyn's core vision?",
        options: [
          "To replace all search engines",
          "To create open, permissionless, neutral protocols for machine intelligence",
          "To build only software applications",
          "To control knowledge creation"
        ],
        correct: 1
      },
      {
        question: "What started in the mid-1990s according to Gensyn's philosophy?",
        options: [
          "Machine intelligence takeover",
          "The internet revolution",
          "Gradual off-loading of knowledge to search engines",
          "Neural network development"
        ],
        correct: 2
      },
      {
        question: "What substrate does machine intelligence run on?",
        options: [
          "Organic matter",
          "Natural biological systems",
          "Silicon",
          "Four dimensional space"
        ],
        correct: 2
      },
      {
        question: "What is the main difference between machine and organic intelligence?",
        options: [
          "Machine intelligence is slower",
          "Organic life is constrained in four dimensions and subject to nature's laws",
          "Machines cannot process information",
          "There is no difference"
        ],
        correct: 1
      },
      {
        question: "What principle should coordinate machine intelligence growth?",
        options: [
          "Centralized control",
          "Corporate ownership",
          "Open, permissionless, and neutral protocols",
          "Government regulation"
        ],
        correct: 2
      },
      {
        question: "What will replace knowledge off-loading to search engines?",
        options: [
          "Manual knowledge keeping",
          "Vast neural networks with compressed knowledge",
          "Physical libraries",
          "Human memory"
        ],
        correct: 1
      },
      {
        question: "What is the primary focus of Gensyn's protocols?",
        options: [
          "Profit maximization",
          "Centralized power",
          "Open and neutral coordination of machine intelligence",
          "Restricting access"
        ],
        correct: 2
      },
      {
        question: "How is knowledge compressed in machine intelligence?",
        options: [
          "Through file compression",
          "By deleting unnecessary data",
          "Into artificial neurons",
          "By reducing dimensions"
        ],
        correct: 2
      },
      {
        question: "What does 'permissionless' mean in Gensyn's context?",
        options: [
          "Without rules",
          "Not requiring authorization from a central authority",
          "Without security",
          "Free of all limitations"
        ],
        correct: 1
      },
      {
        question: "What era is being replaced by neural networks?",
        options: [
          "Agricultural era",
          "Industrial era",
          "Era of search engine-based knowledge off-loading",
          "Stone age"
        ],
        correct: 2
      }
    ],
    medium: [
      {
        question: "What is the relationship between Gensyn's protocols and nature?",
        options: [
          "They are identical to natural processes",
          "Like nature, they are open, permissionless, and neutral",
          "They are designed to control nature",
          "Nature is irrelevant to protocols"
        ],
        correct: 1
      },
      {
        question: "How does Gensyn view the evolution of knowledge systems?",
        options: [
          "As a static process",
          "As a controlled hierarchy",
          "As an inevitable shift from search engines to neural networks",
          "As reversible"
        ],
        correct: 2
      },
      {
        question: "What challenge do machine intelligence protocols address?",
        options: [
          "Physical hardware limitations",
          "The need for coordination and growth mechanisms",
          "Internet speed",
          "Data storage"
        ],
        correct: 1
      },
      {
        question: "What constraints apply to organic life that don't apply to machine intelligence?",
        options: [
          "Time limitations",
          "Four dimensional space and laws of nature",
          "Energy requirements",
          "Learning capacity"
        ],
        correct: 1
      },
      {
        question: "What is the significance of 'neural networks' in Gensyn's vision?",
        options: [
          "They are just data storage",
          "They will compress vast knowledge and replace search engines",
          "They are biological entities",
          "They are irrelevant to future intelligence"
        ],
        correct: 1
      },
      {
        question: "How does Gensyn approach the future of knowledge creation?",
        options: [
          "By centralizing control",
          "By restricting access",
          "Through open, permissionless neutral protocols",
          "By eliminating automation"
        ],
        correct: 2
      },
      {
        question: "What transition is Gensyn describing in the knowledge landscape?",
        options: [
          "From books to documents",
          "From search engines to vast neural networks",
          "From internet to intranet",
          "From written to verbal"
        ],
        correct: 1
      },
      {
        question: "Why are 'neutral' protocols important to Gensyn?",
        options: [
          "To reduce complexity",
          "To ensure fair coordination without bias or favoritism",
          "To speed up processing",
          "To save costs"
        ],
        correct: 1
      },
      {
        question: "What does Gensyn imply about the role of humans in knowledge-keeping?",
        options: [
          "It will remain unchanged",
          "Machine intelligence will gradually replace it",
          "Humans will increase their role",
          "Knowledge-keeping will be eliminated"
        ],
        correct: 1
      },
      {
        question: "How does silicon-based intelligence differ fundamentally from organic intelligence?",
        options: [
          "It is inherently superior",
          "It is not constrained by four dimensional space and natural laws",
          "It cannot process complex information",
          "It has biological limitations"
        ],
        correct: 1
      }
    ],
    hard: [
      {
        question: "What philosophical implication underlies Gensyn's protocol design philosophy?",
        options: [
          "Centralized control is necessary for order",
          "Decentralized, open systems mimic successful natural structures",
          "Artificial systems must be rigid and controlled",
          "Technology should replace human decision-making entirely"
        ],
        correct: 1
      },
      {
        question: "How does Gensyn reconcile the autonomy of machine intelligence with coordination?",
        options: [
          "Through strict hierarchical control",
          "Through open, permissionless, neutral protocols that enable voluntary coordination",
          "By eliminating all autonomy",
          "By centralizing decision-making"
        ],
        correct: 1
      },
      {
        question: "What does the compression of knowledge into artificial neurons represent?",
        options: [
          "A limitation of machine intelligence",
          "An evolution beyond the linear, dimensional constraints of organic knowledge storage",
          "A step backward in technology",
          "An inefficient use of resources"
        ],
        correct: 1
      },
      {
        question: "How does Gensyn's vision address the democratization of machine intelligence?",
        options: [
          "By restricting access to corporations",
          "Through permissionless and neutral protocols enabling open participation",
          "By creating exclusive membership",
          "By maintaining centralized control"
        ],
        correct: 1
      },
      {
        question: "What is the deeper significance of moving beyond search engine dependency?",
        options: [
          "Merely a technological upgrade",
          "A fundamental shift in how humanity interfaces with and creates knowledge through AI",
          "A return to pre-digital methods",
          "An elimination of information access"
        ],
        correct: 1
      },
      {
        question: "How do Gensyn's protocols enable 'neutrality' in machine intelligence coordination?",
        options: [
          "By imposing a single standard",
          "By removing central authority and allowing decentralized, rule-based coordination",
          "By controlling all parameters",
          "By limiting participation"
        ],
        correct: 1
      },
      {
        question: "What systemic advantage do open protocols provide in Gensyn's framework?",
        options: [
          "Reduced innovation",
          "Enable emergence of complex coordination without centralized gatekeeping",
          "Increased bureaucracy",
          "Restricted access to knowledge"
        ],
        correct: 1
      },
      {
        question: "How does the four-dimensional constraint on organic life relate to Gensyn's vision?",
        options: [
          "It is irrelevant",
          "It explains why silicon-based intelligence requires different protocols for growth",
          "It strengthens organic intelligence",
          "It has no technological implications"
        ],
        correct: 1
      },
      {
        question: "What is the ultimate goal of Gensyn's approach to machine intelligence protocols?",
        options: [
          "To replace all human intelligence",
          "To enable permissionless, neutral coordination of knowledge creation at scale",
          "To restrict AI development",
          "To maintain human control absolutely"
        ],
        correct: 1
      },
      {
        question: "How does Gensyn's philosophy align with principles from complex adaptive systems?",
        options: [
          "It doesn't - it advocates for strict control",
          "By using open, permissionless rules that enable emergent coordination like in nature",
          "By centralizing all decision-making",
          "By eliminating interaction between components"
        ],
        correct: 1
      }
    ]
  };

  const handleNameSubmit = () => {
    if (userName.trim()) {
      setStage('level');
    }
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setStage('quiz');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (index) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = index;
    setSelectedAnswers(newAnswers);

    const isCorrect = index === quizData[selectedLevel][currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < 9) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 500);
  };

  const getRemarks = () => {
    const percentage = (score / 10) * 100;
    if (percentage === 100) return "🏆 Perfect Score! You're a Gensyn Expert!";
    if (percentage >= 90) return "⭐ Excellent! Outstanding knowledge of Gensyn!";
    if (percentage >= 80) return "🎉 Great! You have strong Gensyn knowledge!";
    if (percentage >= 70) return "👍 Good! You understand Gensyn well!";
    if (percentage >= 60) return "📚 Fair! Keep learning about Gensyn!";
    if (percentage >= 50) return "🤔 Not bad! Review Gensyn's core concepts!";
    return "💪 Keep learning! Read more about Gensyn!";
  };

  const getLevelLabel = () => {
    const labels = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
    return labels[selectedLevel];
  };

  const getDifficultyColor = () => {
    const colors = {
      easy: 'from-emerald-500 to-teal-600',
      medium: 'from-orange-500 to-amber-600',
      hard: 'from-red-600 to-red-700'
    };
    return colors[selectedLevel];
  };

  if (stage === 'name') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800 drop-shadow-2xl">
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                Gensyn Quiz
              </h1>
              <p className="text-orange-300 text-sm font-semibold tracking-wide">Machine Intelligence Protocol Knowledge</p>
            </div>
            <p className="text-center text-gray-300 mb-8 text-lg">Test Your Knowledge</p>
            <div>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6 border border-gray-700"
              />
              <button
                onClick={handleNameSubmit}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-900/50"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'level') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800 drop-shadow-2xl">
            <h1 className="text-3xl font-bold text-center mb-2 text-gray-100 drop-shadow-lg">
              Welcome, {userName}!
            </h1>
            <p className="text-center text-gray-400 text-sm font-semibold mb-8">Select Difficulty Level</p>
            <div className="space-y-4">
              <button
                onClick={() => handleLevelSelect('easy')}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-emerald-900/50"
              >
                🟢 Easy
              </button>
              <button
                onClick={() => handleLevelSelect('medium')}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange-900/50"
              >
                🟡 Medium
              </button>
              <button
                onClick={() => handleLevelSelect('hard')}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-red-900/50"
              >
                🔴 Hard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'quiz' && !showResults) {
    const questions = quizData[selectedLevel];
    const currentQ = questions[currentQuestion];

    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className={`bg-gradient-to-r ${getDifficultyColor()} rounded-t-3xl p-6 shadow-2xl`}>
            <div className="flex justify-between items-center text-white">
              <span className="text-sm font-semibold">Question {currentQuestion + 1}/10</span>
              <span className="text-sm font-semibold">Level: {getLevelLabel()}</span>
            </div>
            <div className="w-full bg-black/40 rounded-full h-2 mt-4">
              <div
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / 10) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-b-3xl p-8 shadow-2xl border-b border-l border-r border-gray-800">
            <h2 className="text-2xl font-bold text-gray-100 mb-8">{currentQ.question}</h2>
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-xl transition-all transform hover:scale-102 border-2 border-gray-700 hover:border-orange-500"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'quiz' && showResults) {
    const percentage = (score / 10) * 100;
    const questions = quizData[selectedLevel];

    if (showAnswers) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="w-full max-w-3xl">
            <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-800">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">{userName}'s Answer Review</h2>
              
              <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                {questions.map((q, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <p className="text-gray-100 font-bold mb-3">Q{idx + 1}: {q.question}</p>
                    <div className="space-y-2 ml-4">
                      {q.options.map((option, optIdx) => {
                        const isCorrect = optIdx === q.correct;
                        const isSelected = selectedAnswers[idx] === optIdx;
                        let bgColor = 'bg-gray-700';
                        let icon = '';
                        
                        if (isCorrect) {
                          bgColor = 'bg-emerald-700';
                          icon = '✅';
                        } else if (isSelected && !isCorrect) {
                          bgColor = 'bg-red-700';
                          icon = '❌';
                        }
                        
                        return (
                          <div key={optIdx} className={`${bgColor} rounded p-2 text-gray-100 text-sm`}>
                            {icon} {option}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowAnswers(false)}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-3 rounded-xl transition-all transform hover:scale-105 mt-6 shadow-2xl"
              >
                Back to Results
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800 text-center">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">{userName}</h2>
            
            <div className="mb-8 animate-bounce">
              <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                {score}/10
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3 font-semibold">Score Breakdown</p>
              <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center">
                  <CheckCircle className="text-emerald-500 mb-1" size={24} />
                  <span className="text-gray-100 font-semibold">{score} Correct</span>
                </div>
                <div className="flex flex-col items-center">
                  <XCircle className="text-red-500 mb-1" size={24} />
                  <span className="text-gray-100 font-semibold">{10 - score} Wrong</span>
                </div>
              </div>
            </div>

            <div className="mb-8 animate-pulse">
              <p className="text-3xl font-bold text-gray-100 mb-2">{percentage.toFixed(0)}%</p>
              <p className="text-xl font-semibold text-orange-400 mb-4">
                {getRemarks()}
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-gray-700">
              <p className="text-gray-400 text-sm mb-2 font-semibold">Difficulty Level</p>
              <p className="text-gray-100 font-bold text-lg">{getLevelLabel()}</p>
            </div>

            <button
              onClick={() => setShowAnswers(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 rounded-xl transition-all transform hover:scale-105 mb-3 shadow-2xl"
            >
              📋 View Answers
            </button>

            <button
              onClick={() => {
                setStage('level');
                setCurrentQuestion(0);
                setScore(0);
                setSelectedAnswers([]);
                setShowResults(false);
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-3 rounded-xl transition-all transform hover:scale-105 mb-3 shadow-2xl"
            >
              🔄 Try Another Level
            </button>

            <button
              onClick={() => {
                setStage('name');
                setUserName('');
                setCurrentQuestion(0);
                setScore(0);
                setSelectedAnswers([]);
                setShowResults(false);
              }}
              className="w-full bg-gray-800 hover:bg-gray-700 text-gray-100 font-bold py-3 rounded-xl transition-all shadow-2xl border border-gray-700"
            >
              🏠 Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }
}