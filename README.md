# ChromeExtension
一个Chrome的插件程序   
   
     
      
使用方法：      
git clone https://github.com/hqglichao/ChromeExtension.git    
通过chrome右上角的选项->更多工具->扩展程序->加载已解压的扩展程序  导入整个ChromeExtension文件夹    
   
    
      
主要功能：       
可以在js/background.js中添加域名来过滤指定的网络请求。      
方式与其余广告过滤插件应该类似，功能比较简单，只是演示作用      
点击图标会有一个Popup.html的小页面弹出。     
      
     
      
    
     
     
例子中过滤的是百度主页推荐的进入的网页，右边的广告    
如https://www.baidu.com/home/news/data/newspage?nid=17071477248065679177&n_type=0&p_from=1&dtype=-1    
     
    
     
    
下面两图是过滤前后     
![image](https://github.com/hqglichao/ChromeExtension/blob/master/img/after.png)     
![image](https://github.com/hqglichao/ChromeExtension/blob/master/img/before.png)      
