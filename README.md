# Cygni AWS kompetensutveckling 2017

## Pre-setup

1. Log in to AWS console, on the eu-central-1 region
1. Setup IAM role 'ec2-with-s3': with AmazonS3FullAccess
1. Create S3 bucket. Make sure that it is publicly readable. Make note of name, to be used below

## Installation / Launch

1. Create EC2 instance: Amazon AMI, t2.micro
1. IAM role: 'ec2-with-s3'
1. Advanced details: user data: paste install.sh
1. Before moving on, paste name of S3 bucket to replace "ACTUALBUCKETNAME" in the user data
1. Configure security group: add HTTP rule.
1. Review and Launch + Launch
1. Go to external IP and refresh. Expected time to launch is around 45-50 seconds.
1. Upload images to the bucket
1. Refresh ec2 url to see images
