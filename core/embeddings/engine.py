import re
from typing import List

class DocumentChunker:
    """Splits long documents into manageable chunks for indexing."""
    
    def __init__(self, chunk_size: int = 500, chunk_overlap: int = 50):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap

    def chunk_text(self, text: str) -> List[str]:
        # Simple whitespace chunking for simulation
        words = text.split()
        chunks = []
        
        i = 0
        while i < len(words):
            chunk_words = words[i:i + self.chunk_size]
            chunks.append(" ".join(chunk_words))
            i += (self.chunk_size - self.chunk_overlap)
            
        return chunks

class EmbeddingEngine:
    """Simulates text embedding generation."""
    
    def generate_embedding(self, text: str) -> List[float]:
        # Return a deterministic mock vector based on text length and char sums
        text_sum = sum(ord(c) for c in text)
        return [(text_sum % (i + 1)) / 100.0 for i in range(384)]

if __name__ == "__main__":
    chunker = DocumentChunker(chunk_size=10, chunk_overlap=2)
    sample = "The quick brown fox jumps over the lazy dog. Information retrieval is the science of searching for information in a document."
    chunks = chunker.chunk_text(sample)
    print(f"Chunks created: {len(chunks)}")
    
    engine = EmbeddingEngine()
    vector = engine.generate_embedding(chunks[0])
    print(f"Vector Length: {len(vector)}")
    print(f"Sample values: {vector[:5]}")
