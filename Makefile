up:
	docker-compose up --build

down:
	docker-compose down

down-volumes:
	docker-compose down --volumes

logs:
	docker-compose logs -f

restart:
	docker-compose down && docker-compose up --build

clean:
	docker system prune -af --volumes

backend:
	docker-compose exec backend /bin/sh

frontend:
	docker-compose exec frontend /bin/sh

db:
	docker-compose exec db /bin/sh
