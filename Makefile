deploy:
	docker compose down && docker compose up

stop:
	docker compose down -v

start:
	docker compose up


