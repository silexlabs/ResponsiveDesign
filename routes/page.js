/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('page', {
        title: 'Responsize - Web APP'
    });
};