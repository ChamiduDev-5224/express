# Variables
COMPOSE_FILE=docker-compose.yml
DOCKER_COMPOSE=docker-compose
LOG_OPTIONS=--tail="100" --follow

# Targets
.PHONY: up down logs build clean bash help

up:
	@echo "Starting Docker containers..."
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) up -d --remove-orphans

down:
	@echo "Stopping Docker containers..."
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) down

logs:
	@echo "Displaying container logs..."
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) logs $(LOG_OPTIONS)

build:
	@echo "Building Docker images..."
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) build

clean:
	@echo "Removing Docker containers, networks, and volumes..."
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) down -v

bash:
	@echo "Accessing the express_app container..."
	$(DOCKER_COMPOSE) exec -it express_app bash

help:
	@echo "Available commands:"
	@echo "  make up     - Start the Docker containers"
	@echo "  make down   - Stop the Docker containers"
	@echo "  make logs   - View logs for running containers"
	@echo "  make build  - Build Docker images"
	@echo "  make clean  - Remove containers, networks, and volumes"
	@echo "  make bash   - Open Bash shell in express_app container"