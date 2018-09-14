module.exports = {
  // 公用
  common: {
    test2: '测试2',
    cancel: '取消',
    ok: '确定',
    next: '下一步',
    back: '返回',
    copy: '复制',
    paste: '粘贴',
    send: '发送'
  },
  // 首页
  index: {
    totalAmount: '总资产(元)',
    qrCode: '扫一扫',
    payCode: '付款码',
    receivingCode: '收款码',
    moneyCompose: '资金构成',
    moneyClassify: '钱包分类',
    amountUnit: '个数',
    assetsTotalAmount: '资金总估(元)'
  },
  // 设置界面
  setting: {
    phone: '手机号',
    changePhone: '更换手机号',
    email: '邮箱地址',
    changeEmail: '更改邮箱',
    common: '设置',
    security: '安全设置',
    password: '登录密码',
    bindPhone: '绑定手机',
    bindEmail: '绑定邮箱',
    secondValidation: '二次验证',
    faceId: '人脸解锁',
    touchId: '指纹解锁',
    pin: 'PIN码解锁',
    moneyPwd: '资金密码',
    changeMoneyPwd: '更改资金密码',
    exit: '退出登录',
    account: '账号',
    send: '发送',
    address: '国家和地区',
    inputPhone: '请输入您的手机号',
    next: '下一步',
    copyOk: '复制成功',
    copyErr: '复制失败',
    committed: '确认提交',
    modifyPw: '修改密码成功',
    sendSuccess: '发送成功',
    codeErr: '验证码错误',
    bindSuccess: '绑定成功',
    settingSuccess: '设置成功',
    commonPage: {
      notice: '消息通知',
      checkUpdate: '检查更新',
      version: '版本号'
    },
    faceIdPage: {
      notice: '退出登录后，使用刷脸而不是密码登录'
    },
    touchIdPage: {
      notice: '退出登录后，使用Touch ID验证指纹完成登录'
    },
    pinPage: {
      notice: '退出登录后，使用PIN码验证完成登录'
    },
    moneyPwdPage: {
      notice: '设置6位数字资金密码',
      text: '请为账号{phone}',
      pwdFormat: '资金密码不能是重复，连续的数字'
    },
    passwordPage: {
      modify: '修改登录密码',
      oldPw: '旧密码',
      oldPw2: '请输入旧密码',
      newPw: '新密码',
      newPw2: '请输入新的密码',
      confirmPw: '确认密码',
      confirmPw2: '请再次输入密码',
      pwHint: '密码必须是8个字符，而且同时包含字母和数字。',
      forget: '忘记旧密码？',
      modify2: '确认修改',
      pwErr: '请输入6-18位字母，数字或下划线组成的密码'
    },
    forgetPage: {
      note: '短信验证',
      email: '邮箱验证',
      loginPhone: '手机号码',
      loginEmail: '邮箱',
      noteText: '短信',
      hint: '您的{loginType}是{loginName}，请发送点击获取验证码',
      codeText: '{loginType}验证码'
    },
    phonePage: {
      phoneHint: '一个手机只能作为一个账号的登录名',
      hint1: '请输入正确的手机号',
      hint2: '请输入手机号',
      sendHint: '我们已发送 <span class="strong">验证码</span> 短信到您的手机：',
      none: '收不到验证码短信？',
      two: '重新获取',
      noteErr: '短信验证错误'
    },
    emailPage: {
      address: '邮箱地址',
      address2: '请输入邮箱地址',
      code: '邮箱验证码',
      code2: '请输入邮箱验证码',
      hint: '一个邮箱地址只能作为一个账号的登录名',
      send: '确认提交',
      err: '邮箱错误',
      err2: '请输入正确的邮箱格式'
    },
    googlePage: {
      change: '更改google验证',
      key: '密钥',
      user: '请输入用户名',
      copy: '复制',
      google: '谷歌验证码',
      pw: '请输入密码',
      zt: '粘贴',
      open: '开启google认证',
      state1: '1.安装在“Google Authenticator”应用程序中，点击右上角“+”号，然后选择“手动输入验证码”。',
      state2: '2.粘贴上面的“密钥”到“密钥”输入栏，并填写您的超级钱包账好，点击“完成”。',
      state3: '3.复制“谷歌验证码”，粘贴到上面的“谷歌验证码”输入栏。',
      state4: '请勿删除此双重验证密码账户，否则会导致您无法进行账户操作；如果误删，您可通过重置密钥重新获取。',
      hint: '一个账号只能绑定一个google验证'
    }
  },
  record: {
    transferRecord: '转账记录',
    rechargeRecord: '充提记录',
    payBills: '支付账单',
    monthlyBill: '月账单',
    inMoneyFormat: '转入：{number}笔',
    outMoneyFormat: '转出：{number}笔',
    dateFormat: '{year}年{month}月',
    today: '今天',
    fee: '手续费：',
    confirmNumber: '确认数：',
    recharge: '充值：{number}笔',
    fetchCoin: '提币：{number}笔',
    expend: '支出',
    capitalComposition: '资金构成'
  },
  status: {
    audit: '待审核'
  },
  editAvatar: {
    name: '修改头像',
    album: '从相册选择',
    camera: '从相册选择'
  },
  wallet: {
    totalAmount: '总价值(元)',
    pay: '支付',
    mentionMoney: '提币',
    hightest: '24H最高',
    lowest: '24H最低',
    walletAddress: '钱包地址',
    wallet: '{currency}钱包',
    getCoinCount: '提币个数(个)',
    inputCoinCount: '请输入提币个数',
    inputWalletAddress: '请输入钱包地址',
    inputAssetsPw: '请输入资金密码',
    getCoinBtn: '提币',
    getCoinCharge: '提币手续费',
    getCoinTotalAmount: '提币资产总估 (元)',
    remain: '可用余额(个)',
    moneyTotalAmount: '资产总估 (元) ',
    getCoinRecord: '充提记录',
    tips: '提币到账时间受到区块链网络限制,可能时间较长',
    forgetPw: '忘记密码?',
    amount: '个数',
    saveQrImg: '保存二维码图片'
  },
  qrCode: {
    payToMerchant: '向商家付款',
    selecWallet: '选择钱包',
    myPayCode: '我的付款码',
    payNotice: '如付款失败，请尝试其他付款方式',
    collectMoney: '个人收钱',
    savePhoto: '保存二维码图片',
    transforRecord: '转账记录',
    myCollectCode: '我的收款码'
  },
  pay: {
    pay: '转账',
    payCount: '转账个数',
    remarkNotice: '添加备注(50字以内)',
    walletInfo: '钱包信息',
    selectWallet: '选择钱包',
    confirm: '确认转账',
    transforSuccess: '转账成功',
    finish: '完成',
    pwd: '请输入资金密码'
  },
  user: {
    login: '登录', //
    register: '注册', //
    phoneLogin: '手机号码登录', //
    emailLogin: '邮箱登录', //
    forgetPwd: '忘记密码', //
    verifyCode: '验证码', //
    password: '密码', //
    email: '邮箱', //
    phone: '手机号码', //
    emailRegister: '邮箱注册', //
    phoneRegister: '手机号码注册', //
    sendVerfiyCode: '发送验证码',
    label: {
      countrySelect: '国家和地区', //
      oldPwd: '旧密码', //
      newPwd: '新密码', //
      confirmPwd: '确认密码',
      emailAddress: '邮箱地址', //
      emailVerifyCode: '邮箱验证码', //
      smsVerifyCode: '短信验证码',
      moneyPwd: '资金密码',
      email: '邮箱', //
      phone: '手机号码' //

    },
    // form页面的输入框placeholder
    placeholder: {
      pleaseInputOldPwd: '请输入旧的密码',
      pleaseInputNewPwd: '请输入新密码', //
      pleaseInputConfirmPwd: '请再次输入密码', //
      pleaseInputPhoneNumber: '请输入您的手机号', //
      inputPwd: '请输入密码', //
      pleaseInputEmailAddress: '请输入邮箱地址', //
      pleaseInputEmailVerifyCode: '请输入邮箱验证码', //
      emailVerifyCode: '短信验证码',
      inputSMSVerfyCode: '请输入短信验证码', //
      password: '密码', //
      googleVerify: '请输入谷歌验证码',
      pwdFormat: '密码必须是字母开头,6-18位,并包含字符,数字,下划线',
      payPwdFormat: '请输入6位数字密码'
    },
    // form页面的一些提示
    notice: {
      pwdFormat: '密码必须是8个字符，而且同时包含字母和数字。', //
      phone: '一个手机只能作为一个账号的登录名', //
      email: '一个邮箱地址只能作为一个账号的登录名', //
      smsVerify: '我们已发送验证码到你的手机:', //
      noSMSVerify: '收不到验证码短信？', //
      haveSendSMSCode: '我们已发送<strong>验证码</strong>到您的手机'
    },
    btn: {
      reget: '重新获取', //
      forgetPwd: '忘记密码？', //
      login: '登录', //
      nextStep: '下一步', //
      edit: '修改', //
      findPwdByPhone: '短信找回', //
      findPwdByEmail: '邮箱找回' //
    }
  },
  // 页面的Header
  header: {
    setting: '设置',
    security: '安全设置',
    password: '登录密码',
    bindPhone: '绑定手机',
    bindEmail: '绑定邮箱',
    secondValidation: '二次验证',
    faceId: '人脸解锁',
    touchId: '指纹解锁',
    pin: 'PIN码解锁',
    findLoginPwd: '找回登录密码',
    modifyLoginPwd: '修改登录密码',
    moneyPwd: '资金密码',
    getCoin: '提币'
  },
  //  侧滑菜单界面
  sideBar: {
    security: '安全设置',
    payList: '支付账单',
    transferRecord: '交易记录',
    rechargeRecord: '充提记录',
    setting: '设置'
  },
  error: {

  }
}
