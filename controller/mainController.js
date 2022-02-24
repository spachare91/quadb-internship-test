const axios = require("axios");
const Unit = require("../model/unit");

exports.fetchDataandDisplay = async (req, res) => {
  try {
    var ans = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const maindata = ans.data;
    var count = 0;

    // delete previous records and get new records
    try {
        const del=await Unit.deleteMany({});
        console.log("all data deleted....")
    } catch (error) {
        console.log(error)
        
    }
    // getting top 10 records and saving them in db
    for (const [key, value] of Object.entries(maindata)) {
      if (count < 10) {
        try {
          await Unit.create({
            name: value.name,
            last: value.last,
            buy: value.buy,
            sell: value.sell,
            volume: value.volume,
            base_unit: value.base_unit,
          });
        } catch (err) {
          console.log(err);
        }
        count = count + 1;
      } else {
        break;
      }


    }

    // once all records are added display them
    res.redirect('/')

  } catch (err) {}
};


exports.displaydata=async(req,res)=>{
    try {
        const ans= await Unit.find()
        res.render('home',{data:ans})
        
    } catch (err) {
        console.log(err)
        
    }

    
}