const moogoose = require("mogoose")
const Shema = mongoose.Senha

const usuarios = new Shema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    eAdmin: {
        type: Number,
        default: 0  
    },
    senha: {
        type: String,
        required: true
    }
})

moogoose.model("usuarios", usuarios)