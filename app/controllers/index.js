
/*
 * GET home page.
 */

exports.home = function(req, res){
  console.log("Hi from index controller ;) ");	
  res.render('trial.html', { title: 'Angel-Hack' });
};


