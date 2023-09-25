import { useState } from "react";

export default function Subscribe() {
  const [mail, setMail] = useState("");

  const handleChange = (e) => {
    setMail(e.target.value);
  };

  function isEmail(email) {
    console.log("checking email");
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      return false;
    }
    return true;
  }

  const submitEmail = () => {
    console.log("sending email: ", mail);
    if (!isEmail(mail)) {
      alert("email format is wront");
      return;
    }
    let url = `/email/?email=${mail}`;
    let config = {
      method: "post",
      url: url,
      data: mail,
    };

    fetch(url, config)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error. Not subscribed.");
        }
      })
      .then(function (data) {
        console.log(JSON.stringify(data));
        alert("Success. You subscribed!!");
      })
      .catch(function (error) {
        console.log(error);
        alert("Error. Not subscribed.");
      });
  };

  return (
    <div className="absolute bg-slate-200 p-3 rounded-lg">
      <input value={mail} onChange={handleChange} />
      <button className="pl-4" onClick={submitEmail}>subscribe</button>
    </div>
  );
}
