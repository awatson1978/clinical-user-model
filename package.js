Package.describe({
  name: "clinical:user-model",
  summary: "A social user package",
  version: "0.2.0",
  git: "https://github.com/awatson1978/clinical-user-model.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0.2.1");

  api.use([
        "socialize:base-model@0.2.3",
        "accounts-base",
        "clinical:collaborations@1.1.0"
    ]);

  api.imply(["socialize:base-model", "accounts-base"]);

  //Add the user-model files
  api.addFiles("lib/user-model.js");

  api.export("User");
});
