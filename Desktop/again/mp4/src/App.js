import React from 'react'
import "./App.css"
import Layout from './components/Layout/Layout'
import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import "@sendbird/chat-ai-widget/dist/style.css";

export default function App() {
  return <> <Layout />
  <ChatAiWidget
  applicationId="18446FCD-25C5-4E69-BEFD-EF6221DAB3C9" // Your Sendbird Application ID
  botId="trendsph-support" // Your Bot ID
/>
</>
}
