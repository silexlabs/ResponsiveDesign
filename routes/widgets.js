/*
 * GET widgets page.
 */

exports.list = function(req, res) {
    res.render('widgets', {
        title: 'widgets'
    });
};