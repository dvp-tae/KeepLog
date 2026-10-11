from fastapi import FastAPI

from app.api.routes import health, items
from app.core.error_handlers import register_error_handlers

app = FastAPI(title="app")

register_error_handlers(app)

app.include_router(health.router)
app.include_router(items.router)
