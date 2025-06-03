import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

// Mock Sidebar component
const Sidebar = ({ children, className }) => (
  <div className={className + ' font-[Montserrat]'}>{children}</div>
);

// Mock Avatar components
const Avatar = ({ children }) => <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 font-[Montserrat]">{children}</div>;
const AvatarImage = ({ src }) => <img src={src} alt="avatar" className="w-full h-full rounded-full" />;
const AvatarFallback = ({ children }) => <span className="text-sm font-medium text-gray-700 font-[Montserrat]">{children}</span>;

export default function DashboardLayout() {
  const [messages, setMessages] = useState([
    { role: 'system', text: 'Welcome to InsightAnalytica.AI. Ask your data anything!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessage = { role: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    const botReply = {
      role: 'bot',
      text: `Processing your query: "${newMessage.text}"... (This will be replaced by actual insight from backend)`
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen font-[Montserrat]">
      <Sidebar className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-xl font-bold">InsightAnalytica.AI</div>
        <nav className="flex flex-col gap-2 p-4">
          <Button className="text-left bg-transparent hover:bg-gray-700">Dashboard</Button>
          <Button className="text-left bg-transparent hover:bg-gray-700">Chat</Button>
          <Button className="text-left bg-transparent hover:bg-gray-700">Upload Data</Button>
          <Button className="text-left bg-transparent hover:bg-gray-700">Insights</Button>
          <Button className="text-left bg-transparent hover:bg-gray-700">Settings</Button>
        </nav>
      </Sidebar>

      <div className="flex-1 flex flex-col p-6 bg-gray-50 font-[Montserrat]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Chat with Your Data</h1>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=AI" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <span className="font-medium">Admin</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 max-h-[60vh] mb-4">
          {messages.map((msg, i) => (
            <Card key={i} className={`w-fit max-w-xl ${msg.role === 'user' ? 'ml-auto bg-blue-100' : 'bg-white'}`}>
              <CardContent className="p-2 text-sm font-[Montserrat]">
                <span className="font-semibold capitalize">{msg.role}:</span> {msg.text}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-auto flex gap-2">
          <Input
            className="flex-1 font-[Montserrat]"
            placeholder="Ask a question about your data..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
}
