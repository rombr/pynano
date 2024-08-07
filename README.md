# PyNanoCMS

Статичный сайт генерируется в папку `<site>_static`. Её
содержимое помещается на сервер и будет доступно пользователю,
заходящему на сайт.

### Структура папок.

* Папка `templates` содержит шаблоны сайта
* Папка `static` содержит файлы, необходимые для отображения сайта (CSS, Java Script)
* Папка `other` содержит прочие файлы и папки, которые нужно разместить на сайте как есть. Например, `favicon.ico`, `robots.txt` и т. д. При генерации они все будут автоматически скопированы в папку `<site>_static`.

### Конфигурация

Файл `pages.json` содержит описания страниц. Например:
```json
[
{
    "url": "/help/",
    "page_id": "help",
    "context": {},
    "template": "help.html"
}
]
```

Где:

* `url` - адрес страницы на сайте;
* `page_id` - уникальный идентификатор страницы, состоящий из букв латиницы, цифр и подчеркиваний.
Используется в шаблонах для указания адреса страницы, например, `<a href="{{ urls.help }}">Помощь</a>`.
* `context` - дополнительный контекст для передачи в шаблон.
Например, `"context": {"cost": "10 руб."}`, в шаблоне может быть исрользован как `{{ cost }}`.
* `template` - шаблон страницы, у разных страниц может быть один шаблон, шаблоны можно организовать в папки и тогда писать соответственно, например, `"template\": "help/help.html"`.

### Генерация

Для запуска генерации служит `pyNanoCMS.exe` Файл `pynano.log`, сюда пишутся
ошибки, если происходят.

При перегенерации меняются только те файлы, которые реально изменились.

### Live-сервер

Если запустить команду с опцией `--serve` (короткий вариант `-s`), то по
адресу `<http://127.0.0.1:8000/>` будет доступна сгенерированная версия
сайта, причем при любом изменении исходных файлов сайт будет
автоматически регенерироваться.
