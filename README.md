# Express.js REST API

This is a RESTful API built using **Express.js** and containerized with **Docker**. The project includes a `Makefile` to streamline Docker operations such as building images, starting/stopping containers, viewing logs, and accessing the application container.

## Prerequisites

Ensure the following tools are installed on your system:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU Make](https://www.gnu.org/software/make/)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```
## Usage
All Docker operations are managed via the provided Makefile.

### Start the Containers
Start the application and all dependent services using Docker Compose:

```bash
make up
```

### Stop the Containers
Gracefully stop all running services:

```bash
make down
```

### Build Docker Images
Build or rebuild Docker images for the services:
```bash
make build
```

### View Logs
View real-time logs for the running services:
```bash
make log
```

### Access the Application Container
Access a shell inside the express_app container:
```bash
make bash
```
## Project Structure

```text
.
├── docker-compose.yml       # Docker Compose configuration
├── Makefile                 # Makefile for Docker operations
├── src/                     # Express application source code
├── package.json             # Node.js dependencies and scripts
├── .env.example             # Example environment file
└── README.md                # Project documentation
```
## License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

