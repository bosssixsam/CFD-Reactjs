const emailPatern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonePatern = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

export default function useValidate(initValue, rule) {
  let [form, setForm] = useState(initValue);

  let [error, setError] = useState({});

  function inputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  }

  function handleSubmit() {
    console.log("submit");

    let { validate, message } = rule;
    let errorObj = {};

    for (let i in validate) {
      if (i in form) {
        if (validate[i].required) {
          if (!form[i]) {
            errorObj[i] = message?.[i]?.required || "Trường này là bắt buộc";
          }
        }

        if (validate[i].pattern) {
          let patstring = validate[i].pattern;
          if (validate[i].pattern === "email") {
            patstring = emailPatern;
          }
          if (validate[i].pattern === "phone") {
            patstring = phonePatern;
          }

          if (!patstring.test(form[i])) {
            errorObj[i] = "Không đúng định dạng";
          }
        }
      }
    }

    setError(errorObj);

    return Object.keys(errorObj).length > 0;
  }

  return {
    data: form,
    error: error,
    inputChange,
    handleSubmit,
  };
}
