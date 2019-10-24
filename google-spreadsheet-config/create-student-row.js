module.exports = app => {
    let app_time = app['app-time'].getFullYear() + '.';
    app_time += app['app-time'].getMonth() + '.';
    app_time += app['app-time'].getDate() + ' ';
    app_time += app['app-time'].getHours() > 9 ? app['app-time'].getHours() : '0' + app['app-time'].getHours();
    app_time += ':';
    app_time += app['app-time'].getMinutes() > 9 ? app['app-time'].getMinutes() : '0' + app['app-time'].getMinutes();
    const tracksDict = {
        business: 'бизнес',
        career: 'карьерное',
        science: 'научное'
    };
    let tracks = '';
    app.tracks.map(track => {
        if(tracks === '') tracks += tracksDict[track][0].toUpperCase() + tracksDict[track].slice(1) + ', ';
        else tracks += tracksDict[track] + ', '
    });
    let accelerators = '';
    accelerators += app['phystech-accelerator-membership'] ? 'Физтех.Акселератор, ' : '';
    accelerators += app['phystech-start-membership'] ? 'Физтех.Старт, ' : '';
    if(accelerators !== '') accelerators = accelerators.slice(0, accelerators.length - 2);
    return {
        'Имя': app.name,
        'Фамилия': app.surname,
        'Дата рождения': app.birthday,
        'Факультет': app.department,
        'Год поступления': app.year,
        'Опыт работы': app['work-exp'],
        'Интересы и увлечения': app.interests,
        'Почему нужен наставник': app.motivation,
        'Направления': tracks.slice(0, tracks.length - 2),
        'Участие в акселераторах МФТИ': accelerators,
        'Телефон': "'" + app.phone,
        'E-mail': app.email,
        'Ссылка на соц. сеть': app['socialnet-link'],
        'Дата и время заполнения заявки': app_time
    }
};