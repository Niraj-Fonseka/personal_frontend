workflow "New workflow" {
  on = "push"
  resolves = [
    "GitHub Action for Google Cloud",
    "GitHub Action for Google Cloud SDK auth",
  ]
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = [
    "npm install",
    "GitHub Action for Google Cloud SDK auth",
  ]
  args = "run build ."
}

action "GitHub Action for Google Cloud" {
  uses = "actions/gcloud/cli@1a017b23ef5762d20aeb3972079a7bce2c4a8bfe"
  needs = ["GitHub Action for npm"]
  args = "app deploy"
  secrets = [
    "GCLOUD_AUTH",
    "CLOUDSDK_CORE_PROJECT",
  ]
}

action "GitHub Action for Google Cloud SDK auth" {
  uses = "actions/gcloud/auth@1a017b23ef5762d20aeb3972079a7bce2c4a8bfe"
  secrets = [
    "GCLOUD_AUTH",
    "CLOUDSDK_CORE_PROJECT",
  ]
}
