@echo ����Ǯ��
@echo �Զ�������apk�ű�
::path1Ϊvue��Ŀ����·��
set path1="C:\Users\RookieZz\Desktop\Company-project\hengan\vue\wallet_mobile"
::path2Ϊ��Ӧcordova��Ŀ����·��
set path2="C:\Users\RookieZz\Desktop\Company-project\hengan\cordova\wallet_mobile"
::path3Ϊjdk��װĿ¼
set path3="C:\Program Files\Java\jdk1.8.0_151\bin"
@echo vue�����ʼ
call cd %path1%
call npm run buildApp
@echo ��ʼ���APK
call cd %path2%
call cordova build --release android
@echo �ƶ�apk�ļ��ص�vue��Ŀ��
call xcopy %path2%\platforms\android\build\outputs\apk\android-armv7-release-unsigned.apk %path1% /y
@echo �ƶ���sdk�½��д��
call xcopy %path1%\android-armv7-release-unsigned.apk %path3% /y
call cd %path3%
@echo ɾ��֮ǰ��name.apk
call del name_unsigned.apk name.apk
@echo ������
call ren android-armv7-release-unsigned.apk name_unsigned.apk
@echo ǩ��
call jarsigner -verbose -keystore name.keystore -signedjar name.apk name_unsigned.apk name.keystore
@echo �ƻ�vue��ĿĿ¼
call xcopy %path3%\name.apk %path1% /y

