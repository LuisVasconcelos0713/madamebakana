test("TEST GET PRODUCTS SHOULD RETURN 200", async () => {
    const response = await fetch("http://localhost:3000/api/products")
    expect(response.status).toBe(200)
})