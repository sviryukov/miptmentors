module.exports = app => {
    let app_time = app['app-time'].getFullYear() + '.';
    app_time += app['app-time'].getMonth() + '.';
    app_time += app['app-time'].getDate() + ' ';
    app_time += app['app-time'].getHours() > 9 ? app['app-time'].getHours() : '0' + app['app-time'].getHours();
    app_time += ':';
    app_time += app['app-time'].getMinutes() > 9 ? app['app-time'].getMinutes() : '0' + app['app-time'].getMinutes();
    return {
        'Имя': app.name,
        'Фамилия': app.surname,
        'Дата рождения': app.birthday,
        'Образование': app.education,
        'Текущее место работы и должность': app.work,
        'Телефон': "'" + app.phone,
        'E-mail': app.email,
        'Частота встреч с наставляемым': app['meet-freq'],
        'Дата и время заполнения заявки': app_time
    }
};