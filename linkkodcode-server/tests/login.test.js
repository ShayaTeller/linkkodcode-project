describe("login input", () => {
  test("if empty body", async () => {
    const data = await fetch("http://localhost:3000/login", { method: "POST" });
    expect(await data.text()).toBe("no body");
  });
  test("if empty username;", async () => {
    const user = {
      username: null | undefined,
      password: "1234",
    };

    const data = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(user),
    });
    expect(await data.text()).toBe("check user name");
  });

  test("if empty password;", async () => {
    const user = {
      username: "shaya",
      password: null | undefined,
    };

    const data = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(user),
    });
    expect(await data.text()).toBe("check password");
  });
});

describe("sign up", () => {
  test("if username exsist", async () => {
    const user = {
      username: "shaya",
      password: "1234",
    };

    const data = await fetch("http://localhost:3000/signup", {
      method: "POST",
      body: JSON.stringify(user),
    });
    expect(await data.text()).toBe("user exsist in db choose new user name");
  });
});

describe("sign up", () => {
  test("if username is empty", async () => {
    const user = {
      username: null|undefined,
      password: "1234",
    };

    const data = await fetch("http://localhost:3000/signup", {
      method: "POST",
      body: JSON.stringify(user),
    });
    expect(await data.text()).toBe("check user name");
  });

  test("if empty body", async () => {
    const data = await fetch("http://localhost:3000/signup", {
      method: "POST",
    });

    expect(await data.text()).toBe("no body");
  });


});


