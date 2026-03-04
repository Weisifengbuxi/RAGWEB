import axios from 'axios'
import type { ChatRequest, ChatResponse } from '../types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 120000,
})

export const sendMessage = async (data: ChatRequest): Promise<ChatResponse> => {
  const response = await api.post<ChatResponse>('/v1/rag/chat', data)
  return response.data
}