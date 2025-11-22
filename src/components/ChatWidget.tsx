import { useState } from "react";
import { MessageCircle, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const initialAssistantMessage: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I'm the Billionets assistant. Ask me anything about our AI solutions, services, or working with us.",
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialAssistantMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: input.trim() }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = (await res.json()) as { reply?: string };
      const reply = data.reply || "Sorry, I couldn't respond right now. Please try again.";

      setMessages((current) => [...current, { role: "assistant", content: reply }]);
    } catch (e) {
      console.error(e);
      setError("Something went wrong talking to the assistant. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold text-ink shadow-gold hover:scale-105 hover:shadow-lg transition-all duration-200"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-full max-w-sm animate-fade-in-up">
          <div className="rounded-2xl border border-border/80 bg-background/95 shadow-gold backdrop-blur-xl flex flex-col h-[420px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/70">
              <div>
                <p className="text-sm font-semibold text-ink">Billionets Assistant</p>
                <p className="text-xs text-muted-foreground">Ask us about services, process, or projects.</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 text-sm">
              {messages.map((m, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3 py-2 whitespace-pre-wrap", 
                      m.role === "user"
                        ? "bg-accent-gold text-ink shadow-sm"
                        : "bg-surface text-ink border border-border/60",
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground px-1">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Thinking...
                </div>
              )}

              {error && <p className="text-xs text-destructive px-1">{error}</p>}
            </div>

            <div className="border-t border-border/70 px-3 py-2">
              <div className="flex items-end gap-2">
                <textarea
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2 text-xs sm:text-sm text-ink placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
                  placeholder="Ask something about Billionets..."
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="inline-flex h-9 px-4 items-center justify-center rounded-full bg-accent-gold text-xs font-semibold text-ink shadow-gold disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg transition-all duration-200"
                >
                  {isLoading ? "Sending" : "Send"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
