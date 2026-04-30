.PHONY: help build up down test lint migrate ingest-docs query-rag

help:
	@echo "RAG Reference Architecture - Management Commands"
	@echo "----------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Integration)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "ingest-docs        : Execute document ingestion pipeline"
	@echo "query-rag          : Run a sample RAG query"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/unit tests/integration
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker core
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

ingest-docs:
	docker-compose exec api python scripts/ingest/run.py --path data/samples/cloud_security.txt

query-rag:
	docker-compose exec api python scripts/query/run.py --query "What is zero trust networking?"
