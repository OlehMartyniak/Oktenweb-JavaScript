//                                      Additional Tasks lesson7

//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

function UserInfo (id,name,username,email,adress,phone,website,company) {
    this.id = id;
    this.name = name;
    this.username = email;
    this.adress = adress;
    this.phone = phone;
    this.website = website;
    this.company = company;
}
// function Adress (street,suite,city,zipkode,geo) {
//     this.street = street;
//     this.suite = suite;
//     this.city = city;
//     this.zipkode = zipkode;
//     this.geo = geo;
// }

let user = new UserInfo(1,'Mike','mike1996','mike0316@gmail.com','+360 9435 3453','http://dfgsgsgr','DuckInvest');
console.log(user);

// let adres = function (street,suite,city,zipkode,geo) {
//     let adres = {street: `${street}`,suite: `${suite}`, city: `${city}`, zipkode: `${zipkode}`, geo: `${geo}`
//     } return adres
// this.adress = adress;