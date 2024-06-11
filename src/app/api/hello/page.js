export default async function getUserFromApi(req, res, username, password) {

  try {
    const res = await fetch("http://localhost:8888/ecommerce/backend/wp-json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })

    const data = await res.json()

    if(data.success === false) {
      return (
        <div>
          {JSON.stringify(data.message)}
        </div>
      )
    }

    return data

    return (
      <div>
        {JSON.stringify(data)}
      </div>
    )
    
  } catch(error){
    throw new Error(data.message)
  }
}