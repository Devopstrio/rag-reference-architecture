import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import RAGDashboard from './pages/RAGDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The RAG reference engine is currently synchronizing global vector indices. This module will be available shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<RAGDashboard />} />
          <Route path="/ingestion" element={<Placeholder name="Document Ingestion Pipeline" />} />
          <Route path="/vectorstore" element={<Placeholder name="Vector Store Management" />} />
          <Route path="/retrieval" element={<Placeholder name="Retrieval Engine Analytics" />} />
          <Route path="/generation" element={<Placeholder name="LLM Generation Engine" />} />
          <Route path="/evaluation" element={<Placeholder name="RAG Evaluation Suite" />} />
          <Route path="/prompts" element={<Placeholder name="RAG Prompt Patterns" />} />
          <Route path="/observability" element={<Placeholder name="RAG Pipeline Observability" />} />
          <Route path="/pipeline" element={<Placeholder name="RAG Pipeline Graph" />} />
          <Route path="/security" element={<Placeholder name="Security & Identity" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
