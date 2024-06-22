const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');

const { register, login } = require('./services/user');
const { createToken, verifyToken } = require('./services/jwt');

const api = require('./services/volcano');
const { create } = require('express-handlebars');

start();

async function start() {
    const app = express();

    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(3000, () => {
        console.log('Server started http://localhost:3000');
        test();
    });

    async function test() {
        try {
            // const result = await login('john@abv.bg', '123');
            // const token = createToken(result);
            // console.log(token);

            // Create Record
            // const result = await api.create({
            //     name: 'Hunga Tonga',
            //     location: 'Tonga Islands',
            //     elevation: 114,
            //     lastErruption: 2022,
            //     image: 'http://localhost:3000/static/images/hunga-tonga.jpg',
            //     typeVolcano: 'Submarine',
            //     description: 'Hunga Tonga-Hunga is a submarine volcano in the South Pacific located about 30 km south of the submarine volcano of Fonuafo\'ou and 65 km north of Tongatapu, Tonga\'s main island. It is part of the highly active Kermadec-Tonga subduction zone and its associated volcanic arc, which extends from New Zealand north-northeast to Fiji, and is formed by the subduction of the Pacific Plate under the Indo-Australian Plate. It lies about 100 km above a very active seismic zone.',
            //     author: '667689c96d2ac4e489d6bdab'
            // });

            // const data = await api.getAll();
            // console.log(data);

            // Edit Record
            // const dataId = '6676b30fff80eb8efcacb8e2';
            // const formData = {
            //     name: 'Hunga Tonga',
            //     location: 'Tonga Islands',
            //     elevation: 114,
            //     lastErruption: 2024,
            //     image: 'http://localhost:3000/static/images/hunga-tonga.jpg',
            //     typeVolcano: 'Submarine',
            //     description: 'Hunga Tonga-Hunga is a submarine volcano in the South Pacific located about 30 km south of the submarine volcano of Fonuafo\'ou and 65 km north of Tongatapu, Tonga\'s main island. It is part of the highly active Kermadec-Tonga subduction zone and its associated volcanic arc, which extends from New Zealand north-northeast to Fiji, and is formed by the subduction of the Pacific Plate under the Indo-Australian Plate. It lies about 100 km above a very active seismic zone.',
                
            // };
            // const userId = '667689c96d2ac4e489d6bdab';

            // const result = await api.update(dataId, formData, userId);


        } catch (err) {
            console.log('Caught error');
            console.error(err.message);
        }
    };
}

