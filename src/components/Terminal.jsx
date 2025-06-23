import React, { useEffect, useRef, useState } from 'react';
import { executeCommand } from '../api/command';

const Terminal = () => {
  const [cwd, setCwd] = useState('/home/jaredtaylor.dev');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    {
      type: 'out',
      text: (
        <div className="text-green-400 mb-4">
          <p>==========================================</p>
          <p>__        __   _                          </p>
          <p>\ \      / /__| | ___ ___  _ __ ___   ___ </p>
          <p> \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \</p>
          <p>  \ V  V /  __/ | |_| |_| | | | | | |  __/</p>
          <p>   \_/\_/ \___|_|\___\___/|_| |_| |_|\___|</p>
          <p>==========================================</p>
          <p>Welcome to <strong>jaredtaylor.dev</strong> — a personal portfolio in terminal form.</p>
          <p>Type a command to get started, or try `help` to see what is available.</p>
          <p>If you would prefer to view my non-interactive resume, click the toggle in the top left.</p>
        </div>
      ),
    },
  ]);
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

    // Append the user command line
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
      {
        type: 'out',
        text: <span className="blinking-cursor" />,
      },
    ]);

    let loadingIndex = null;

    try {
      const result = await executeCommand(command, cwd, args);
      const stdout = result.stdout || result.stderr || '(no output)';
      const lines = stdout.split('\n');
      setCwd(result.cwd);

      // Replace loading line with first animated line
      let i = 0;

      for (let line of lines) {
        if (line.trim() === '') continue;

        let current = '';
        let lineIndex = null;

        // On the first line, overwrite the loading placeholder
        if (i === 0) {
          lineIndex = output.length; // this line was the last appended
          setOutput((prev) => {
            const updated = [...prev];
            updated[lineIndex] = { type: 'out', text: '' };
            return updated;
          });
        } else {
          setOutput((prev) => {
            const updated = [...prev, { type: 'out', text: '' }];
            lineIndex = updated.length - 1;
            return updated;
          });
        }

        await new Promise((resolve) => {
          let j = 0;
          const interval = setInterval(() => {
            current += line[j++];
            setOutput((prev) => {
              const updated = [...prev];
              updated[lineIndex] = { type: 'out', text: current };
              return updated;
            });

            if (j >= line.length) {
              clearInterval(interval);
              resolve();
            }
          }, 10);
        });

        i++;
      }
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

  // Typing out commands
  const [isTyping, setIsTyping] = useState(false);
  const typeOutput = (text, type = 'out') => {
    return new Promise((resolve) => {
      const lines = text.split('\n');
      let lineIndex = 0;
      let charIndex = 0;

      // First, add the first line to output (empty string)
      setOutput((prev) => [...prev, { type, text: '' }]);

      const typeChar = () => {
        setOutput((prev) => {
          const updated = [...prev];
          const currentLine = updated.length - 1;

          // Append next character
          updated[currentLine] = {
            ...updated[currentLine],
            text: updated[currentLine].text + lines[lineIndex][charIndex],
          };

          return updated;
        });

        charIndex++;

        if (charIndex >= lines[lineIndex].length) {
          lineIndex++;
          charIndex = 0;

          if (lineIndex < lines.length) {
            // Add next line as a new output item
            setOutput((prev) => [...prev, { type, text: '' }]);
          } else {
            return resolve(); // Done typing
          }
        }

        setTimeout(typeChar, 10); // Adjust speed here
      };

      typeChar();
    });
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
          disabled={loading || isTyping}
        />
      </form>

      <div ref={outputEndRef} />
    </div>
  );
};

export default Terminal;