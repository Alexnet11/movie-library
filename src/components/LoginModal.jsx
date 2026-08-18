import { useNavigate } from "react-router";

export default function LoginModal({ onClose }) {
    const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const login = formData.get("login");
    const email = formData.get("email");

    alert(
      `Пользователь ${login} вошёл с почтой ${email}`
    );

    onClose();
    navigate("/movies");
  }

  function openLoginModal() {
    setIsLoginOpen(true);
  }

  function closeLoginModal() {
    setIsLoginOpen(false);
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Вход</h2>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="login">
            Логин
          </label>

          <input
            id="login"
            name="login"
            type="text"
            autoComplete="username"
            required
          />

          <label htmlFor="email">
            Электронная почта
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          <label htmlFor="password">
            Пароль
          </label>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />

          <button
            className="login-form__submit"
            type="submit"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}