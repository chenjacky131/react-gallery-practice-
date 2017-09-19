import React from 'react';
require('normalize.css/normalize.css');
require('styles/App.scss');
// 获取图片相关的数据
var imageDatas = require('../data/imagesDatas.json');
// 利用只执行函数，将图片信息转换为图片URL路径信息。
imageDatas = (function(imageDataArray){
	for(var i = 0;i<imageDataArray.length; i++){
		var singleImageData = imageDataArray[i];
		singleImageData.imageURL = require('../images/'+singleImageData.fileName);
		imageDataArray[i] = singleImageData;
	}
	return imageDataArray;	
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className = "stage">
      	<section className = "img-sec"></section>
      	<nav className = "controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
