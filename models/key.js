const Sequelize = require('sequelize');

module.exports = class Key extends Sequelize.Model{
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            key:{
                type: Sequelize.BIGINT,
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Key',
            tableName: 'keys',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    };

    static associate(db) {
        db.Key.belongsToMany(db.User, {
            through: 'key_pairs',
        });
        

    }
};