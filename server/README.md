# server

FastAPI + PostgreSQL API 서버입니다. ORM은 SQLAlchemy, 마이그레이션은 Alembic을 씁니다.

## 처음 세팅

```bash
cd server
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
cp .env.example .env
docker compose up -d          # 로컬 Postgres 실행 (Docker Desktop이 켜져 있어야 함)
alembic upgrade head          # 테이블 생성
```

## 개발

```bash
source .venv/bin/activate     # 터미널을 새로 열 때마다 필요
uvicorn app.main:app --reload
```

- Swagger UI: http://localhost:8000/docs
- 헬스체크: http://localhost:8000/health

## 테스트와 린트

```bash
pytest                        # 로컬 Postgres 컨테이너가 떠 있어야 함 (app_test DB를 따로 사용)
ruff check . && ruff format --check .
ruff check --fix . && ruff format .   # 자동 수정
```

커밋할 때는 린트, 푸시할 때는 테스트가 git 훅으로 자동 실행됩니다.

## DB 스키마 변경

1. `app/models/`에서 모델 수정 (새 모델이면 `app/models/__init__.py`에도 import 추가)
2. `alembic revision --autogenerate -m "변경 내용"`
3. `alembic/versions/`에 생성된 파일을 **반드시 열어서 확인**
4. `alembic upgrade head`

DataGrip 등에서 테이블 구조를 직접 바꾸지 마세요. Alembic 기록과 실제 DB가 어긋납니다.

## 에러 응답 형식

모든 에러는 같은 형식으로 응답합니다. 클라이언트는 `error.code`로 분기하면 됩니다.

```json
{"error": {"code": "NOT_FOUND", "message": "Item not found"}}
{"error": {"code": "VALIDATION_ERROR", "message": "Invalid request",
  "details": [{"field": "body.name", "message": "String should have at least 1 character"}]}}
```

| code | 상태코드 | 의미 |
|---|---|---|
| `VALIDATION_ERROR` | 422 | 요청 값 검증 실패 |
| `NOT_FOUND` | 404 | 리소스 또는 경로 없음 |
| `METHOD_NOT_ALLOWED` | 405 | 허용되지 않은 HTTP 메서드 |
| `INTERNAL_ERROR` | 500 | 서버 내부 오류 (상세 내용은 서버 로그에만 기록) |
