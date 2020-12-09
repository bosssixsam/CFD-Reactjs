export default function Login() {
  return (
    <>
      <section className="login">
        <div className="container">
          <h3>xin mời đăng nhập</h3>
          <form action="">
            <label htmlFor="">
              <p>email</p>
              <input type="text" required />
            </label>

            <label htmlFor="">
              <p>password</p>
              <input type="text" required />
            </label>

            <div className="btn">Đăng nhập</div>
          </form>
        </div>
      </section>
    </>
  );
}
