const {Router} = require('express')
const router = Router();

const getWeather = require('../lib/getweather')

router.get('/', (req, res) =>{
    res.render('index');
});

router.post('/', async(req, res)=>{
    let location = req.body.location
    let countryCode = req.body.countryCode

    let data = await getWeather(location, countryCode);
    if (data.list[0]){
        let temp = data.list[0].main.temp
        let humidity = data.list[0].main.humidity

        res.render('index', {data: {temp, humidity}})
    }
    else {
    res.render('index', {err: "the location you entered does not exist"})
    }
    
})


router.get('/login', (req, res) =>{
    res.render('login');
});




module.exports = router