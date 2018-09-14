@echo 超级钱包
@echo 自动化生产apk脚本
::path1为vue项目绝对路径
set path1="C:\Users\RookieZz\Desktop\Company-project\hengan\vue\wallet_mobile"
::path2为对应cordova项目绝对路径
set path2="C:\Users\RookieZz\Desktop\Company-project\hengan\cordova\wallet_mobile"
::path3为jdk安装目录
set path3="C:\Program Files\Java\jdk1.8.0_151\bin"
@echo vue打包开始
call cd %path1%
call npm run buildApp
@echo 开始打包APK
call cd %path2%
call cordova build --release android
@echo 移动apk文件回到vue项目中
call xcopy %path2%\platforms\android\build\outputs\apk\android-armv7-release-unsigned.apk %path1% /y
@echo 移动到sdk下进行打包
call xcopy %path1%\android-armv7-release-unsigned.apk %path3% /y
call cd %path3%
@echo 删除之前的name.apk
call del name_unsigned.apk name.apk
@echo 重命名
call ren android-armv7-release-unsigned.apk name_unsigned.apk
@echo 签名
call jarsigner -verbose -keystore name.keystore -signedjar name.apk name_unsigned.apk name.keystore
@echo 移回vue项目目录
call xcopy %path3%\name.apk %path1% /y

