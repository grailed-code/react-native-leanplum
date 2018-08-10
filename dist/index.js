"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var LPBridge = react_native_1.NativeModules.RNLeanplum || {};
var RNLeanplum = /** @class */ (function () {
    function RNLeanplum(appId, key) {
        this.appId = appId;
        this.key = key;
    }
    RNLeanplum.prototype.start = function () {
        LPBridge.start && LPBridge.start();
    };
    RNLeanplum.prototype.setAppIdDevelopmentKey = function () {
        LPBridge.setAppIdDevelopmentKey(this.appId, this.key);
    };
    RNLeanplum.prototype.setAppIdProductionKey = function () {
        LPBridge.setAppIdProductionKey(this.appId, this.key);
    };
    RNLeanplum.prototype.setDeviceId = function (deviceId) {
        LPBridge.setDeviceId && LPBridge.setDeviceId(deviceId);
    };
    RNLeanplum.prototype.setUserId = function (userId) {
        LPBridge.setUserId && LPBridge.setUserId(userId);
    };
    // States
    RNLeanplum.prototype.trackAllAppScreens = function () {
        LPBridge.trackAllAppScreens && LPBridge.trackAllAppScreens();
    };
    RNLeanplum.prototype.pauseState = function () {
        LPBridge.pauseState && LPBridge.pauseState();
    };
    RNLeanplum.prototype.resumeState = function () {
        LPBridge.resumeState && LPBridge.resumeState();
    };
    RNLeanplum.prototype.advanceTo = function (level, info, parameters) {
        if (info && parameters) {
            LPBridge.advanceToLevelInfoParameters &&
                LPBridge.advanceToLevelInfoParameters(level, info, parameters);
        }
        else if (info) {
            LPBridge.advanceToLevelInfo && LPBridge.advanceToLevelInfo(level, info);
        }
        else if (parameters) {
            LPBridge.advanceToLevelParameters &&
                LPBridge.advanceToLevelParameters(level, parameters);
        }
        else {
            LPBridge.advanceToLevel && LPBridge.advanceToLevel(level);
        }
    };
    // Events
    RNLeanplum.prototype.trackInAppPurchases = function () {
        LPBridge.trackInAppPurchases && LPBridge.trackInAppPurchases();
    };
    RNLeanplum.prototype.track = function (event, value, info, parameters) {
        if (event && value && info && parameters) {
            LPBridge.trackEventValueInfoParameters &&
                LPBridge.trackEventValueInfoParameters(event, value, info, parameters);
        }
        else if (event && value && parameters) {
            LPBridge.trackEventValueParameters &&
                LPBridge.trackEventValueParameters(event, value, parameters);
        }
        else if (event && value && info) {
            LPBridge.trackEventValueInfo &&
                LPBridge.trackEventValueInfo(event, value, info);
        }
        else if (event && parameters) {
            LPBridge.trackEventParameters &&
                LPBridge.trackEventParameters(event, parameters);
        }
        else if (event && info) {
            LPBridge.trackEventInfo && LPBridge.trackEventInfo(event, info);
        }
        else if (event && value) {
            LPBridge.trackEventValue && LPBridge.trackEventValue(event, value);
        }
        else {
            LPBridge.trackEvent && LPBridge.trackEvent(event);
        }
    };
    RNLeanplum.prototype.inboxMessages = function () {
        if (LPBridge.inboxMessages) {
            return LPBridge.inboxMessages();
        }
        else {
            return Promise.resolve(null);
        }
    };
    RNLeanplum.prototype.readMessage = function (id) {
        if (LPBridge.readMessage) {
            LPBridge.readMessage(id);
        }
    };
    return RNLeanplum;
}());
exports["default"] = RNLeanplum;
