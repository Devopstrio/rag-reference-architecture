from fastapi import APIRouter, Body
router = APIRouter()
@router.post('/query')
def rag_query(data: dict = Body(...)):
    return {'answer': 'Based on the retrieved context, this is a simulated RAG response.', 'sources': [{'id': 'doc-1', 'score': 0.88}], 'latency': '240ms'}
