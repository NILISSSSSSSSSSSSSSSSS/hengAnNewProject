module.exports = {
  // 公用
  common: {
    cancel: '取消',
    ok: '确定',
    next: '下一步',
    back: '返回',
    copy: '复制',
    paste: '粘贴',
    send: '发送'
  },
  // 安全设置的子页面和登录注册子页面的表单页面
  form: {
    // form页面的输入框label
    label: {
      countrySelect: '国家和地区',
      account: '账号',
      oldPwd: '旧密码',
      newPwd: '新密码',
      confirmPwd: '确认密码',
      emailAddress: '邮箱地址',
      emailVerifyCode: '邮箱验证码',
      secretKey: '密钥',
      googleVerifyCode: '谷歌验证码',
      smsVerifyCode: '短信验证码',
      moneyPwd: '资金密码',
      email: '邮箱',
      password: '密码'
    },
    // form页面的输入框placeholder
    placeholder: {
      pleaseInputOldPwd: '请输入旧的密码',
      pleaseInputNewPwd: '请输入新密码',
      pleaseInputConfirmPwd: '请再次输入密码',
      pleaseInputPhoneNumber: '请输入您的手机号',
      pleaseInputEmailAddress: '请输入邮箱地址',
      pleaseInputEmailVerifyCode: '请输入邮箱验证码',
      newPwd: '新密码',
      emailVerifyCode: '短信验证码'
    },
    // form页面的一些提示
    notice: {
      pwdFormat: '密码必须是8个字符，而且同时包含字母和数字。',
      phone: '一个手机只能作为一个账号的登录名',
      email: '一个邮箱地址只能作为一个账号的登录名',
      smsVerify: '我们已发送验证码到你的手机:',
      noSMSVerify: '收不到验证码短信？',
      reget: '重新获取'
    },
    // form页面的按钮
    btn: {
      editPwd: '修改密码',
      smsVerfity: '短信验证',
      emailVerfity: '邮箱验证',
      confirmEdit: '确定修改',
      openGoogleConfirm: '开启google认证',
      forgetOldPwd: '忘记旧密码？',
      forgetPwd: '忘记密码？',
      login: '登录',
      nextStep: '下一步',
      edit: '修改',
      findPwdByPhone: '短信找回',
      findPwdByEmail: '邮箱找回'
    }
  },
  // 首页
  index: {
    totalAmount: '总资产(元)',
    qrCode: '扫一扫',
    payCode: '付款码',
    receivingCode: '收款码',
    moneyCompose: '资金构成',
    moneyClassify: '钱包分类',
    totalFunding: '资金总估'
  },
  // 设置界面
  setting: {
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
    }
  },
  record: {
    transferRecord: '转账记录',
    rechargeRecord: '充值记录',
    inMoneyFormat: '转入：{number}笔',
    outMoneyFormat: '转出：{number}笔',
    dateFormat: '{year}年{month}月',
    today: '今天',
    confirmNumber: '确认数:'
  },
  status: {
    audit: '待审核'
  },
  editAvatar: {
    name: '修改头像',
    album: '从相册选择',
    camera: '拍摄'
  },
  wallet: {
    totalAmount: '总价值(元)',
    pay: '支付',
    mentionMoney: '提币',
    hightest: '24H最高',
    lowwest: '24H最低',
    walletAddress: '钱包地址',
    walletName: '钱包'
  },
  withdraw: {
    widthdraw: '提币',
    record: '提币记录',
    userableBalance: '可用余额',
    totalAssets: '资产总估(元)',
    address: '钱包地址',
    amount: '提币个数(个)',
    placeholder: {
      address: '请输入钱包地址',
      amount: '请输入提币个数'
    },
    coinTotalAssets: '提币资产总估(元)',
    currencyFee: '提币手续费',
    tips: '提币到账时间受到区块链网络限制,可能时间较长',
    raiseCoin: '提币',
    assetsPw: '请输入资金密码',
    forgetPw: '忘记密码?'
  },
  qrCode: {
    payToMerchant: '向商家付款',
    selecWallet: '选择钱包',
    myPayCode: '我的付款码',
    payNotice: '如付款失败，请尝试其他付款方式',
    collectMoney: '个人收钱',
    savePhoto: '保存图片',
    transforRecord: '转账记录',
    myCollectCode: '我的收款码'
  },
  pay: {
    pay: '支付',
    payCount: '支付个数',
    remarkNotice: '添加备注(50字以内)',
    walletInfo: '钱包信息',
    selectWallet: '选择钱包',
    confirm: '确认转账',
    transforSuccess: '转账成功',
    finish: '完成',
    pwd: '请输入资金密码'
  },
  user: {
    login: '登录',
    register: '注册',
    phoneLogin: '手机号码登录',
    emailLogin: '邮箱登录',
    forgetPwd: '忘记密码',
    verifyCode: '验证码',
    password: '密码',
    email: '邮箱',
    phone: '手机号码',
    emailRegister: '邮箱注册',
    phoneRegister: '手机注册'
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
    editAvatar: '修改头像'
  },
  // 侧边栏菜单
  sideBar: {
    security: '安全设置',
    payList: '支付账单',
    transferRecord: '转账记录',
    rechargeRecord: '充提记录',
    setting: '设置'
  },
  error: {

  }
}
