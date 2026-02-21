import React from "react";
import { Content, SectionHeading } from '@/components'
import type { projectInterface } from "@/interface";
import { ProjectCard } from "@/components/ProjectCard";

export const Project: React.FC = () => {
    const projects: projectInterface[] = [
        {
            title: 'parser',
            content: "Production-ready RAG pipeline using LangChain for conversational Q&A over PDFs. Background processing via Redis workers, JWT auth, Docker Compose orchestration with S3, Postgres (pgvector).",
            skills: ["React", "Node.js", "PostgreSQL", "LangChain", "Redis", "Docker"],
            githubLink: "https://github.com/sameera-g-mathad/parser",
            featured: true,
            live: 'https://parser.mathad.dev/'
        },
        {
            title: "English-Indic Transformer",
            content:
                "Built a ~93M parameter encoder-decoder Transformer from scratch in PyTorch for English-Hindi translation. Trained on 1.7M sentence pairs, achieving ~6.3 BLEU. 40% decoding speedup via KV caching.",
            skills: ["PyTorch", "Transformers", "SentencePiece"],
            githubLink: "https://github.com/sameera-g-mathad/eng-indic-transformer",
            featured: true,
        },
        {
            title: "Chat App on Indian History",
            content:
                "Dual GPT-2 pipeline fine-tuned with LoRA on 14K+ historical Q&A samples. Full-stack with React Native frontend and dual FastAPI model servers.",
            skills: ["React Native", "FastAPI", "GPT-2", "LoRA"],
            githubLink: 'https://github.com/sameera-g-mathad/chat-app-on-indian-history',

        },
        {
            title: "Graph Traverser",
            content:
                "Interactive visualization of BFS, DFS, UCS, and A* algorithms using TypeScript and HTML Canvas. Supports mazes, weighted graphs, and wall placement.",
            skills: ["TypeScript", "Canvas", "Vite"],
            githubLink: 'https://github.com/sameera-g-mathad/graph-traverser',
            live: 'https://graph-traverser.mathad.dev/'

        },
        {
            title: "Scientific Text Classification",
            content:
                "Fine-tuned DistilBERT on 40K samples across 10 domains (F1: 0.86). CI/CD with GitHub Actions, DVC versioning, Dockerized FastAPI on GCP Cloud Run.",
            skills: ["DistilBERT", "FastAPI", "Docker", "GCP"],
            githubLink: 'https://github.com/sameera-g-mathad/teamOps',

        },
        {
            title: "Ollama Bot",
            content:
                "Conversational app with Next.js and Ollama API. IndexedDB for persistent chat history, model management UI, and online/offline status tracking.",
            skills: ["Next.js", "TypeScript", "Ollama", "IndexedDB"],
            githubLink: 'https://github.com/sameera-g-mathad/ollama_bot_react',
            live: 'https://ollamabot.mathad.dev/'

        },
    ];

    return <Content>
        <div id='projects' className="w-full h-full">
            <SectionHeading sectionHeading="projects" sectionNumber="03" />

            <div className="flex h-[90%] lg:mt-0 mt-5  flex-wrap gap-5 justify-center items-center pt-5 overflow-y-scroll">
                {projects.map((el, i) =>
                    <ProjectCard key={i} project={el} />
                )}
            </div>
        </div>
    </Content>
};


Project.displayName = 'Project';