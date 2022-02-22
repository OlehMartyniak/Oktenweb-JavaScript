//                                      Additional Tasks lesson7

//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
function Adress (street,suite,city,zipkode,geoLat,geoLng) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipkode = zipkode;
    this.geo = new Geo(geoLat,geoLng);
}

function Geo (lat,lng) {
    this.lat = lat;
    this.lng = lng;
}

function Company (name,catchPhrase,bs) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
}
function UserInfo (id,name,username,email,addStreet,addSuite,addCity,addZipkode,addGeo,phone,website,compName,compPhrase,compBS) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.adress = new Adress(addStreet,addSuite,addCity,addZipkode,addGeo);
    this.phone = phone;
    this.website = website;
    this.company = new Company(compName,compPhrase,compBS);
}

let user = new UserInfo(1,'Donald','D.Trump','trump1990@gmail.com','Venice Beach 13',
    '201','Los Angeles',10101,130.20002,+47098843875,'http://d.trump.companies',
    'Trump Invest','Everything for Trump','We have money!');
console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

function Attribute (attName,attAction) {
    this.AttributeName = attName;
    this.AttributeAction = attAction;
}

function TagDescription (tagName,tagAction,attName,attAction,attName2,attAction2) {
    this.TagName = tagName;
    this.TagAction = tagAction;
    this.TagAttributeOne = new Attribute(attName,attAction);
    this.TagAttributeTwo = new Attribute(attName2,attAction2);
}

let a = new TagDescription('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    'href','Задает адрес документа, на который следует перейти.','name','Устанавливает имя якоря внутри документа');
console.log(a);

let div = new TagDescription('<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'align','Задает выравнивание содержимого тега <div>.','title','Добавляет всплывающую подсказку к содержимому.');
console.log(div)

let h1 = new TagDescription('<h1>','По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше.',
    'align','Определяет выравнивание заголовка.');
console.log(h1)

let span = new TagDescription('<span>','Тег <span> предназначен для определения строчных элементов документа.','class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
    'id','Указывает имя стилевого идентификатора.');
console.log(span)

let input = new TagDescription('<input>','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    'align','Определяет выравнивание изображения.','form','Связывает поле с формой по её идентификатору.');
console.log(input)

let form = new TagDescription('<form>','Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.',
    'action','Адрес программы или документа, который обрабатывает данные формы.','target','Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.')
console.log(form)

let option = new TagDescription('<option>','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    'label','Указание метки пункта списка.','selected','Заранее устанавливает определенный пункт списка выделенным.');
console.log(option)

let select = new TagDescription('<select>','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
    'disabled','Блокирует доступ и изменение элемента.','multiple','Позволяет одновременно выбирать сразу несколько элементов списка.')
console.log(select)











