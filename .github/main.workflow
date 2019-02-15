workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for Google Cloud"]
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["npm install"]
  args = "run build ."
}

action "GitHub Action for Google Cloud" {
  uses = "actions/gcloud/cli@1a017b23ef5762d20aeb3972079a7bce2c4a8bfe"
  needs = ["GitHub Action for npm"]
  args = "app deploy"
  secrets = ["GCLOUD_AUTH"]
}
