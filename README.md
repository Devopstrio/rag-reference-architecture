<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="150" alt="RAG Reference Architecture Logo" />

<h1>RAG Reference Architecture Platform</h1>

<p><strong>The Strategic Architecture for Enterprise-Grade Retrieval-Augmented Generation Systems.</strong></p>

[![Standard: RAG Intelligence](https://img.shields.io/badge/Standard-RAG--Intelligence-emerald.svg?style=for-the-badge&labelColor=000000)]()
[![Status: Production--Ready](https://img.shields.io/badge/Status-Production--Ready-blue.svg?style=for-the-badge&labelColor=000000)]()
[![Focus: AI--Systems](https://img.shields.io/badge/Focus-AI--Systems-indigo.svg?style=for-the-badge&labelColor=000000)]()

<br/>

> **"Context is the bridge to intelligence."** 
> **RAG Reference Architecture** is an enterprise-grade platform designed to demonstrate the building blocks of scalable, secure, and production-ready Retrieval-Augmented Generation (RAG). It provides the blueprint for document ingestion pipelines, vector search optimization, and LLM integration patterns that ensure accuracy and factual grounding.

</div>

---

## 🏛️ Executive Summary

While Large Language Models (LLMs) are powerful, their knowledge is static and they are prone to hallucinations. Organizations often fail to deploy AI safely because they lack the structured retrieval mechanisms required to ground LLMs in dynamic, authoritative enterprise data, leading to inaccurate outputs and data leakage risks.

This platform provides the **RAG Intelligence Control Plane**. It implements a complete **Retrieval Intelligence Framework**, enabling AI Architects and ML Engineers to manage the RAG lifecycle as a first-class citizen. By automating semantic chunking and orchestrating multi-modal ingestion, we ensure that every AI interaction is contextually aware, factually grounded, and protected with enterprise-grade security guardrails.

---

## 📐 Architecture Storytelling: Principal Reference Models

### 1. Principal Architecture: Global RAG Intelligence & Semantic Retrieval Plane
This diagram illustrates the end-to-end flow from multi-modal document ingestion to vector embedding, semantic retrieval, context-aware prompt assembly, and grounded generation.

```mermaid
graph LR
    %% Subgraph Definitions
    subgraph IngestionHub["Multi-Modal Ingestion Hub"]
        direction TB
        Docs["Corporate Docs (PDF/Office)"]
        Wikis["Knowledge Bases (Confluence/Notion)"]
        Apps["SaaS Data (Slack/Salesforce)"]
        DBs["Structured Data (SQL/NoSQL)"]
    end

    subgraph IntelligenceEngine["Retrieval Intelligence Hub"]
        direction TB
        API["FastAPI RAG Gateway"]
        Chunker["Semantic Chunking Engine"]
        Embedder["Embedding Generator (OAI/Titan)"]
        Retriever["Hybrid Retrieval & Reranker"]
    end

    subgraph VectorPlane["Vector Storage & Lifecycle"]
        direction TB
        VectorDB["Enterprise Vector Store (Pinecone/Milvus)"]
        Index["Vector Indexing (HNSW/IVF)"]
        CDC["CDC Synchronization Hub"]
    end

    subgraph OperationsHub["Institutional AI Hub"]
        direction TB
        Scorecard["RAG Precision Scorecard"]
        Hallucination["Hallucination Detector"]
        Audit["Forensic Retrieval Lake"]
    end

    subgraph DevOps["RAG-as-Code Orchestration"]
        direction TB
        Prompts["GitOps Prompt Registry"]
        TF["Terraform RAG Modules"]
        Privacy["PII & Privacy Filter"]
    end

    %% Flow Arrows
    IngestionHub -->|1. Extract Content| API
    API -->|2. Chunk & Normalize| Chunker
    Chunker -->|3. Generate Vectors| Embedder
    Embedder -->|4. Index Data| Index
    Index -->|5. Store| VectorDB
    
    User["User Query"] -->|6. Request| API
    API -->|7. Retrieve Context| Retriever
    Retriever <-->|8. Vector Lookup| VectorDB
    Retriever -->|9. Scrub PII| Privacy
    Privacy -->|10. Assemble Prompt| API
    
    API -->|11. Generate Answer| User
    API -->|12. Score Result| Scorecard
    Scorecard -->|13. Detect Hallucination| Hallucination
    
    TF -->|14. Provision Hub| IntelligenceEngine
    Prompts -->|15. Update Context| API

    %% Styling
    classDef ingestion fill:#f5f5f5,stroke:#616161,stroke-width:2px;
    classDef intel fill:#e0f2f1,stroke:#004d40,stroke-width:2px;
    classDef vector fill:#e3f2fd,stroke:#0d47a1,stroke-width:2px;
    classDef ops fill:#f3e5f5,stroke:#4a148c,stroke-width:2px;
    classDef devops fill:#fffde7,stroke:#f57f17,stroke-width:2px;

    class IngestionHub ingestion;
    class IntelligenceEngine intel;
    class VectorPlane vector;
    class OperationsHub ops;
    class DevOps devops;
```

### 2. The RAG Lifecycle Management Flow
The continuous path of enterprise knowledge from initial ingestion and embedding to retrieval-augmented generation and auditing.

```mermaid
graph LR
    Ingest["Ingest & Chunk"] --> Embed["Embed & Index"]
    Embed --> Retrieve["Retrieve & Rank"]
    Retrieve --> Augment["Augment & Gen"]
    Augment --> Audit["Forensic Audit"]
```

### 3. Multi-Modal Ingestion Hub
Standardizing the extraction and normalization of data across PDFs, Wikis, SaaS apps, and databases for high-fidelity indexing.

```mermaid
graph LR
    Pdf["Unstructured (PDFs)"] --> Hub["Normalizer"]
    Sql["Structured (SQL)"] --> Hub
    Slack["Conversational (Slack)"] --> Hub
    Hub --> Stream["Semantic Content Stream"]
```

### 4. Semantic Retrieval & Ranking Engine
Combining high-speed vector search with Cross-encoder re-ranking to ensure the most relevant context is delivered to the LLM.

```mermaid
graph TD
    Query["User Query"] --> Vector["Vector Search (Top-100)"]
    Vector --> Rerank["Cross-Encoder Reranker"]
    Rerank --> TopK["Top-K Relevant Chunks"]
```

### 5. Context Injection & Prompt Engineering Flow
The strategic assembly of retrieved document chunks into optimized LLM prompt templates to maximize factual grounding.

```mermaid
graph LR
    Chunks["Retrieved Chunks"] --> Assembler["Prompt Assembler"]
    Query["User Query"] --> Assembler
    Assembler --> Prompt["Grounded LLM Prompt"]
```

### 6. Vector DB Synchronization & Lifecycle
Ensuring the vector index remains in-sync with source data changes through real-time Change Data Capture (CDC) pipelines.

```mermaid
graph LR
    Source["Source DB (Postgres/S3)"] --> Cdc["CDC Monitor"]
    Cdc --> Update["Vector Index Update"]
    Update --> Vector["Live Vector Store"]
```

### 7. Institutional AI Scorecard
Measuring RAG performance across key institutional metrics: Faithfulness (Accuracy), Relevance, and Latency.

```mermaid
graph TD
    Post["RAG Score: 94%"] --> Risk["Accuracy Gap: 6%"]
    Post --- C1["Faithfulness (98%)"]
    Post --- C2["Latency (240ms)"]
```

### 8. Identity & RBAC for AI Access (ACLs)
Managing fine-grained retrieval permissions to ensure users only access document chunks they are authorized to view.

```mermaid
graph TD
    Identity["User Identity"] --> Auth["AuthZ Gateway"]
    Auth -->|Filter| Search["Vector Search + ACLs"]
    Search --> Result["Authorized Results Only"]
```

### 9. Compliance & Privacy Filter (PII)
Automatically detecting and redacting Personally Identifiable Information (PII) before it enters the embedding or retrieval cycle.

```mermaid
graph LR
    Text["Raw Text Chunk"] --> Pii["PII Scanner"]
    Pii -->|Mask| Safe["Anonymized Text"]
    Safe --> Embed["Embedding Engine"]
```

### 10. IaC Deployment: RAG-as-Code Framework
Using Terraform to deploy and manage the versioned distribution of the RAG infrastructure, including vector databases and API gateways.

```mermaid
graph LR
    HCL["Infrastructure Code"] --> TF["Terraform Apply"]
    TF --> Engine["RAG Intelligence Hub"]
    Engine --> Store["Hardened Vector Store"]
```

### 11. Metadata Lake for Forensic RAG Audit
Storing long-term records of every query, retrieved source, and generated response for hallucination investigation and audit.

```mermaid
graph LR
    Query["User Query Event"] --> Stream["Forensic Stream"]
    Stream --> Lake["RAG Metadata Lake"]
    Lake --> Trends["Accuracy & ROI Trends"]
```

---

## 🏛️ Core AI Pillars

1.  **Scalable Ingestion Pipeline**: High-throughput processing of diverse document formats with semantic metadata enrichment.
2.  **High-Performance Vector Store**: Sub-millisecond similarity search using optimized indices and namespaced isolation.
3.  **Advanced Retrieval Strategies**: Hybrid search patterns (Keyword + Semantic) with multi-stage ranking and reranking.
4.  **Context-Aware Generation**: Strategic prompt engineering that injects authoritative context to eliminate hallucinations.
5.  **RAG Evaluation Framework**: Systematic scoring of retrieval precision, context relevance, and answer faithfulness.
6.  **AI Observability**: Deep visibility into pipeline latency, token consumption, and retrieval accuracy for continuous tuning.

---

## 🛠️ Technical Stack & Implementation

### RAG Engine & APIs
*   **Framework**: Python 3.11+ / FastAPI.
*   **Vector Engine**: In-memory optimized vector index with Cosine Similarity support for rapid retrieval.
*   **Chunking Logic**: Semantic-aware chunking with recursive character splitting for high-fidelity context.
*   **Orchestration**: Custom RAG-chain management for multi-stage retrieval and re-ranking.
*   **State Management**: PostgreSQL (Metadata Lake) and Redis (Semantic Cache).

### RAG Dashboard (UI)
*   **Framework**: React 18 / Vite.
*   **Theme**: Dark Emerald / Indigo (AI Systems aesthetic).
*   **Visualization**: Recharts for accuracy tracking, retrieval latency, and hallucination metrics.

### Infrastructure & DevOps
*   **Runtime**: AWS EKS or Azure Kubernetes Service (AKS).
*   **IaC**: Modular Terraform for deploying the RAG hub and vector store distributions.

---

## 🏗️ IaC Mapping (Module Structure)

| Module | Purpose | Real Services |
| :--- | :--- | :--- |
| **`infrastructure/rag_hub`** | Central management plane | EKS, PostgreSQL, Redis |
| **`infrastructure/vectors`** | Vector storage and indexing | Pinecone, Milvus, Weaviate |
| **`infrastructure/ingestion`** | Multi-modal data connectors | AWS Glue, Airbyte, Unstructured |
| **`infrastructure/auditing`** | Forensic AI decision sinks | S3, Athena, Quicksight |

---

## 🚀 Deployment Guide

### Local Principal Environment
```bash
# Clone the RAG platform
git clone https://github.com/devopstrio/rag-reference-architecture.git
cd rag-reference-architecture

# Configure environment
cp .env.example .env

# Launch the RAG stack
make up

# Run a sample RAG query simulation
make query-rag
```

Access the RAG Dashboard at `http://localhost:3000`.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.

---
<div align="center">
  <p>© 2026 Devopstrio. All rights reserved.</p>
</div>
