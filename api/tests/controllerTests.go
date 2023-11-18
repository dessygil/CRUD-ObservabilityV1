package tests

//TODO - add tests for all functions in controller
import (
	"api/responses"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"

	"api/controllers"
)

func TestCreatePost(t *testing.T) {
	// Create a new Gin context for testing.
	c, _ := gin.CreateTestContext(httptest.NewRecorder())

	// Prepare a sample JSON request.
	jsonData := `{"name": "Test Post", "header": "Test Header", "content": "Test Content"}`
	c.Request = httptest.NewRequest("POST", "/post", strings.NewReader(jsonData))
	c.Request.Header.Set("Content-Type", "application/json")

	// Call the CreatePost handler function.
	controllers.CreatePost()(c)

	// Assert the response status code.
	assert.Equal(t, http.StatusCreated, c.Writer.Status())

	// Parse the response and assert the expected data structure.
	var response responses.UserResponse
	err := json.Unmarshal(c.Writer.Body.Bytes(), &response)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusCreated, response.Status)
	assert.Equal(t, "success", response.Message)

}

func TestCreatePostFails(t *testing.T) {

}

func TestGetPost(t *testing.T) {

}

func TestGetPostFails(t *testing.T) {

}

func TestEditPost(t *testing.T) {

}

func TestEditPostFails(t *testing.T) {

}

func TestDeletePost(t *testing.T) {

}

func TestDeletePostFails(t *testing.T) {

}

func TestGetAllPosts(t *testing.T) {

}

func TestGetAllPostsFails(t *testing.T) {

}
