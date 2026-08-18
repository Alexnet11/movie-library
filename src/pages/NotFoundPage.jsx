import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="not-found__code">404</p>

      <h1>Страница не найдена</h1>

      <p>
        Возможно, адрес введён неправильно
        или такой страницы больше нет.
      </p>

      <div className="not-found__links">
        <Link
          className="not-found__link"
          to="/"
        >
          На главную
        </Link>

        <Link
          className="not-found__link"
          to="/movies"
        >
          В каталог
        </Link>
      </div>
    </main>
  );
}