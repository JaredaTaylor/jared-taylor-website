import React, { useEffect, useRef, useState } from 'react';
import { executeCommand } from '../api/command';

const Terminal = () => {
  const [cwd, setCwd] = useState('/home/jaredtaylor.dev');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const outputEndRef = useRef(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const [command, ...args] = trimmedInput.split(' ');
    if (command === 'clear') {
      setOutput([]);
      setInput('');
      return;
    }

    setLoading(true);
    setOutput((prev) => [
      ...prev,
      {
        type: 'cmd',
        text: (
          <span>
            <span className="text-green-400">user@jaredtaylor.dev</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">{cwd}</span>
            <span className="text-white">$ {input}</span>
          </span>
        ),
      },
    ]);

    try {
      const result = await executeCommand(command, cwd, args);
      setOutput((prev) => [
        ...prev,
        { type: 'out', text: result.stdout || result.stderr || '(no output)' },
      ]);
      setCwd(result.cwd);
    } catch (err) {
      let msg = err.message;
      try {
        const json = JSON.parse(msg.replace('Server error: ', ''));
        msg = json.error || msg;
      } catch {}
      setOutput((prev) => [...prev, { type: 'err', text: msg }]);
    }

    setInput('');
    setLoading(false);
  };

  // ✅ focus the input when the container is clicked
  const handleFocusClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={handleFocusClick}
      className="absolute top-14 left-6 right-6 h-[65vh] sm:h-[75vh] lg:h-[85vh] bg-black text-white font-mono text-sm sm:text-base p-6 rounded-2xl shadow-2xl overflow-y-auto border border-gray-700"
      // className="absolute top-12 left-0 right-0 bottom-0 h-[calc(100vh-3rem)] bg-black text-white font-mono p-6 rounded-2xl shadow-2xl overflow-y-auto border border-gray-700"
    >
      {output.map((line, i) => {
        const lines =
          typeof line.text === 'string'
            ? line.text.split('\n')
            : [line.text]; // If JSX element (like prompt line)

        return lines.map((subLine, j) => (
          <div
            key={`${i}-${j}`}
            className={`whitespace-pre-wrap break-words text-left ${
              line.type === 'err' ? 'text-red-500' : 'text-white'
            }`}
          >
            {subLine}
          </div>
        ));
      })}

      <form onSubmit={handleSubmit} className="mt-2 flex text-left">
        <span className="mr-1">
          <span className="text-green-400">user@jaredtaylor.dev</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">{cwd}</span>
          <span className="text-white">$</span>
        </span>
        <input
          ref={inputRef}
          className="bg-black text-white outline-none flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
      </form>

      <div ref={outputEndRef} />
    </div>
  );
};

export default Terminal;