import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const ResumeViewer = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/assets/resume.md')
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => {
        console.error('Error loading resume.md:', err);
        setContent('# Error loading resume.md');
      });
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto mt-8">
      <div className="prose prose-invert text-left mx-auto max-w-4xl">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ResumeViewer;