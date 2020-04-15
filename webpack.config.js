const 	HtmlWebpackPlugin = require('html-webpack-plugin'),
		MiniCssExtractPlugin = require('mini-css-extract-plugin'),
		CleanWebpackPlugin = require('clean-webpack-plugin'),
		autoprefixer = require('autoprefixer'),
		{VueLoaderPlugin} = require('vue-loader');

module.exports = {
	entry: {
		js		: './src/index.js',
		vanilla	: './src/hello_vanilla.js',
		react	: './src/hello_react.js',
		vue		: './src/hello_vue.js'
	},
	output: {
		filename: '[name].[chunkhash].js'
	},
	devtool: 'source-map',
	module: {
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {minimize : true}
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader?minimize&sourceMap',
					{
						loader: 'postcss-loader',
						options: {
							autoprefixer: {
								browser: ['last 2 versions']
							},
							sourceMap: true,
							plugins: () => [autoprefixer]
						}
					},
					'resolve-url-loader',
					'sass-loader?outputStyle=compressed&sourceMap'
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				use: [
					'file-loader?name=assets/[name].[ext]',
					'image-webpack-loader?bypassOnDebug'
				]
			},
			{
				test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
				use: 'file-loader?name=assets/[name].[ext]'
			},
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				use: {
					loader: 'vue-loader'
				}
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist/**/*.*']),
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash].css',
			chunkFilename: '[id].css'
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			filename: 'index.html',
			chunks: ['js'],
			minify: {
				html5: true,
				collapseWhitespace: true,
				caseSensitive: true,
				removeComments: true
			}
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			filename: 'hello-vanilla.html',
			chunks: ['vanilla'],
			minify: {
				html5: true,
				collapseWhitespace: true,
				caseSensitive: true,
				removeComments: true
			}
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			filename: 'hello-react.html',
			chunks: ['react'],
			minify: {
				html5: true,
				collapseWhitespace: true,
				caseSensitive: true,
				removeComments: true
			}
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			filename: 'hello-vue.html',
			chunks: ['vue'],
			minify: {
				html5: true,
				collapseWhitespace: true,
				caseSensitive: true,
				removeComments: true
			}
		})
	]
};
