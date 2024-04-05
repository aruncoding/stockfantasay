const userModel = (sequelize, Sequelize) => {

    const user = sequelize.define('user', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName:{
            type: Sequelize.STRING,
        },
        userEmail:{
            type: Sequelize.STRING,
        },
        userPassword:{
            type: Sequelize.STRING
        },
        userTc:{
            type: Sequelize.Sequelize.BOOLEAN(true, false),
            defaultValue: false
        },
        userProfile:{
            type: Sequelize.STRING,
            defaultValue: null
        },
        profilePath:{
            type: Sequelize.STRING,
            defaultValue: null
        },
        isDeleted:{
            type: Sequelize.BOOLEAN(true, false),
            defaultValue: false
        },
    },
    )
    return user;
}

export default userModel;