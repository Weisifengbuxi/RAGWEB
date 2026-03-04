export interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: number
}

/** 对话历史记录（传给后端的格式，不含前端内部字段）*/
export interface HistoryItem {
  role: 'user' | 'assistant'
  content: string
}

/** 手动传入的检索上下文 */
export interface RetrievedContext {
  content: string
  similarity?: number
  source?: string
}

/** POST /v1/rag/chat 请求体 */
export interface ChatRequest {
  question: string
  history?: HistoryItem[]
  contexts?: RetrievedContext[]
  similar_num?: number
  temperature?: number
  max_tokens?: number
  top_p?: number
  stream?: boolean
  enable_thinking?: boolean
  return_thinking?: boolean
  system_prompt_prefix?: string
}

/** POST /v1/rag/chat 响应体 */
export interface ChatResponse {
  id: string
  object: string
  created: number
  question: string
  context_count: number
  contexts: RetrievedContext[]
  choices: {
    index: number
    message: {
      role: 'assistant'
      content: string
    }
    finish_reason: string
  }[]
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}