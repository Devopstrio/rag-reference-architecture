from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_evaluation():
    return {'status': 'ok', 'component': 'evaluation'}
