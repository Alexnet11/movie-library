Перед программированием задаём себе четыре вопроса:

1. Какие данные есть?
2. Какие страницы есть?
3. Какие компоненты повторяются?
4. Какое состояние может изменяться?

Для нашего Movie Library ответ такой.

СТРУКТУРА ПРОЕКА🧮 

src/
│
├── components/
│   ├── Header.jsx
│   ├── MovieCard.jsx
│   └── LoginModal.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── MoviesPage.jsx
│   ├── MovieDetailsPage.jsx
│   └── NotFoundPage.jsx
│
├── data/
│   └── movies.js
│
├── reducers/
│   └── authReducer.js
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css

КАРТА МАРШРУТОВ:
До кода Router сначала рисуем таблицу:

URL	Страница
/	HomePage
/movies	MoviesPage
/movies/1	MovieDetailsPage
/movies/2	MovieDetailsPage
любой неизвестный	NotFoundPage


useState                                        
Хранит простое локальное состояние.    const [isLoginOpen, setIsLoginOpen] = useState(false);          

useReducer
Управляет состоянием через действия.
dispatch
   ↓
action
   ↓
reducer
   ↓
новый state
Будем использовать для авторизации.

useEffect
Запускает побочный эффект.
модалка открылась
        ↓
подписались на Escape

модалка закрылась
        ↓
удалили подписку


useParams
Берёт параметр из URL. const { movieId } = useParams();

useNavigate
Позволяет изменить маршрут из JavaScript.
Например после входа: navigate("/movies");

Link
Пользователь нажимает ссылку:
<Link to="/movies">

NavLink
То же самое, но умеет понимать:
Активна ли сейчас эта ссылка?
Поэтому хорошо подходит для Header

ЭТАП 1
Чистый React-проект

ЭТАП 2
Структура папок

ЭТАП 3
База movies.js

ЭТАП 4
MovieCard

ЭТАП 5
MoviesPage + map

ЭТАП 6
HomePage

ЭТАП 7
Подключение React Router

ЭТАП 8
Header + Link + NavLink

ЭТАП 9
Динамический маршрут /movies/:movieId

ЭТАП 10
useParams + find

ЭТАП 11
404

ЭТАП 12
LoginModal + useState

ЭТАП 13
useEffect + Escape

ЭТАП 14
authReducer + useReducer

ЭТАП 15
LOGIN / LOGOUT

ЭТАП 16
useNavigate

ЭТАП 17
Финальные стили

ЭТАП 18
Git commit / push / PR



components → кусочки интерфейса
pages → целые страницы
data → данные
reducers → правила изменения состояния 