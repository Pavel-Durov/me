terraform {
  required_version = "~> 1.4.6"
}

provider "aws" {
  region              = var.region
  allowed_account_ids = [var.account_id]
}

resource "aws_s3_bucket" "terraform_state_store" {
  bucket = "${var.region}-${var.domain}-tfstate-store"
  tags = {
    "deployed" = "terraform"
  }
}

resource "aws_s3_bucket_versioning" "terraform_state_store_versioning" {
  bucket = aws_s3_bucket.terraform_state_store.id
  versioning_configuration {
    status = "Enabled"
  }
}
