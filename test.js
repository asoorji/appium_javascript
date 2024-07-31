

const {remote } = require('webdriverio');

const capabilities= {
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'emulator-5554',
        "appium:app": "/Users/mac/Development/Automation Testing/appium-automation/apps/APIDemos.apk",
      
        "appium:ensureWebviewsHavePages": true,
        "appium:nativeWebScreenshot": true,
        "appium:newCommandTimeout": 3600,
        "appium:connectHardwareKeyboard": true
}

const wdOpts = {
    hostname: process.env.WD_HOST || '0.0.0.0',
    port: parseInt(process.env.WD_PORT) || 4723,
    logLevel: 'info',
    capabilities
}

async function runTest() {
    const driver = await remote(wdOpts);
    try{
        // Open the Preferences section
        const preference = await driver.$('//*[@text="Preference"]');
        await preference.click();
 
        // Open the Preference dependencies
        const prefDependencies = await driver.$('//*[@text="3. Preference dependencies"]');
        await prefDependencies.click();
 
        // Interact with the checkbox
        const checkBox = await driver.$('//*[@resource-id="android:id/checkbox"]');
        await checkBox.click();

    } finally{
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

runTest().catch(console.error);

