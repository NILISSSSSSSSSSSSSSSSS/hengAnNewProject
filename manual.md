    1.Router配置

      meta: {
        needAuth: false,//页面是否需要登录才能访问
        index: 999,//页面过渡动画,index从小到大就是页面从右往左进入,index从大到小就是从左到右退出。index相同无跳转动画
        cache: false //设置页面是否缓存,如果页面缓存了第二次进入就不会调用created方法。请使用生命周期attached和detached方法。
      }
    
    2.Loading框调用

      this.$loading.show(message?)和this.$loading.hide(). 遮盖层的z-index使用的是3000。
      show方法可以传递一个string信息.
    
    3.axios调用

      如果需要调用默认的全局loading,请设置config:{ loading:true },或者设置config:{ loading:{ show:true,message:'xxxx' } }。不设置默认不展示loading效果.

      项目中通过js调用生成的loading只会有一个.如果页面同时请求多个api.请用Promise.all实现,在项目中手动调用this.$loading.show和this.$loading.hide来控制loading效果.

    