const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';

    router.post('/event', (req, res, next) => {
        console.log(req.body)
        db.query(
            'INSERT INTO AdminLogin (UserID, UserName, Password) VALUES (?,?,?)', [req.body.UserID, req.body.UserName, req.body.Password],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    router.get('/event/all', function(req, res, next) {
        db.query(
            'SELECT * FROM AdminLogin',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    router.get('/event', function(req, res, next) {
        db.query(
            'SELECT * FROM AdminLogin where UserID = 1',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    router.put('/event/:id', function(req, res, next) {
        db.query(
            'UPDATE AdminLogin SET UserName=?, Password=? WHERE UserID=?', [req.body.UserName, req.body.Password, req.params.userid],
            (error) => {
                if (error) {
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    router.delete('/event/:id', function(req, res, next) {
        db.query(
            'DELETE FROM AdminLogin WHERE UserID=?', [req.params.userid],
            (error) => {
                if (error) {
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    return router;
}

module.exports = createRouter;