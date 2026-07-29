from sqlalchemy.orm import Session
from app.models import Tarefa


def criar_tarefa(db: Session, tarefa):
    nova_tarefa = Tarefa(
        titulo=tarefa.titulo,
        categoria=tarefa.categoria
    )

    db.add(nova_tarefa)
    db.commit()
    db.refresh(nova_tarefa)

    return nova_tarefa


def listar_tarefas(db: Session):
    return db.query(Tarefa).all()


def deletar_tarefa(db: Session, id: int):
    tarefa = db.query(Tarefa).filter(Tarefa.id == id).first()

    if tarefa:
        db.delete(tarefa)
        db.commit()

    return tarefa


def completar_tarefa(db: Session, id: int):
    tarefa = db.query(Tarefa).filter(Tarefa.id == id).first()

    if tarefa:
        tarefa.completa = not tarefa.completa
        db.commit()
        db.refresh(tarefa)

    return tarefa