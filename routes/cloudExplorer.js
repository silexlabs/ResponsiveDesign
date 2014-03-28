
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('cloudExplorer', { title: 'Responsiez - Cloud Explorer' });
};