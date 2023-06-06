## Infra

Terraform code for managing vercel (connected as Github Application) deployment and its connected domains with redirection, as well as AWS S3 tfstate store.

> Make sure `VERCEL_API_TOKEN` is defined as environment variable for vercel deployment

## Validate, Plan, Apply
```shell
$ cd ./infra
$ terraform init
$ terraform validate # validate config
$ terraform plan # see terraform plan
$ terraform apply # apply terraform plan
```

## Import vercel state

```shell
$ terraform import vercel_project.personal_website "pavel-personal-website"
$ terraform import vercel_project_domain.personal_website_domain "pav3ldurov/pavel-personal-website/p3ld3v.dev"
$ terraform import vercel_project_domain.personal_website_redirect "pav3ldurov/pavel-personal-website/www.p3ld3v.dev"
```
