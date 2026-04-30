import math
from typing import List, Dict, Any

class VectorStore:
    """Enterprise-grade Vector Store simulation with cosine similarity."""
    
    def __init__(self, dimension: int = 384):
        self.dimension = dimension
        self.index = [] # List of {id, vector, content, metadata}

    def add_document(self, doc_id: str, vector: List[float], content: str, metadata: Dict[str, Any]):
        self.index.append({
            "id": doc_id,
            "vector": vector,
            "content": content,
            "metadata": metadata
        })

    def search(self, query_vector: List[float], top_k: int = 5) -> List[Dict]:
        """Performs cosine similarity search."""
        results = []
        for doc in self.index:
            score = self._cosine_similarity(query_vector, doc["vector"])
            results.append({**doc, "score": score})
        
        # Sort by score descending
        results.sort(key=lambda x: x["score"], reverse=True)
        return results[:top_k]

    def _cosine_similarity(self, v1: List[float], v2: List[float]) -> float:
        if len(v1) != len(v2): return 0.0
        dot_product = sum(a * b for a, b in zip(v1, v2))
        norm_a = math.sqrt(sum(a * a for a in v1))
        norm_b = math.sqrt(sum(b * b for b in v2))
        if norm_a == 0 or norm_b == 0: return 0.0
        return dot_product / (norm_a * norm_b)

class RAGPipeline:
    """Core RAG orchestration engine."""
    
    def __init__(self, vector_store: VectorStore):
        self.vector_store = vector_store

    def query(self, query_text: str, query_vector: List[float]) -> Dict[str, Any]:
        # 1. Retrieve
        retrieved_docs = self.vector_store.search(query_vector)
        
        # 2. Build Context
        context = "\n\n".join([doc["content"] for doc in retrieved_docs])
        
        # 3. Generate (Simulated)
        answer = self._simulate_generation(query_text, context)
        
        return {
            "query": query_text,
            "answer": answer,
            "sources": retrieved_docs,
            "context_length": len(context)
        }

    def _simulate_generation(self, query: str, context: str) -> str:
        if not context:
            return "I'm sorry, I don't have enough information in my knowledge base to answer that."
        return f"Based on the retrieved context (length: {len(context)}), the answer to '{query}' is synthesized here. The context mentions key concepts that relate to your query."

if __name__ == "__main__":
    vs = VectorStore()
    vs.add_document("doc1", [0.1, 0.2, 0.3], "Cloud security is critical for zero trust.", {"source": "manual"})
    vs.add_document("doc2", [0.9, 0.8, 0.7], "Cats are mammals that like fish.", {"source": "nature"})
    
    rag = RAGPipeline(vs)
    response = rag.query("Tell me about security", [0.12, 0.22, 0.32])
    print(f"RAG Answer: {response['answer']}")
    print(f"Top Source: {response['sources'][0]['content']}")
