import React, { useState } from 'react';
import { ChevronRight, Check, X, Home } from 'lucide-react';

interface CategoryConfig {
  color: string;
  borderColor: string;
  title: string;
  emoji: string;
}

interface CategoryConfigs {
  [key: string]: CategoryConfig;
}

interface QuizQuestion {
  term: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}


const categoryConfig: CategoryConfigs = {
  transgender: { color: 'bg-purple-600', borderColor: 'border-purple-800', title: 'Trans & Non-Binary Rights', emoji: '⚧️' },
  posh: { color: 'bg-pink-600', borderColor: 'border-pink-800', title: 'Sexual Harassment Prevention', emoji: '🛡️' },
  pwd: { color: 'bg-green-600', borderColor: 'border-green-800', title: 'Disability Inclusion', emoji: '♿' },
  maternity: { color: 'bg-orange-600', borderColor: 'border-orange-800', title: 'Parental & Caregiver Support', emoji: '👶' },
  general: { color: 'bg-blue-600', borderColor: 'border-blue-800', title: 'Inclusive Workplace', emoji: 'ℹ️' }
};

const questions: { [key: string]: string[] } = {
  transgender: [
    "How can we create a safe and affirming environment for transgender and non-binary employees?",
    "What steps can be taken to support an employee's gender transition in the workplace?",
    "How can we ensure our policies and practices are inclusive of all gender identities?"
  ],
  posh: [
    "What constitutes sexual harassment, and how can we create a culture of respect?",
    "How can employees safely report incidents of harassment or discrimination?",
    "What proactive measures can we implement to prevent sexual harassment?"
  ],
  pwd: [
    "How can we make our workplace more accessible and inclusive for employees with disabilities?",
    "What reasonable accommodations should we consider for employees with various disabilities?",
    "How can we promote equal opportunities and career growth for employees with disabilities?"
  ],
  maternity: [
    "How can we support employees of all genders in balancing work and family responsibilities?",
    "What inclusive parental leave policies can we implement?",
    "How can we create a family-friendly workplace that supports diverse family structures?"
  ],
  general: [
    "How can we foster a workplace culture that celebrates diversity and promotes inclusion?",
    "What strategies can we employ to address unconscious bias in hiring and promotion processes?",
    "How can we ensure equal opportunities and fair treatment for employees of all backgrounds?"
  ]
};

const quizQuestions: QuizQuestion[] = [
  {
    term: "Cisgender",
    options: [
      "A person whose gender identity matches their sex assigned at birth",
      "A person whose gender identity differs from their sex assigned at birth",
      "A person who is attracted to both men and women",
      "A person who does not experience sexual attraction"
    ],
    correctAnswer: 0,
    explanation: "Cisgender refers to individuals whose gender identity aligns with the sex they were assigned at birth. Understanding this term helps in recognizing diverse gender identities and promotes inclusivity."
  },
  {
    term: "Neurodiversity",
    options: [
      "A medical condition affecting the nervous system",
      "The range of differences in individual brain function and behavioral traits",
      "A type of cognitive therapy",
      "A term for people with multiple personalities"
    ],
    correctAnswer: 1,
    explanation: "Neurodiversity refers to the concept that neurological differences, such as those in autism and ADHD, are normal variations in the human genome. This perspective promotes acceptance and inclusion of people with diverse neurological conditions."
  },
  {
    term: "Microaggression",
    options: [
      "A small act of physical aggression",
      "A brief and common daily verbal, behavioral, or environmental slight",
      "A microscopic organism that causes aggression",
      "A strategy in competitive sports"
    ],
    correctAnswer: 1,
    explanation: "Microaggressions are subtle, often unintentional expressions of bias toward marginalized groups. Recognizing and addressing microaggressions is crucial for creating an inclusive environment."
  },
  {
    term: "Allyship",
    options: [
      "A formal agreement between countries",
      "The act of actively promoting and supporting inclusion of marginalized groups",
      "A type of business partnership",
      "A method of conflict resolution"
    ],
    correctAnswer: 1,
    explanation: "Allyship involves using one's privilege to support and advocate for marginalized groups. It's an ongoing process of learning, self-reflection, and action to promote equity and inclusion."
  },
    {
    term: "Cisgender",
    options: [
      "A person whose gender identity aligns with their assigned sex at birth",
      "A person whose gender identity differs from their assigned sex at birth",
      "A person who does not identify with any gender",
      "A person who identifies with multiple genders"
    ],
    correctAnswer: 0,
    explanation: "Cisgender refers to a person whose gender identity aligns with the sex they were assigned at birth. This term is used to describe people who are not transgender."
  },
  {
    term: "Non-binary",
    options: [
      "A person who identifies as both male and female",
      "A person who changes their gender identity frequently",
      "A person whose gender identity falls outside the categories of man and woman",
      "A person who does not express their gender outwardly"
    ],
    correctAnswer: 2,
    explanation: "Non-binary is an umbrella term for gender identities that fall outside the traditional gender binary of male and female. Non-binary individuals may identify with a combination of genders, no gender, or a gender that is neither male nor female."
  },
  {
    term: "Ally",
    options: [
      "A member of the LGBTQIA+ community",
      "A person who opposes LGBTQIA+ rights",
      "A supportive family member of an LGBTQIA+ person",
      "A person who supports and stands up for the rights of LGBTQIA+ people"
    ],
    correctAnswer: 3,
    explanation: "An Ally is a person who supports and stands up for the rights of LGBTQIA+ people, even though they may not identify as part of the community themselves. Allies play a crucial role in promoting equality and inclusivity."
  },
  {
    term: "Asexual",
    options: [
      "A person who is attracted to all genders",
      "A person who experiences little or no sexual attraction to others",
      "A person who is only attracted to people of the same gender",
      "A person who changes their sexual orientation frequently"
    ],
    correctAnswer: 1,
    explanation: "Asexual refers to a person who experiences little or no sexual attraction to others. This is a sexual orientation, and asexual individuals (or 'aces') may still form romantic relationships or experience other forms of attraction."
  },
  {
    term: "Intersex",
    options: [
      "A person who identifies as both male and female",
      "A person born with sex characteristics that do not fit typical binary notions of male or female bodies",
      "A person who has undergone gender reassignment surgery",
      "A person who is attracted to people of all genders"
    ],
    correctAnswer: 1,
    explanation: "Intersex refers to a person born with sex characteristics (including genitals, gonads, and chromosome patterns) that do not fit typical binary notions of male or female bodies. Intersex is a natural variation in human biology."
  },
  {
    term: "Gender expression",
    options: [
      "The gender a person is assigned at birth",
      "A person's internal sense of their own gender",
      "How a person presents their gender identity externally",
      "The process of changing one's gender"
    ],
    correctAnswer: 2,
    explanation: "Gender expression refers to how a person presents their gender identity externally, through behavior, clothing, hairstyle, voice, and other characteristics. It's important to note that gender expression may or may not conform to societal expectations of gender."
  },
  {
    term: "Deadname",
    options: [
      "A name given to a deceased person",
      "The birth name of a transgender or non-binary person who has changed their name",
      "A nickname used in online gaming",
      "A legal term for changing one's name"
    ],
    correctAnswer: 1,
    explanation: "Deadname refers to the birth name of a transgender or non-binary person who has changed their name as part of their gender transition. Using a person's deadname can be disrespectful and harmful."
  },
  {
    term: "Heteronormativity",
    options: [
      "The belief that heterosexuality is the only normal sexual orientation",
      "A medical term for hormonal imbalance",
      "A type of gender identity",
      "A legal term for marriage equality"
    ],
    correctAnswer: 0,
    explanation: "Heteronormativity is the assumption that heterosexuality is the default or 'normal' sexual orientation. This belief can lead to the marginalization of LGBTQIA+ individuals and reinforces stereotypes about gender roles and relationships."
  },
  {
    term: "Demisexual",
    options: [
      "A person who is only sexually attracted to demigods",
      "A person who experiences sexual attraction only after forming a strong emotional bond",
      "A person who is sexually attracted to people of all genders",
      "A person who experiences sexual attraction based on intellectual stimulation"
    ],
    correctAnswer: 1,
    explanation: "Demisexual describes a person who only experiences sexual attraction after forming a strong emotional bond with someone. It's considered to be on the asexual spectrum."
  },
  {
    term: "Drag",
    options: [
      "The act of pulling something across the ground",
      "A type of car race",
      "The act of dressing in clothing typically associated with another gender, often for performance",
      "A term for feeling tired or unenthusiastic"
    ],
    correctAnswer: 2,
    explanation: "In LGBTQIA+ contexts, drag refers to the act of dressing in clothing typically associated with another gender, often for performance. Drag can be a form of art, self-expression, and entertainment."
  },
  {
    term: "Femme",
    options: [
      "A French word meaning 'woman'",
      "A person who expresses and/or identifies with femininity",
      "A type of cocktail",
      "A brand of feminine hygiene products"
    ],
    correctAnswer: 1,
    explanation: "In LGBTQIA+ contexts, femme refers to a person who expresses and/or identifies with femininity. It's often used in queer communities and can apply to people of any gender identity."
  },
  {
    term: "Fluid",
    options: [
      "A term for someone who only dates water signs in astrology",
      "A type of gender identity or sexual orientation that can change over time",
      "A person who works with liquids professionally",
      "A medical term for excessive sweating"
    ],
    correctAnswer: 1,
    explanation: "In the context of gender and sexuality, fluid refers to an identity or orientation that can change over time. This could apply to gender identity (genderfluid) or sexual orientation (sexually fluid)."
  },
  {
    term: "Intersex",
    options: [
      "A person who identifies as both male and female",
      "A person born with sex characteristics that do not fit typical binary notions of male or female bodies",
      "A person who has undergone gender reassignment surgery",
      "A term for the intersection of multiple identities"
    ],
    correctAnswer: 1,
    explanation: "Intersex refers to a person born with sex characteristics (including genitals, gonads, and chromosome patterns) that do not fit typical binary notions of male or female bodies. Intersex is a natural variation in human biology."
  },
  {
    term: "Polyamory",
    options: [
      "The practice of engaging in multiple romantic relationships with the consent of all involved",
      "A type of geometric shape",
      "A medical condition affecting the amory gland",
      "The study of multiple languages"
    ],
    correctAnswer: 0,
    explanation: "Polyamory is the practice of engaging in multiple romantic (and typically sexual) relationships with the full knowledge and consent of all parties involved. It differs from cheating or infidelity as it is consensual and ethical."
  },
  {
    term: "Queer",
    options: [
      "Strange or odd",
      "A slur that has been reclaimed as an umbrella term for sexual and gender minorities",
      "A type of abstract art",
      "A mathematical term for unknown variables"
    ],
    correctAnswer: 1,
    explanation: "Queer, once used as a slur, has been reclaimed by many as an umbrella term for sexual and gender minorities who are not heterosexual or cisgender. It's important to note that not everyone is comfortable with this term, and it should be used carefully."
  },
  {
    term: "Transition",
    options: [
      "The process of changing from one state to another",
      "A musical technique of changing keys",
      "The process of aligning one's gender expression with their gender identity",
      "A type of economic change"
    ],
    correctAnswer: 2,
    explanation: "In LGBTQIA+ contexts, transition refers to the process of aligning one's gender expression with their gender identity. This can involve social, legal, and/or medical changes, and is a highly individual process."
  },
  {
    term: "Transphobia",
    options: [
      "Fear of public transportation",
      "Prejudice against people who like to transform things",
      "Prejudice, fear, or hatred directed toward transgender people",
      "A medical condition causing fear of change"
    ],
    correctAnswer: 2,
    explanation: "Transphobia refers to prejudice, fear, or hatred directed toward transgender people. This can manifest in various forms, from personal attitudes to systemic discrimination and violence."
  },
  // Add more questions here...
];

interface CueCardProps {
  question: string;
  category: string;
  isRotating: boolean;
}

const CueCard: React.FC<CueCardProps> = ({ question, category, isRotating }) => {
  const { color, borderColor, title, emoji } = categoryConfig[category];

  return (
    <div className={`w-full max-w-sm h-64 ${color} ${borderColor} border-4 rounded-lg overflow-hidden flex flex-col shadow-lg transition-transform duration-500 ${isRotating ? 'rotate-y-180' : ''}`}>
      <div className="bg-white p-4 flex-grow flex flex-col">
        <div className={`text-center ${color.replace('bg-', 'text-')} font-bold text-sm mb-2`}>{title}</div>
        <div className="text-center text-4xl mb-4">{emoji}</div>
        <div className="flex-grow flex items-center justify-center px-2">
          <p className="text-black text-base font-medium text-center leading-tight">{question}</p>
        </div>
      </div>
      <div className={`${color} p-2 text-white flex justify-center items-center`}>
        <span className="font-bold text-lg cursor-pointer">DISCUSS</span>
      </div>
    </div>
  );
};

const Header: React.FC = () => (
  <header className="bg-white shadow-md p-4">
    <div className="container mx-auto flex justify-center">
      <img src="/ungender-logo.png" alt="Ungender Logo" className="h-12" />
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-200 p-4 mt-auto">
    <div className="container mx-auto text-center">
      Made with 🌈 by the Ungender team
    </div>
  </footer>
);

interface InclusiveLanguageQuizProps {
  onComplete: () => void;
}

const InclusiveLanguageQuiz: React.FC<InclusiveLanguageQuizProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const getGrade = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) {
      return { name: "Inclusion Champion", emoji: "👑" };
    } else if (percentage >= 60) {
      return { name: "Diversity Advocate", emoji: "🏅" };
    } else {
      return { name: "Inclusion Apprentice", emoji: "🌱" };
    }
  };

  if (quizCompleted) {
    const grade = getGrade();
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-4">Your score: {score} / {quizQuestions.length}</p>
          <p className="text-2xl font-bold mb-4">
            Your grade: {grade.emoji} {grade.name}
          </p>
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded flex items-center justify-center"
            onClick={onComplete}
          >
            Back to Main Menu
            <Home className="ml-2" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex flex-col pt-8 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="mb-4 bg-white rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-2xl font-bold mb-4">{currentQuestion.term}</h2>
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`w-full text-left p-3 rounded ${
                  selectedAnswer === null
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : selectedAnswer === index
                    ? index === currentQuestion.correctAnswer
                      ? 'bg-green-100'
                      : 'bg-red-100'
                    : index === currentQuestion.correctAnswer
                    ? 'bg-green-100'
                    : 'bg-gray-100'
                } ${selectedAnswer !== null ? 'cursor-not-allowed' : ''}`}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
              >
                <span className="flex items-center">
                  {option}
                  {selectedAnswer === index && (
                    index === currentQuestion.correctAnswer ? (
                      <Check className="ml-auto text-green-500" />
                    ) : (
                      <X className="ml-auto text-red-500" />
                    )
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
        {showExplanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800">{currentQuestion.explanation}</p>
          </div>
        )}
        <button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded flex items-center justify-center"
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const UngenderApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'report' | 'rights' | 'vocabulary' | 'topic'>('landing');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogContent, setDialogContent] = useState<string>('');

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    shuffleQuestion(category);
    setCurrentPage('topic');
  };

  const shuffleQuestion = (category: string) => {
    setIsRotating(true);
    setTimeout(() => {
      const categoryQuestions = questions[category];
      const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
      setCurrentQuestion(categoryQuestions[randomIndex]);
      setIsRotating(false);
    }, 250);
  };

  const handleDiscuss = async () => {
    setIsDialogOpen(true);
    setDialogContent('Loading...');
    // Simulating API call
    setTimeout(() => {
      setDialogContent('For 1-to-1 consult, visit the Ungender Safety booth. Follow the red flag and we are happy to help you.');
    }, 1000);
  };

  const handleQuizComplete = () => {
    setCurrentPage('landing');
  };

  const renderLandingPage = () => (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-center mb-1">You are <span className="text-green-500">valid</span>. You are <span className="text-green-500">loved</span>.</p>
      <p className="text-center mb-1">You <span className="text-black-500 font-bold">belong at Maya Bazaar</span>.</p>
      <button
        className="w-full max-w-sm text-lg bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        onClick={() => setCurrentPage('report')}
      >
        <span className="mr-2">🆘</span> Seek Support
      </button>
      <button
        className="w-full max-w-sm text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        onClick={() => setCurrentPage('rights')}
      >
        <span className="mr-2">📚</span> Know Your Rights
      </button>
      <button
        className="w-full max-w-sm text-lg bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        onClick={() => setCurrentPage('vocabulary')}
      >
        <span className="mr-2">🗣️</span> Learn Inclusive Language
      </button>
    </div>
  );

  const renderReportPage = () => (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold mb-4">Seek Support</h1>
      <p className="text-lg mb-2">If you're experiencing any form of harassment or discrimination, we're here for you.</p>
      <p className="text-lg mb-2">Call our confidential support line: <strong>9582630056</strong></p>
      <p className="text-lg">Visit our Safe Space booth, where our compassionate team is ready to listen and support you.</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCurrentPage('landing')}
      >
        Back to Home
      </button>
    </div>
  );

  const renderRightsPage = () => (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold mb-4">Know Your Rights at Work</h1>
      <p className="text-center mb-4">Everyone deserves a safe, respectful, and inclusive workplace. Choose a topic to learn more:</p>
      {Object.entries(categoryConfig).map(([key, { title, emoji }]) => (
        <button
          key={key}
          className="w-full max-w-sm text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          onClick={() => selectCategory(key)}
        >
          <span className="mr-2">{emoji}</span> {title}
        </button>
      ))}
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCurrentPage('landing')}
      >
        Back to Home
      </button>
    </div>
  );

  const renderTopicPage = () => (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold mb-4">{categoryConfig[selectedCategory!].title}</h1>
      {currentQuestion && (
        <CueCard question={currentQuestion} category={selectedCategory!} isRotating={isRotating} />
      )}
      <div className="flex space-x-4">
        <button onClick={() => shuffleQuestion(selectedCategory!)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          New Question
        </button>
        <button onClick={handleDiscuss} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Discuss
        </button>
      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setCurrentPage('rights');
          setSelectedCategory(null);
          setCurrentQuestion(null);
        }}
      >
        Back to Topics
      </button>
    </div>
  );

  const renderVocabularyPage = () => (
    <InclusiveLanguageQuiz onComplete={handleQuizComplete} />
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {currentPage === 'landing' && renderLandingPage()}
        {currentPage === 'report' && renderReportPage()}
        {currentPage === 'rights' && renderRightsPage()}
        {currentPage === 'vocabulary' && renderVocabularyPage()}
        {currentPage === 'topic' && renderTopicPage()}
        {isDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-md">
              <h2 className="text-xl font-bold mb-2">Inclusive Guidance</h2>
              <p>{dialogContent}</p>
              <button onClick={() => setIsDialogOpen(false)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default UngenderApp;