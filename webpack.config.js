var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    //load before app.jsx, as they are app.jsx dependencies
    './client/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './client/public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __dirname,
    alias: {
      applicationStyle: 'client/styles/app.scss',
      Login: 'client/user/Login.jsx',
      loginReducer: 'client/user/loginReducer.jsx',
      Register: 'client/user/Register.jsx',
      RegisterContainer: 'client/user/RegisterContainer.jsx',
      registerActions: 'client/user/registerActions.jsx',
      registerReducer: 'client/user/registerReducer.jsx',
      userReducer: 'client/user/userReducer.jsx',
      Home: 'client/Home.jsx',
      ChatItem: 'client/chat/ChatItem.jsx',
      ChatItemMakerContainer: 'client/chat/ChatItemMakerContainer.jsx',
      ChatLogContainer: 'client/chat/ChatLogContainer.jsx',
      ChatContainer: 'client/chat/ChatContainer.jsx',
      ChannelItem: 'client/channels/ChannelItem.jsx',
      ChannelsContainer: 'client/channels/ChannelsContainer.jsx',
      ChannelsLogContainer: 'client/channels/ChannelsLogContainer.jsx',
      ChannelItemMakerContainer: 'client/channels/ChannelItemMakerContainer.jsx',
      activeChannelActions: 'client/channels/activeChannelActions.jsx',
      activeChannelReducer: 'client/channels/activeChannelReducer.jsx',
      ItemLog: 'client/items/ItemLog.jsx',
      ItemMaker: 'client/items/ItemMaker.jsx',
      ItemsActions: 'client/items/ItemsActions.jsx',
      createItemsReducer: 'client/items/createItemsReducer.jsx',
      Main: 'client/Main.jsx',
      ErrorModal: 'client/error/ErrorModal.jsx',
      ErrorModalContainer: 'client/error/ErrorModalContainer.jsx',
      errorActions: 'client/error/errorActions.jsx',
      errorReducer: 'client/error/errorReducer.jsx',
      actionTypes: 'client/util/actionTypes.jsx',
      configureStore: 'client/store/configureStore.jsx',
      stateDefaults: 'client/store/stateDefaults.jsx',
      seed: 'client/tests/seed.jsx',
      //--------------start:
      //       used this link to resolve many warnings when calling webpack
      //       https://github.com/facebook/react/issues/4566
      react: 'node_modules/react',
      React: 'node_modules/react'
    },
    fallback: 'node_modules'
  },
  resolveLoader: {
      fallback: 'node_modules'
  },
     //---------------end!
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
