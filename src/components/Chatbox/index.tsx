import { useEffect, useState } from "react";
import { CountriesInterface } from "../../utils/interface";
import { detectQueryType, getSystemPrompt } from "../../utils/query";
import {
  Flex,
  PrimaryText,
  quickButtonStyle,
  TextParagraph,
} from "../StyledComponents";

interface ChatComponentProps {
  selectedCountry: CountriesInterface | null;
}
const ChatBox = ({ selectedCountry }: ChatComponentProps) => {
  const [chatMessages, setChatMessages] = useState<
    { role: string; content: string }[]
  >([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCountry) {
      setChatMessages([
        {
          role: "assistant",
          content: `Hello! You are viewing details about ${selectedCountry.name}. How can I assist you today?`,
        },
      ]);
    }
  }, [selectedCountry]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: "user", content: userInput };
    setChatMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsTyping(true);

    try {
      const queryType = detectQueryType(userInput);
      const systemPrompt = selectedCountry
        ? getSystemPrompt(selectedCountry)
        : "No country selected";

      const messages = [
        { role: "system", content: systemPrompt },
        ...chatMessages,
        userMessage,
      ];

      if (queryType === "translation") {
        messages.push({
          role: "system",
          content:
            "Please provide translation in the requested language along with the original text.",
        });
      }
      const response = await fetch("http://localhost:5000/api/chat-stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = JSON.parse(line.slice(6));
            const content = data.choices[0]?.delta?.content || "";
            assistantMessage += content;

            setChatMessages((prev) => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return [
                  ...prev.slice(0, -1),
                  { role: "assistant", content: assistantMessage },
                ];
              }
              return [
                ...prev,
                { role: "assistant", content: assistantMessage },
              ];
            });
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, an error occurred. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };
  return (
    <Flex direction="column" gap="8px" style={{ marginTop: "16px" }}>
      <PrimaryText weight="500">Chat</PrimaryText>
      <Flex>
        <button
          onClick={() =>
            setUserInput("Give me travel recommendations for visiting")
          }
          style={quickButtonStyle}
        >
          🧳 Travel Tips
        </button>
        <button
          onClick={() => setUserInput("Translate this information to ")}
          style={quickButtonStyle}
        >
          🌍 Translate
        </button>
      </Flex>
      <div
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              marginBottom: "8px",
            }}
          >
            <TextParagraph
              style={{
                background: msg.role === "user" ? "#e3f2fd" : "#f5f5f5",
                padding: "8px",
                borderRadius: "8px",
                display: "inline-block",
              }}
            >
              {msg.content}
            </TextParagraph>
          </div>
        ))}
        {isTyping && (
          <TextParagraph style={{ textAlign: "left", fontStyle: "italic" }}>
            Typing...
          </TextParagraph>
        )}
      </div>
      <Flex gap="8px">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </Flex>
    </Flex>
  );
};

export default ChatBox;
