from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from app.database import Base, engine, SessionLocal
from app.schemas import TarefaCreate, TarefaResponse
from app import crud


Base.metadata.create_all(bind=engine)

app = FastAPI()


def pegar_banco():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {
        "mensagem": "API Lista de Tarefas funcionando!"
    }


@app.get("/categorias")
def categorias():
    return [
        "Estudos",
        "Pessoal",
        "Trabalho"
    ]


@app.get("/tarefas")
def listar(db: Session = Depends(pegar_banco)):
    return crud.listar_tarefas(db)


@app.post("/tarefas", response_model=TarefaResponse)
def criar(
    tarefa: TarefaCreate,
    db: Session = Depends(pegar_banco)
):
    return crud.criar_tarefa(db, tarefa)


@app.patch("/tarefas/{id}/completar")
def completar(
    id: int,
    db: Session = Depends(pegar_banco)
):
    return crud.completar_tarefa(db, id)


@app.delete("/tarefas/{id}")
def deletar(
    id: int,
    db: Session = Depends(pegar_banco)
):
    return crud.deletar_tarefa(db, id)