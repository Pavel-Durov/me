
terraform {
  required_version = "~> 1.4.6"
  backend "s3" {
    bucket = "eu-west-1-kimchi-tfstate-store"
    key    = "eu-west-1/vercel_personal_website"
    region = "eu-west-1"
  }
}

# VERCEL_API_TOKEN defined as environment variable in .dotfiles
# provider "vercel" { 
#   api_token = var.vercel_api_token
# }

resource "vercel_project" "personal_website" {
  name = "pavel-personal-website"
  git_repository = {
    type              = "github"
    repo              = "Pavel-Durov/me"
    production_branch = "terraform"
  }
}

resource "vercel_project_domain" "personal_website_domain" {
  project_id = vercel_project.personal_website.id
  domain     = var.personal_website_domain
}

resource "vercel_project_domain" "personal_website_redirect" {
  project_id           = vercel_project.personal_website.id
  domain               = "www.${var.personal_website_domain}"
  redirect             = vercel_project_domain.personal_website_domain.domain
  redirect_status_code = 307
}
