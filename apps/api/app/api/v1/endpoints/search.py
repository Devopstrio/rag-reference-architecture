from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_search():
    return {'status': 'ok', 'component': 'search'}
