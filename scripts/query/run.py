import sys
import argparse
from core.rag.engine import VectorStore, RAGPipeline
from core.embeddings.engine import EmbeddingEngine, DocumentChunker

def run_query(query_text: str):
    # 1. Initialize Engines
    vs = VectorStore()
    embedding_engine = EmbeddingEngine()
    chunker = DocumentChunker(chunk_size=100, chunk_overlap=20)
    
    # 2. Mock Ingestion
    knowledge_base = [
        "Zero Trust networking is a security framework requiring all users to be authenticated and authorized.",
        "Cloud security involves protecting data, applications, and infrastructures in the cloud.",
        "Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications."
    ]
    
    for i, doc in enumerate(knowledge_base):
        chunks = chunker.chunk_text(doc)
        for j, chunk in enumerate(chunks):
            vector = embedding_engine.generate_embedding(chunk)
            vs.add_document(f"doc-{i}-{j}", vector, chunk, {"source": "KB"})
            
    # 3. Process Query
    print(f"--- RAG Intelligence Simulation ---")
    print(f"Query: {query_text}")
    
    query_vector = embedding_engine.generate_embedding(query_text)
    rag_pipeline = RAGPipeline(vs)
    
    print(f"Retrieving Context and Generating Answer...")
    response = rag_pipeline.query(query_text, query_vector)
    
    print(f"\n[ANSWER]\n{response['answer']}")
    print(f"\n[SOURCES]")
    for src in response['sources']:
        print(f"- [{src['score']:.4f}] {src['content'][:100]}...")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--query", default="What is zero trust?")
    args = parser.parse_args()
    run_query(args.query)
