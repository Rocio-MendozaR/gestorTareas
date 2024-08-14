const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    }, 
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //Loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, //Regex para identificar archivos SJ
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para convertir JS modernos al JS compatible a más navegadores
                    options:{
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    deytool: 'source-map', // Genera source maps para facilitar la depuración
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta del que correrá el servidor
        compress: true, //Habilitar compresión gZip
        port: 9000, //Puerto del servidor de desarrolllo
    },
};