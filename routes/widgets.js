/*
 * GET widgets page.
 */

exports.index = function(req, res) {
    res.render('widgets', {
        title: 'widgets'
    });
};