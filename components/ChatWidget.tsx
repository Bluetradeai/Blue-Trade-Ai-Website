'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'bot' | 'user';
  content: string;
  showQuickReplies?: boolean;
  showLeadCapture?: boolean;
}

interface ChatLead {
  name: string;
  phone: string;
  timestamp: string;
}

const QUICK_REPLIES = ['Our Services', 'How It Works', 'Get a Quote', 'Industries We Serve'];

function getBotResponse(message: string): { text: string; showLeadCapture?: boolean } {
  const m = message.toLowerCase();

  if (m.includes('service') || m.includes('what do you do') || m.includes('offer')) {
    return {
      text: `We offer four core services for trade and home service businesses:\n\n1. AI-Powered Website Builds — conversion-focused sites that generate calls\n2. Google Ads Management — targeted campaigns for high-intent local customers\n3. Lead Tracking and Reporting — know exactly where every lead comes from\n4. Automation and AI Tools — follow-up and operational efficiency systems\n\nWant details on any of these?`,
    };
  }

  if (m.includes('cost') || m.includes('price') || m.includes('how much') || m.includes('pricing')) {
    return {
      text: `Every business is different, so we build custom plans. What we can tell you is that our systems are designed to generate more revenue than they cost — that's the only metric that matters. Let's talk specifics on a free strategy call. Want to schedule one?`,
      showLeadCapture: true,
    };
  }

  if (
    m.includes('how') ||
    m.includes('process') ||
    m.includes('get started') ||
    m.includes('how it works')
  ) {
    return {
      text: `Our process has four steps:\n\n1. Discovery — we learn your business and goals\n2. System Design — we build the right combination of tools for your operation\n3. Launch — we deploy and start generating results\n4. Ongoing Optimization — we continuously improve based on real data\n\nReady to start? I can connect you with our team right now.`,
      showLeadCapture: true,
    };
  }

  if (
    m.includes('plumbing') ||
    m.includes('roofing') ||
    m.includes('electrical') ||
    m.includes('painting') ||
    m.includes('concrete') ||
    m.includes('landscaping') ||
    m.includes('lawn') ||
    m.includes('tree') ||
    m.includes('gutter') ||
    m.includes('flooring') ||
    m.includes('junk') ||
    m.includes('framing') ||
    m.includes('contractor') ||
    m.includes('trade') ||
    m.includes('home service') ||
    m.includes('industries')
  ) {
    return {
      text: `Yes — that's exactly who we work with. Blue Trade AI works exclusively with trade and home service businesses. We understand your customers, your market, and what it takes to win online in your industry. Want to see what a growth system looks like for your specific business?`,
      showLeadCapture: true,
    };
  }

  if (
    m.includes('quote') ||
    m.includes('consultation') ||
    m.includes('talk') ||
    m.includes('call') ||
    m.includes('schedule') ||
    m.includes('contact') ||
    m.includes('reach out') ||
    m.includes('get a quote')
  ) {
    return {
      text: `I'd love to connect you with our team. Drop your name and number below and someone will be in touch within one business day.`,
      showLeadCapture: true,
    };
  }

  return {
    text: `That's a great question. Our team would be best equipped to answer that directly. Can I grab your name and number so we can reach out?`,
    showLeadCapture: true,
  };
}

function TypingIndicator() {
  return (
    <div className="flex gap-1.5 items-center px-4 py-3 bg-white border border-gray-200 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] self-start">
      <span className="typing-dot w-2 h-2 bg-[#1A4D8F] rounded-full" />
      <span className="typing-dot w-2 h-2 bg-[#1A4D8F] rounded-full" />
      <span className="typing-dot w-2 h-2 bg-[#1A4D8F] rounded-full" />
    </div>
  );
}

function LeadCaptureForm({ onSubmit }: { onSubmit: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please enter your name and phone number.');
      return;
    }
    const leads = JSON.parse(localStorage.getItem('bluetradeai_chat_leads') || '[]') as ChatLead[];
    leads.push({ name: name.trim(), phone: phone.trim(), timestamp: new Date().toISOString() });
    localStorage.setItem('bluetradeai_chat_leads', JSON.stringify(leads));
    setSubmitted(true);
    onSubmit();
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
        Perfect! A member of our team will call you within one business day. Thanks for reaching out.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm space-y-2 mt-1"
      aria-label="Lead capture form"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-[#1A4D8F] focus:border-transparent outline-none"
        aria-label="Your name"
      />
      <input
        type="tel"
        placeholder="Your Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-[#1A4D8F] focus:border-transparent outline-none"
        aria-label="Your phone number"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
      <button
        type="submit"
        className="bg-[#1A4D8F] text-white w-full py-2 rounded-lg text-sm font-semibold mt-1 hover:bg-[#2563EB] transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#1A4D8F]"
        aria-label="Connect me with the Blue Trade AI team"
      >
        Connect Me With the Team
      </button>
    </form>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [exchangeCount, setExchangeCount] = useState(0);
  const [nudgeSent, setNudgeSent] = useState(false);
  const [leadCaptureSubmitted, setLeadCaptureSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initialize chat with welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'bot',
          content:
            "Hi there! I'm the Blue Trade AI assistant. I can answer questions about our services, tell you how we work, or connect you with our team. What can I help you with?",
          showQuickReplies: true,
        },
      ]);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, messages.length]);

  // Listen for openChat events from Services cards
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string }>;
      setIsOpen(true);
      setTimeout(() => {
        sendMessage(customEvent.detail.message);
      }, 400);
    };
    window.addEventListener('openChat', handler);
    return () => window.removeEventListener('openChat', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addBotMessage = useCallback(
    (content: string, showLeadCapture?: boolean) => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            role: 'bot',
            content,
            showLeadCapture,
          },
        ]);
      }, 800);
    },
    []
  );

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMsg: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: trimmed,
      };
      setMessages((prev) => [...prev, userMsg]);
      setInputValue('');

      const newExchangeCount = exchangeCount + 1;
      setExchangeCount(newExchangeCount);

      const { text: responseText, showLeadCapture } = getBotResponse(trimmed);

      // Check if we should inject nudge after 2 exchanges without lead capture
      if (newExchangeCount === 2 && !nudgeSent && !leadCaptureSubmitted && !showLeadCapture) {
        setTimeout(() => {
          addBotMessage(responseText, showLeadCapture);
          setTimeout(() => {
            setNudgeSent(true);
            addBotMessage(
              "By the way — if it's easier, I can have someone from our team reach out directly. Want to leave your name and number?",
              true
            );
          }, 1200);
        }, 0);
      } else {
        addBotMessage(responseText, showLeadCapture);
      }
    },
    [exchangeCount, nudgeSent, leadCaptureSubmitted, addBotMessage]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage(inputValue);
    }
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  const handleLeadCaptureSubmit = () => {
    setLeadCaptureSubmitted(true);
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-[#1A4D8F] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#2563EB] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4D8F]"
          aria-label={isOpen ? 'Close chat assistant' : 'Open Blue Trade AI chat assistant'}
          aria-expanded={isOpen}
        >
          {/* Pulse ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#1A4D8F] animate-ping opacity-20 pointer-events-none" />
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                viewBox="0 0 24 24"
                fill="none"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                viewBox="0 0 28 28"
                fill="none"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  d="M4 6C4 4.89543 4.89543 4 6 4H22C23.1046 4 24 4.89543 24 6V17C24 18.1046 23.1046 19 22 19H15L10 24V19H6C4.89543 19 4 18.1046 4 17V6Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="10" cy="12.5" r="1.5" fill="white" />
                <circle cx="14" cy="12.5" r="1.5" fill="white" />
                <circle cx="18" cy="12.5" r="1.5" fill="white" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
            style={{ height: '520px' }}
            role="dialog"
            aria-label="Blue Trade AI chat assistant"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-[#1A4D8F] rounded-t-2xl px-5 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7" aria-hidden="true">
                  <rect x="3" y="3" width="22" height="22" rx="4" stroke="white" strokeWidth="2" />
                  <circle cx="10" cy="11" r="2" fill="white" />
                  <circle cx="18" cy="11" r="2" fill="white" />
                  <path d="M8 17c1.2 2 10.8 2 12 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div>
                  <div className="text-white font-bold text-sm">Blue Trade AI Assistant</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full" aria-hidden="true" />
                    <span className="text-green-300 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-white rounded"
                aria-label="Close chat"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50 flex flex-col gap-3 chat-messages"
              aria-live="polite"
              aria-label="Chat messages"
            >
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col gap-2">
                  <div
                    className={`max-w-[85%] text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'bot'
                        ? 'bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-3 text-[#0F172A] self-start shadow-sm'
                        : 'bg-[#1A4D8F] text-white rounded-2xl rounded-tr-none px-4 py-3 self-end ml-auto'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {/* Quick reply buttons */}
                  {msg.showQuickReplies && (
                    <div className="flex flex-wrap gap-2 self-start">
                      {QUICK_REPLIES.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          className="border border-[#1A4D8F] text-[#1A4D8F] rounded-full px-3 py-1 text-xs hover:bg-[#1A4D8F] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#1A4D8F]"
                          aria-label={reply}
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Lead capture form */}
                  {msg.showLeadCapture && (
                    <div className="self-start w-full max-w-[85%]">
                      <LeadCaptureForm onSubmit={handleLeadCaptureSubmit} />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 px-4 py-3 bg-white rounded-b-2xl flex items-center gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#1A4D8F] focus:border-transparent outline-none"
                aria-label="Type your message"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="bg-[#1A4D8F] text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#2563EB] transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#1A4D8F]"
                aria-label="Send message"
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M14 8L2 2L5 8L2 14L14 8Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
