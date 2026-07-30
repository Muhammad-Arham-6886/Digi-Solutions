'use client';

import React from 'react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AiAutomationSection() {
  const capabilities = [
    'Autonomous 24/7 AI Customer Service Agents',
    'RAG Vector Knowledge Bases (Pinecone, Weaviate)',
    'Document Parsing & Automatic Invoice Extraction',
    'Automated Multi-Channel Lead Routing & Scoring',
    'Custom LLM Fine-Tuning & Prompt Pipelines',
  ];

  return (
    <section className="py-28 bg-[#121118] text-white border-t border-[#8069BF]/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#8069BF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1823] border border-[#8069BF]/30 text-xs font-mono font-semibold text-[#D8CEF6] shadow-glow-vox">
              <span>[ NEXT-GEN ENTERPRISE AI ]</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight">
              Transform Workflows with <span className="text-gradient-vox">AI Agents</span>
            </h2>

            <p className="text-[#7C7296] text-sm sm:text-base leading-relaxed font-light">
              Move beyond basic chatbots. VOX Digital designs custom AI agents connected to your real-time APIs, vector knowledge bases, and CRM pipelines to automate high-friction operational tasks.
            </p>

            <ul className="space-y-3 font-mono text-xs text-slate-300">
              {capabilities.map((cap, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A74D] flex-shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link href="/services/ai-agents-business-automation">
                <MagneticButton variant="primary" size="md" className="font-bold">
                  <span>Explore AI Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
            </div>
          </div>

          {/* Right Visual Interactive Terminal Mockup */}
          <GlassCard hoverGlow={false} className="border-[#8069BF]/20 bg-[#1A1823] p-6 space-y-4 shadow-glass-vox">
            <div className="flex items-center justify-between border-b border-[#8069BF]/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-[#C9A74D]" />
                <div className="w-3 h-3 rounded-full bg-[#8069BF]" />
                <span className="text-xs font-mono text-[#7C7296] ml-2">vox-ai-agent-v2.py</span>
              </div>
              <span className="text-[10px] font-mono text-[#C9A74D] px-2 py-0.5 bg-[#C9A74D]/15 border border-[#C9A74D]/30 rounded font-semibold">SYSTEM LIVE</span>
            </div>

            <div className="font-mono text-xs space-y-2 text-slate-300 pt-2">
              <p className="text-[#7C7296]">[14:32:01] Initializing Vector Embeddings Knowledge Base...</p>
              <p className="text-[#8069BF]">[14:32:02] Query: &quot;Find shipping status for Order #88219&quot;</p>
              <p className="text-[#7C7296]">[14:32:03] RAG Retrieval via Pinecone vector index (0.012s)</p>
              <p className="text-[#C9A74D]">[14:32:03] Agent Executed REST Action: Update Order Status -&gt; In Transit</p>
              <p className="text-slate-200 bg-[#121118] p-3 rounded border border-[#8069BF]/20 text-[11px] leading-relaxed">
                &quot;Order #88219 has passed customs inspection and is scheduled for final mile delivery today by 4:00 PM.&quot;
              </p>
              <p className="text-xs text-[#8069BF] font-bold pt-2">✔ Response Time: 42ms | Accuracy: 100% | Zero Hallucination</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
