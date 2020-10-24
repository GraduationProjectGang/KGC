const express = require('express');
const jwt = require('jsonwebtoken');
const pailier = require('paillier-bigint');
const { QueryTypes, Sequelize } = require('sequelize');

const { verifyToken } = require('./middlewares');
const { Device, Party, Token, User, Key, sequelize } = require('../models');

const router = express.Router();


router.post('generation/acknowledge', verifyToken, async (req, res) => {
    const { party_id,  } = req.body;
    try {
        //find party with user
        const party = await Party.findOne({
            where: { id: party_id },
            include: {
                model: User,
                attributes: ['id', 'name'],
            }
        });
        
        const { publicKey, privateKey } = await paillierBigint.generateRandomKeys(1024);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
        })
    }
});