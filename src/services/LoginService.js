import axios from "axios";

export default class LoginService {
  login(email, password, onSuccess, onError) {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then(
        (response) => {
          console.log(
            "Login effettuato con successo! Token:",
            response.data.token
          );

          onSuccess(response.data);
        },
        (error) => {
          console.error("Login non valido!");

          onError(error.response.data);
        }
      );
  }
}
