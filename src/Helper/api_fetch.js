class api_fetch_fun {
  async upload_image(data) {
    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_KEY}`,
        {
          method: "POST",
          body: data,
        }
      );
      return response.json();
    } catch (e) {
      return false;
    }
  }

  async create(api, obj) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(api, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify(obj),
      });

      return response.json();
    } catch (e) {
      return false;
    }
  }
  async get(api) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(api, {
        method: "GET",
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return response.json();
    } catch (e) {
      return false;
    }
  }
  async update(api, obj) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(api, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify(obj),
      });

      return response.json();
    } catch (e) {
      return false;
    }
  }
  async delete(api) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(api, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${token}`,
        },
      });

      if (response.status) {
        return true;
      }else{
        return false
      }
    } catch (e) {
      return false;
    }
  }
}

const client_api = new api_fetch_fun();

export default client_api;
