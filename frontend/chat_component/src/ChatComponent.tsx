import React, { useState, useEffect, useRef } from 'react'
import { Streamlit } from 'streamlit-component-lib'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  isStreaming?: boolean
}

interface ChatComponentProps {
  websocketUrl?: string
  sessionId?: string
  initialMessages?: Message[]
}

const ChatComponent: React.FC<ChatComponentProps> = ({
  websocketUrl = 'ws://localhost:8000/ws/chat',
  sessionId = 'default',
  initialMessages = []
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputMessage, setInputMessage] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [currentStreamingMessage, setCurrentStreamingMessage] = useState('')
  const websocketRef = useRef<WebSocket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, currentStreamingMessage])

  useEffect(() => {
    // Connect to WebSocket
    const wsUrl = `${websocketUrl}/${sessionId}`
    websocketRef.current = new WebSocket(wsUrl)

    websocketRef.current.onopen = () => {
      setIsConnected(true)
      console.log('WebSocket connected')
    }

    websocketRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        handleWebSocketMessage(data)
      } catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    }

    websocketRef.current.onclose = () => {
      setIsConnected(false)
      console.log('WebSocket disconnected')
    }

    websocketRef.current.onerror = (error) => {
      console.error('WebSocket error:', error)
      setIsConnected(false)
    }

    return () => {
      if (websocketRef.current) {
        websocketRef.current.close()
      }
    }
  }, [websocketUrl, sessionId])

  const handleWebSocketMessage = (data: any) => {
    switch (data.type) {
      case 'message_received':
        setIsTyping(true)
        break

      case 'stream_start':
        setIsTyping(true)
        setCurrentStreamingMessage('')
        // Add placeholder message for streaming
        const streamingMessageId = `streaming-${Date.now()}`
        setMessages(prev => [...prev, {
          id: streamingMessageId,
          role: 'assistant',
          content: '',
          timestamp: new Date(),
          isStreaming: true
        }])
        break

      case 'token':
        setCurrentStreamingMessage(prev => prev + data.token)
        // Update the streaming message
        setMessages(prev => prev.map(msg => 
          msg.isStreaming 
            ? { ...msg, content: data.partial_response }
            : msg
        ))
        break

      case 'stream_end':
        setIsTyping(false)
        setCurrentStreamingMessage('')
        // Finalize the streaming message
        setMessages(prev => prev.map(msg => 
          msg.isStreaming 
            ? { ...msg, content: data.full_response, isStreaming: false }
            : msg
        ))
        
        // Notify Streamlit of the complete response
        Streamlit.setComponentValue({
          type: 'message_complete',
          message: data.full_response,
          timestamp: new Date().toISOString()
        })
        break

      case 'error':
        setIsTyping(false)
        setCurrentStreamingMessage('')
        setMessages(prev => [...prev, {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: `❌ Erro: ${data.message}`,
          timestamp: new Date(),
          isStreaming: false
        }])
        break

      default:
        console.log('Unknown message type:', data.type)
    }
  }

  const sendMessage = () => {
    if (!inputMessage.trim() || !isConnected) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    }

    // Add user message to chat
    setMessages(prev => [...prev, userMessage])

    // Send to WebSocket
    if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
      websocketRef.current.send(JSON.stringify({
        message: inputMessage.trim()
      }))
    }

    setInputMessage('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  const clearChat = () => {
    setMessages([])
    setCurrentStreamingMessage('')
    Streamlit.setComponentValue({
      type: 'chat_cleared',
      timestamp: new Date().toISOString()
    })
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '600px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px' }}>🤖</span>
          <span style={{ fontWeight: 'bold' }}>Assistente IA</span>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: isConnected ? '#28a745' : '#dc3545'
          }} />
        </div>
        <button
          onClick={clearChat}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '14px',
            padding: '4px 8px',
            borderRadius: '4px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Limpar
        </button>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {messages.length === 0 && (
          <div style={{
            textAlign: 'center',
            color: '#666',
            fontStyle: 'italic',
            marginTop: '50px'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤖</div>
            <div>Olá! Sou seu assistente especializado em análise de dados de bovinos.</div>
            <div style={{ marginTop: '8px', fontSize: '14px' }}>
              Faça uma pergunta sobre seus dados ou zootecnia!
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '8px'
            }}
          >
            <div
              style={{
                maxWidth: '70%',
                padding: '12px 16px',
                borderRadius: '18px',
                backgroundColor: message.role === 'user' ? '#007bff' : '#ffffff',
                color: message.role === 'user' ? '#ffffff' : '#333333',
                border: message.role === 'assistant' ? '1px solid #e0e0e0' : 'none',
                position: 'relative',
                wordWrap: 'break-word'
              }}
            >
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {message.content}
                {message.isStreaming && (
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '16px',
                    backgroundColor: '#007bff',
                    marginLeft: '4px',
                    animation: 'blink 1s infinite'
                  }} />
                )}
              </div>
              <div style={{
                fontSize: '11px',
                opacity: 0.7,
                marginTop: '4px',
                textAlign: 'right'
              }}>
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}

        {isTyping && !currentStreamingMessage && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start'
          }}>
            <div style={{
              padding: '12px 16px',
              backgroundColor: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e0e0e0',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#007bff',
                animation: 'pulse 1.5s infinite'
              }} />
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#007bff',
                animation: 'pulse 1.5s infinite',
                animationDelay: '0.2s'
              }} />
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#007bff',
                animation: 'pulse 1.5s infinite',
                animationDelay: '0.4s'
              }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: '16px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e0e0e0'
      }}>
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'flex-end'
        }}>
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isConnected ? "Digite sua pergunta..." : "Conectando..."}
            disabled={!isConnected || isTyping}
            style={{
              flex: 1,
              minHeight: '40px',
              maxHeight: '120px',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '20px',
              resize: 'none',
              fontFamily: 'inherit',
              fontSize: '14px',
              outline: 'none'
            }}
          />
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim() || !isConnected || isTyping}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: isConnected && inputMessage.trim() && !isTyping ? '#007bff' : '#ccc',
              color: 'white',
              cursor: isConnected && inputMessage.trim() && !isTyping ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px'
            }}
          >
            ➤
          </button>
        </div>
        
        {!isConnected && (
          <div style={{
            marginTop: '8px',
            fontSize: '12px',
            color: '#dc3545',
            textAlign: 'center'
          }}>
            ⚠️ Desconectado. Verifique a conexão com o servidor.
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>
    </div>
  )
}

export default ChatComponent
