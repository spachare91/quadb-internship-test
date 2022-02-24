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
      res.redirect('/error')
        
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
          res.redirect('/error')
        }
        count = count + 1;
      } else {
        break;
      }


    }

    // once all records are added...find & display them
    try {
      const ans= await Unit.find()
      res.render('home',{data:ans})
      
  } catch (err) {
    res.redirect('/error')
      
  }
  

  } catch (err) {
    res.redirect('/error')
  }
};


exports.handleError=async(req,res)=>{

  // to show error msg to user
  console.log("errr...")
  res.redirect('/')


    
}