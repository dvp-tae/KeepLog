from fastapi.testclient import TestClient


def create_item(client: TestClient, **overrides) -> dict:
    payload = {"name": "테스트 아이템", "description": "설명", **overrides}
    response = client.post("/items", json=payload)
    assert response.status_code == 201
    return response.json()


class TestCreateItem:
    def test_creates_item(self, client: TestClient):
        response = client.post("/items", json={"name": "새 아이템"})

        assert response.status_code == 201
        body = response.json()
        assert body["name"] == "새 아이템"
        assert body["description"] is None
        assert body["id"] > 0
        assert body["created_at"] is not None

    def test_rejects_empty_name(self, client: TestClient):
        response = client.post("/items", json={"name": ""})

        assert response.status_code == 422
        error = response.json()["error"]
        assert error["code"] == "VALIDATION_ERROR"
        assert error["details"][0]["field"] == "body.name"

    def test_rejects_missing_name(self, client: TestClient):
        response = client.post("/items", json={"description": "이름 없음"})

        assert response.status_code == 422
        assert response.json()["error"]["code"] == "VALIDATION_ERROR"


class TestReadItems:
    def test_lists_items_newest_first(self, client: TestClient):
        first = create_item(client, name="첫 번째")
        second = create_item(client, name="두 번째")

        response = client.get("/items")

        assert response.status_code == 200
        ids = [item["id"] for item in response.json()]
        assert ids == [second["id"], first["id"]]

    def test_gets_item_by_id(self, client: TestClient):
        item = create_item(client)

        response = client.get(f"/items/{item['id']}")

        assert response.status_code == 200
        assert response.json() == item

    def test_returns_404_for_missing_item(self, client: TestClient):
        response = client.get("/items/999999")

        assert response.status_code == 404
        assert response.json() == {"error": {"code": "NOT_FOUND", "message": "Item not found"}}

    def test_rejects_non_numeric_id(self, client: TestClient):
        response = client.get("/items/abc")

        assert response.status_code == 422


class TestUpdateItem:
    def test_updates_only_sent_fields(self, client: TestClient):
        item = create_item(client, name="원래 이름", description="원래 설명")

        response = client.patch(f"/items/{item['id']}", json={"name": "바뀐 이름"})

        assert response.status_code == 200
        body = response.json()
        assert body["name"] == "바뀐 이름"
        assert body["description"] == "원래 설명"

    def test_clears_description_with_null(self, client: TestClient):
        item = create_item(client)

        response = client.patch(f"/items/{item['id']}", json={"description": None})

        assert response.status_code == 200
        assert response.json()["description"] is None

    def test_rejects_null_name(self, client: TestClient):
        item = create_item(client)

        response = client.patch(f"/items/{item['id']}", json={"name": None})

        assert response.status_code == 422
        assert response.json()["error"]["code"] == "VALIDATION_ERROR"

    def test_returns_404_for_missing_item(self, client: TestClient):
        response = client.patch("/items/999999", json={"name": "없음"})

        assert response.status_code == 404


class TestDeleteItem:
    def test_deletes_item(self, client: TestClient):
        item = create_item(client)

        response = client.delete(f"/items/{item['id']}")

        assert response.status_code == 204
        assert client.get(f"/items/{item['id']}").status_code == 404

    def test_returns_404_for_missing_item(self, client: TestClient):
        response = client.delete("/items/999999")

        assert response.status_code == 404
