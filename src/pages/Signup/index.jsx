export default function Signup() {
  return (
    <>
      <section className="signup">
        <div className="container">
          <h3>Chào mừng bạn đến với cfd</h3>
          <form action="">
            <label htmlFor="">
              <p>Họ và tên</p>
              <input type="text" required />
            </label>

            <label htmlFor="">
              <p>Số điện thoại</p>
              <input type="text" required />
            </label>

            <label htmlFor="">
              <p>Email</p>
              <input type="text" required />
            </label>

            <label htmlFor="">
              <p>Facebook</p>
              <input type="text" required />
            </label>

            <label htmlFor="">
              <p>Skype</p>
              <input type="text" required />
            </label>
            <div className="btn">đăng ký</div>
          </form>
        </div>
      </section>
    </>
  );
}
