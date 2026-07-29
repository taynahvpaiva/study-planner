from pydantic import BaseModel

class TarefaCreate(BaseModel):
    titulo: str
    categoria: str

class TarefaResponse(BaseModel):
    id: int
    titulo: str
    categoria: str
    completa: bool

    class Config:
        from_attributes = True