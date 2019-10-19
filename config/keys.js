const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MongoDB_URL: `mongodb+srv://Piyush:${process.env.MongoDB_Pass}@cluster0-ux9st.mongodb.net/test?retryWrites=true&w=majority`
}