import posthog from "posthog-js";

export default {
  install(app, options) {
    console.log(options)
    app.config.globalProperties.$posthog = posthog.init(
      "<ph_project_api_key>",
      {
        api_host: "<ph_instance_address>",
      }
    );
  },
};