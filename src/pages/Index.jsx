import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Anton Osika</h1>
        <p className="text-xl text-gray-600 mb-6">Entrepreneur and AI Researcher</p>
        <div className="text-left">
          <p className="mb-4">
            Anton Osika is a prominent figure in the field of artificial intelligence and entrepreneurship. He is known for:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Co-founding Anthropic, an AI research company focused on building beneficial AI systems</li>
            <li>Contributing to advancements in large language models and AI safety</li>
            <li>Advocating for responsible AI development and ethical considerations in technology</li>
          </ul>
          <p className="text-gray-700">
            With a background in both technology and ethics, Anton Osika is dedicated to shaping the future of AI in a way that benefits humanity while mitigating potential risks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;