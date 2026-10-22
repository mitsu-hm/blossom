# Blossom Shoots - Docker local hosting

## Requirements
- Docker Desktop for Windows (running, with Linux containers enabled)

## Start
Open PowerShell in this extracted folder and run:

```powershell
docker compose up -d --build
```

Wait for the build to finish, then open http://localhost:8080

## Commands
```powershell
docker compose ps
docker compose logs -f
docker compose down
docker compose up -d --build
```

The last command rebuilds the site after source changes.

## Notes
- The port is bound to 127.0.0.1, so it is accessible only from this computer.
- React Router URLs fall back to index.html via Nginx.
- This is a production static build; changes to source require rebuilding.
- If port 8080 is already in use, change `8080` in compose.yaml to another port.
