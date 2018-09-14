let configs = [
  // 一
  // 首页
  {
    path: '/router',
    name: 'router',
    component: () =>
    import('@/views/Router.vue')
  },
  {
    path: '/',
    name: 'index',
    component: () =>
            import('@/views/index/Index.vue'),
    meta: {
      needAuth: false,
      index: 1,
      cache: false
    }
  },
  //  钱包详情
  {
    path: '/wallet/detail/:currency',
    name: 'wallet',
    component: () =>
            import('@/views/wallet/detail/Index.vue'),
    meta: {
      needAuth: false,
      index: 400,
      cache: false
    }
  },
  //  提币
  {
    path: '/wallet/withdraw/:currency',
    name: 'wallet-withdraw',
    component: () =>
            import('@/views/wallet/withdraw/Index.vue'),
    meta: {
      needAuth: false,
      index: 401,
      cache: false
    }
  },

  // 二
  // 启动页面
  {
    path: '/home',
    name: 'home',
    component: () =>
            import('@/views/home/Index.vue'),
    meta: {
      needAuth: false,
      index: 1000,
      cache: false
    }
  },
  // 登录
  {
    path: '/user/login',
    name: 'login',
    component: () =>
            import('@/views/user/Login.vue'),
    meta: {
      needAuth: false,
      index: 1001,
      cache: false
    }
  },
  // 邮箱登录
  {
    path: '/user/emaillogin',
    name: 'email-login',
    component: () =>
            import('@/views/user/EmailLogin.vue'),
    meta: {
      needAuth: false,
      index: 1001,
      cache: false
    }
  },
  {
    path: '/user/googleverify',
    name: 'login-googleverify',
    component: () =>
            import('@/views/user/GoogleVerify.vue'),
    meta: {
      needAuth: false,
      index: 1001,
      cache: false
    }
  },
  // 注册
  {
    path: '/user/register',
    name: 'register',
    component: () =>
            import('@/views/user/Register.vue'),
    meta: {
      needAuth: false,
      index: 1001,
      cache: false
    }
  },
  // 邮箱注册
  {
    path: '/user/emailregister',
    name: 'email-register',
    component: () =>
            import('@/views/user/EmailRegister.vue'),
    meta: {
      needAuth: false,
      index: 1001,
      cache: false
    }
  },
  // 找回密码
  {
    path: '/user/findpassword',
    name: 'findpassword',
    component: () =>
            import('@/views/user/findpassword/index.vue'),
    meta: {
      needAuth: false,
      index: 1002,
      cache: false
    }
  },
  // 手机找回密码
  {
    path: '/user/findpassword/phone',
    name: 'findpassword-phone',
    component: () =>
            import('@/views/user/findpassword/phone.vue'),
    meta: {
      needAuth: false,
      index: 1003,
      cache: false
    }
  },
  // 手机找回密码下一步
  {
    path: '/user/findpassword/phone/nextstep',
    name: 'findpassword-phone-sms',
    component: () =>
            import('@/views/user/findpassword/phonesms.vue'),
    meta: {
      needAuth: false,
      index: 1004,
      cache: false
    }
  },
  // 邮箱找回
  {
    path: '/user/findpassword/email',
    name: 'findpassword-email',
    component: () =>
            import('@/views/user/findpassword/email.vue'),
    meta: {
      needAuth: false,
      index: 1003,
      cache: false
    }
  },
  // 设置密码
  {
    path: '/user/findpassword/setpassword',
    name: 'findpassword-setpassword',
    component: () =>
            import('@/views/user/findpassword/setpassword.vue'),
    meta: {
      needAuth: false,
      index: 1005,
      cache: false
    }
  },
  //  编辑头像
  {
    path: '/user/edit/avatar',
    name: 'avatarEdit',
    component: () =>
            import('@/views/user/edit/Avatar.vue'),
    meta: {
      needAuth: false,
      index: 1001,
      cache: false
    }
  },
  //  修改昵称
  {
    path: '/user/edit/nickname',
    name: 'nicknameEdit',
    component: () =>
            import('@/views/user/edit/NickName.vue'),
    meta: {
      needAuth: false,
      index: 1001,
      cache: false
    }
  },
  // 三
  // 支付账单
  {
    path: '/record/paylist',
    name: 'paylist',
    component: () =>
            import('@/views/record/PayList.vue'),
    meta: {
      needAuth: false,
      index: 100,
      cache: false
    }
  },
  // 充提记录
  {
    path: '/record/rechangew',
    name: 'rechangew',
    component: () =>
            import('@/views/record/Rechangew.vue'),
    meta: {
      needAuth: false,
      index: 500,
      cache: false
    }
  },
  // 转账记录
  {
    path: '/record/transfer',
    name: 'transfer',
    component: () =>
            import('@/views/record/Transfer.vue'),
    meta: {
      needAuth: false,
      index: 500,
      cache: false
    }
  },
  // 转账记录详情
  {
    path: '/record/transfer/detail:date',
    name: 'transferDetail',
    component: () =>
            import('@/views/record/TransferDetail.vue'),
    meta: {
      needAuth: false,
      index: 101,
      cache: false
    }
  },
  // 四
  // 支付
  {
    path: '/pay',
    name: 'pay',
    component: () =>
            import('@/views/pay/Index.vue'),
    meta: {
      needAuth: false,
      index: 401,
      cache: false
    }
  },
  // 支付结果
  {
    path: '/pay/result',
    name: 'payResult',
    component: () =>
            import('@/views/pay/Result.vue'),
    meta: {
      needAuth: false,
      index: 402,
      cache: false
    }
  },
  //  付款码
  {
    path: '/qrcode/pay',
    name: 'qrcodePay',
    component: () =>
            import('@/views/qrcode/Pay.vue'),
    meta: {
      needAuth: false,
      index: 600,
      cache: false
    }
  },
  //  收款码
  {
    path: '/qrcode/receive',
    name: 'qrcodeReceive',
    component: () =>
            import('@/views/qrcode/Receive.vue'),
    meta: {
      needAuth: false,
      index: 200,
      cache: false
    }
  },
  // 五
  {
    path: '/setting',
    redirect: '/setting/common'
  },
  //  设置
  {
    path: '/setting/common',
    name: 'setting',
    component: () =>
            import('@/views/setting/common/index.vue'),
    meta: {
      needAuth: false,
      index: 200,
      cache: false
    }
  },
  //  安全设置
  {
    path: '/setting/security',
    name: 'security',
    component: () =>
            import('@/views/setting/security/Index.vue'),
    meta: {
      needAuth: false,
      index: 900,
      cache: false
    }
  },
  //  安全设置--登录密码
  {
    path: '/setting/security/password',
    name: 'security-password',
    component: () =>
            import('@/views/setting/security/password'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  //  安全设置--忘记密码
  {
    path: '/setting/security/forget',
    name: 'security-forget',
    component: () =>
            import('@/views/setting/security/password/forget'),
    meta: {
      needAuth: false,
      index: 902,
      cache: false
    }
  },
  //  安全设置--忘记密码-验证
  {
    path: '/setting/security/forget/verify',
    name: 'security-forget-note',
    component: () =>
            import('@/views/setting/security/password/forget/verify'),
    meta: {
      needAuth: false,
      index: 903,
      cache: false
    }
  },
  //  安全设置--忘记密码-新密码
  {
    path: '/setting/security/forget/newPw',
    name: 'security-forget-newPw',
    component: () =>
            import('@/views/setting/security/password/forget/newPw'),
    meta: {
      needAuth: false,
      index: 904,
      cache: false
    }
  },
  //  安全设置--手机
  {
    path: '/setting/security/phone',
    name: 'security-phone',
    component: () =>
            import('@/views/setting/security/phone/Index.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  //  安全设置--更换手机
  {
    path: '/setting/security/phone/change',
    name: 'security-changePhone',
    component: () =>
            import('@/views/setting/security/phone/change.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  //  安全设置--手机验证
  {
    path: '/setting/security/phone/verify',
    name: 'security-phone-verify',
    component: () =>
            import('@/views/setting/security/phone/Verify.vue'),
    meta: {
      needAuth: false,
      index: 902,
      cache: false
    }
  },
  //  安全设置--邮箱
  {
    path: '/setting/security/email',
    name: 'security-email',
    component: () =>
            import('@/views/setting/security/email/Index.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  //  安全设置--更改邮箱
  {
    path: '/setting/security/email/change',
    name: 'security-changeEmail',
    component: () =>
            import('@/views/setting/security/email/change.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  // 安全设置--二次验证
  {
    path: '/setting/security/google',
    name: 'security-google',
    component: () =>
            import('@/views/setting/security/googleVerify/index.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  // 安全设置--更改二次验证
  {
    path: '/setting/security/google/change',
    name: 'security-changeGoogle',
    component: () =>
            import('@/views/setting/security/googleVerify/change.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  //  安全设置--资金密码
  {
    path: '/setting/security/paypw',
    name: 'security-paypw',
    component: () =>
            import('@/views/setting/security/paypw/Index.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  //  安全设置--更改资金密码
  {
    path: '/setting/security/paypw/change',
    name: 'security-changePaypw',
    component: () =>
            import('@/views/setting/security/paypw/change.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  //  安全设置--资金密码--确认密码
  {
    path: '/setting/security/paypw/confirm',
    name: 'security-paypw-confirm',
    component: () =>
            import('@/views/setting/security/paypw/Confirm.vue'),
    meta: {
      needAuth: false,
      index: 903,
      cache: false
    }
  },
  //  安全设置--解锁--人脸
  {
    path: '/setting/security/unlock/face',
    name: 'security-phone-face',
    component: () =>
            import('@/views/setting/security/unlock/Face.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  //  安全设置--解锁--指纹
  {
    path: '/setting/security/unlock/finger',
    name: 'security-phone-finger',
    component: () =>
            import('@/views/setting/security/unlock/FingerPrint.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  },
  //  安全设置--解锁--PIN
  {
    path: '/setting/security/unlock/pin',
    name: 'security-phone-pin',
    component: () =>
            import('@/views/setting/security/unlock/Pin.vue'),
    meta: {
      needAuth: false,
      index: 901,
      cache: false
    }
  }
]

export default configs
