module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./lib/selenium-server-standalone-3.4.0.jar",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "verbose": "",
      "webdriver.chrome.driver" : "/usr/bin/chromedriver"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "https://tv.edgevideo.com",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : "screenshots"
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "loggingPrefs": { "browser": "ALL" },
        "chromeOptions" : {
          "args" : [
            "disable-gpu",
            "use-fake-device-for-media-stream",
            "use-fake-ui-for-media-stream",
            "--use-file-for-fake-video-capture=./tests/out.y4m",
            "--use-file-for-fake-audio-capture=./tests/out.wav"
          ]
        }
      }
    }
  }
}
